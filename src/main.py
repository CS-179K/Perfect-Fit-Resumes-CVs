from flask import Flask, request, jsonify
from flask_cors import CORS
from huggingface_hub import InferenceClient
from dotenv import load_dotenv
import os
import sqlite3

# Load environment variables
load_dotenv()

# Initialize Hugging Face InferenceClient
client = InferenceClient(
    os.getenv('HG_NAME'),
    token=os.getenv('HG_API_KEY'),
)

app = Flask(__name__)
# cors = CORS(app, origins='*')
# CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for simplicity

#function to execute sql queries
def sqlquery(query):
    connection = sqlite3.connect('test.db')
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()
    values  = cursor.fetchall()
    connection.close()
    return values

@app.route('/api/main', methods=['GET', 'POST'])
def submit_data():
    if request.method == 'POST':
        # Handle POST request
        data = request.json
        if not data:
            return jsonify({"error": "Invalid or no data provided"}), 400

        document_type = data.get('documentType')
        person_description = data.get('personDescription')
        job_description = data.get('jobDescription')

        prompt = "Don't give me any suggestions, just give me the " + document_type
        prompt += "Using my resume/cover letter: " + person_description + "\n" + \
          "Create a " + document_type + "\n" + \
          "for this job: " + job_description
        # Create the prompt for Hugging Face
        prompts = [{"role": "user", "content": prompt}]
        result = ''

        # Send request to Hugging Face and accumulate the response
        for message in client.chat_completion(
            prompts,
            max_tokens=500,
            stream=True,
        ):
            result += message.choices[0].delta.content

        return jsonify({"message": "Data received successfully!", "prompt": prompt, "result": result})

    elif request.method == 'GET':
        # Handle GET request (if needed)
        return jsonify({"message": "Data sent successfully!", "result": "Loading.."})

@app.route('/api/profile', methods=['GET', 'POST'])
def handle_profile():
    if request.method == 'POST':
        # Handle POST request
        data = request.json
        if not data:
            return jsonify({"error": "Invalid or no data provided"}), 400

        id = data.get('id')
        email = data.get('email')
        password = data.get('password')
        firstName = data.get('firstName')
        lastName = data.get('lastName')
        major = data.get('major')
        university = data.get('university')
        address = data.get('address')
        phoneNumber = data.get('phoneNumber')
        print("HIAJDKJASNDKJSA EMAIL::", email)

        # Update user data into the database with parameterized query
        query = "UPDATE users" + \
            "\nSET email = " + email + ", firstName = " + firstName + ", lastName = " + lastName + ", major = " + major + ", university = " + university + ", address = " + address + ", phoneNumber = " + phoneNumber + "" + \
            "\nWHERE id = " + str(id) + ";"
            
        sqlquery(query)
        
        return jsonify({"message": "Data updated successfully!"})
    
    elif request.method == 'GET':
        # Get the 'id' from query parameters
        id = request.args.get('id')
        # print(f"Received ID: {id}")

        if not id:
            return jsonify({"error": "ID parameter is missing"}), 400
        
        # id = 1

        # Execute the query to fetch user details with parameterized query
        query = "SELECT email, password, firstName, lastName, major, university, address, phoneNumber" + \
            "\nFROM users" + \
            "\nWHERE id = " + str(id)
        
        # params = (id)
        user = sqlquery(query)

        if user:
            # Convert tuple to dictionary
            user_data = {
                "email": user[0][0],
                "password": user[0][1],
                "firstName": user[0][2],
                "lastName": user[0][3],
                "major": user[0][4],
                "university": user[0][5],
                "address": user[0][6],
                "phoneNumber": user[0][7]
            }
            return jsonify(user_data)
        else:
            return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)