import sqlite3

#function to execute sql queries
def sqlquery(query):
    connection = sqlite3.connect('test.db')