import sqlite3

#function to execute sql queries
def sqlquery(query):
    connection = sqlite3.connect('test.db')
    cursor = connection.cursor()
    cursor.execute(query) 
    connection.commit()
    values  = cursor.fetchall()
    connection.close()
    return values
    

# Create the users table if it doesn't already exist
query = """
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY, 
    email CHAR(255), 
    password CHAR(255), 
    firstName CHAR(255), 
    lastName CHAR(255), 
    major CHAR(255), 
    university CHAR(255), 
    address CHAR(255), 
    phoneNumber CHAR(10)
)
"""
sqlquery(query)
# Create the documents table to store resumes and cover letters
query = """
CREATE TABLE IF NOT EXISTS documents(
    document_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    document_type TEXT,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    job_title TEXT,
    company_name TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
"""
sqlquery(query)

# query = "INSERT INTO users (email, password, firstName, lastName, major, university, address, phoneNumber) VALUES ('woawee@gmail.com', 'password12345', 'Stressed', 'Desserts', 'Culinary Arts', 'UC-Riverside', '1234 Elm St', '555-600-7996')"

# sqlquery(query)

# thing = "2"
# query = "DELETE FROM users WHERE id = 3"
# sqlquery(query)

# query = "SELECT * FROM users"

# values = sqlquery(query)

# print(values)

# sample user case for testing
# Insert a sample user into the users table
query = """
INSERT INTO users (email, password, firstName, lastName, major, university, address, phoneNumber)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
"""
user_data = ('johndoe@example.com', 'password123', 'John', 'Doe', 'Computer Science', 'UC Riverside', '1234 Elm St', '5556007996')
sqlquery(query, user_data)

# Get the user_id of the newly inserted user
query = "SELECT id FROM users WHERE email = ?"
user_id = sqlquery(query, ('johndoe@example.com',))[0][0]

# Insert a sample resume into the documents table
query = """
INSERT INTO documents (user_id, document_type, content)
VALUES (?, ?, ?)
"""
resume_content = "John Doe's Resume Content..."
sqlquery(query, (user_id, 'resume', resume_content))

# Insert a sample cover letter into the documents table
query = """
INSERT INTO documents (user_id, document_type, content)
VALUES (?, ?, ?)
"""
cover_letter_content = "John Doe's Cover Letter Content..."
sqlquery(query, (user_id, 'cover_letter', cover_letter_content))

# Query the documents table to verify the data
query = "SELECT * FROM documents"
documents = sqlquery(query)

print("Inserted documents:")
for document in documents:
    print(document)
