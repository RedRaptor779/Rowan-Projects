<!-- 
a database is an organized collection of data
we will be learning about relational databases
think of the columns as categories 

what is mysql?
its an open source relational database management system (RDBMS)
mysql is commonly used in web applications (lAMP stack)
SQL -> structured query language

why is it exciting?
soon we will be able to build CRUD applications (create, read, update, delete)

SQL

CREATE -----------------------

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
   CONSTRAINT constraint_name PRIMARY KEY (column1, column2,...);

INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...);

READ ------------------------

SELECT * FROM table_name;

UPDATE -----------------------

UPDATE table_name SET column1 = value1, column2 = value2,... WHERE condition;

DELETE -----------------------

DELETE FROM table_name WHERE condition;


database command:
mysql -u piecza14 -p -h elvisdb


  -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RowanFlix CRUD Application</title>
</head>
<body>
    <h2>RowanFlix CRUD Application</h2>
    <form action="index.php" method="post">
        <input type="text" placeholder="Enter movie title" name="create-title">
        <br/>
        <input type="text" placeholder="Enter movie genre" name="create-genre">
        <br/>
        <input type="text" placeholder="Enter movie director" name="create-director">
        <br/>
        <input type="text" placeholder="Enter movie release year" name="create-year">
        <br/>
        <input type="submit" value="Save" name="create-button">
    </form>

    <?php

    // lets create a function that is responsible for inserting data into the database

    function createRecord(){
        //display verbose errors
        error_reporting(E_ALL);
        ini_set('display_errors', 1);

        // step 1: setup our connection variables
        $servername = 'elvisdb';
        $username = 'piecza14';
        $password = 'OMITTED';
        $dbname = 'piecza14';

        // step 2: create a connection to the database
        $conn = new mysqli($servername, $username, $password, $dbname);

        // step 3: check if the connection was successful
        if (!$conn) {
            die('Connection failed: ' . $conn->connect_error);
        }
        else {
            echo 'Connection successful';
        }

    }

    // check if the save button was clicked
    if (isset($_POST['create-button'])) {
        echo 'Button was clicked';
        createRecord();
    }
    ?>
</body>
</html>
