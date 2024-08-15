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
query = "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, password TEXT, address TEXT, ContactInfo TEXT)"

sqlquery(query)

query = "INSERT INTO users (name, password, address, ContactInfo) VALUES ('John Doe', 'password12345', '1234 Elm St', '555-600-7996')"

sqlquery(query)

query = "SELECT * FROM users"

values = sqlquery(query)

print(values)
