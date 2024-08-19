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
    

#sample code to test the function    
query = "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, email TEXT, password TEXT, firstName TEXT, lastName TEXT, major TEXT, university TEXT, address TEXT, phoneNumber CHAR(10))"

sqlquery(query)

# query = "INSERT INTO users (email, password, firstName, lastName, major, university, address, phoneNumber) VALUES ('woawee@gmail.com', 'password12345', 'Stressed', 'Desserts', 'Culinary Arts', 'UC-Riverside', '1234 Elm St', '555-600-7996')"

# sqlquery(query)

thing = "2"
query = "DELETE FROM users WHERE id = " + thing + ""
sqlquery(query)

query = "SELECT * FROM users"

values = sqlquery(query)

print(values)

# print(values[0][1])