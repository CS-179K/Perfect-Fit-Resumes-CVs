from flask import Flask, request, jsonify
from flask_cors import CORS
from huggingface_hub import InferenceClient
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Hugging Face InferenceClient
client = InferenceClient(
    os.getenv('HG_NAME'),
    token=os.getenv('HG_API_KEY'),
)

app = Flask(__name__)
# cors = CORS(app, origins='*')
CORS(app)

@app.route('/api/users', methods=['GET', 'POST'])
def submit_data():
    if request.method == 'POST':
        # Handle POST request
        data = request.json
        if not data:
            return jsonify({"error": "Invalid or no data provided"}), 400

        document_type = data.get('documentType')
        person_description = data.get('personDescription')
        job_description = data.get('jobDescription')

        # Create the prompt for Hugging Face
        messages = [{"role": "user", "content": "Using my cover letter: " + person_description +
                    "\nCreate a " + document_type + 
                    "for this job: " + job_description}]
        result = ''

        # Send request to Hugging Face and accumulate the response
        for message in client.chat_completion(
            messages,
            max_tokens=500,
            stream=True,
        ):
            result += message.choices[0].delta.content

        return jsonify({"message": "Data received successfully!", "result": result})

    elif request.method == 'GET':
        # Handle GET request (if needed)
        return jsonify({"message": "Data sent successfully!", "result": "Loading.."})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
