<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sending Data With Forms</title>
</head>
<body>
    <h3>Sign up Form</h3>
    <!-- TWO IMPORTANT ATTRIBUTES:
     ACTION = where do we want to process the information?
        NOTE: you can have a different PHP file to process data
     METHOD = GET or POST
        - GET will grab information from FORM and send as querystring
        - POST will send data has request headers
    -->
    <form action="senddataform.php" method="GET">
        <input type="text" placeholder="Enter name" name="username"/><br/>
        <input type="email" placeholder="Enter email" name="email"/><br/>
        <input type="password" placeholder="Enter password" name="password"/><br/>
        <input type="submit" name="submit-button"/>
        <input type="submit" value="Delete" name="delete-button"/>
    </form>
    <?php
        //Superglobals - Two types
        // $_GET
        // $_POST
        // echo $_GET['username'] . '<br/>';
        // echo $_GET['email'] . '<br/>';
        // echo $_GET['password'] . '<br/>';

        // if(empty($_GET['username']))
        //     echo 'No data';
        // else
        //     echo $_GET['username'];
        // * * * * * * * * * * * * * * * * * * * * * * * 

        $myString = 'Hello World';
        echo isset($myString);
        // NOTE: in PHP boolean is:
        // 1 = true, false = null (or nothing)

        //you can declare a function to perform database operations
        function insertRecord()
        {
            echo 'You have inserted a new record';
        }
        
        // We can check if button is clicked or not
        if(isset($_POST['submit-button']))
        {
            echo 'Button was clicked/submitted the form';
            insertRecord();
        }

        if(isset($_POST['delete-button']))
        {
            echo 'Delete button has been pressed';
        }
    ?>
</body>
</html>