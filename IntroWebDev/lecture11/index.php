<?php
    // display some server information
    // phpinfo();

    // echo "Hello World!<br>";
    // echo "<h3> Hello World! </h3>";
    // echo "<br>";
    // echo "<p> Hello World! </p>";

    // // alternatively:

    // print "Hello World!<br>";

    // // in general use echo because echo is faster than print and can take multiple parameters


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p> Hello Class! </p>

    <?php
        // echo "Tonight's lecture is about PHP!<br>";

        //variables in PHP
        //how to declare a variable in PHP
        $favoriteCity = "New York City";
        echo "My favorite city is $favoriteCity.<br>";

        $myName = "John Doe";
        echo "My name is $myName.<br>";

        $myAge = 25;
        echo "I am $myAge years old.<br>";

        $isExists = true;
        echo "Does the variable exist? $isExists.<br>";

        // string concatenation in PHP
        $firstName = "John";
        $lastName = "Doe";
        $fullName = $firstName . " " . $lastName;
        echo "My full name is $fullName.<br>";

        // arithmetic operations in PHP

        echo "performing math operations in PHP:<br>";
        echo 2+2;
        echo 10-5;
        echo 3*4;
        echo 10/2;
        echo 10%3; // modulus operator gives the remainder of the division

        $num1 = 150;
        $num2 = 120;
        $result = $num1 + $num2;
        echo "The result of adding $num1 and $num2 is $result.<br>";

        // if statements in PHP

        $isStudent = true;

        if ($isStudent) {
            echo "You are a student.<br>";
        } else {
            echo "You are not a student.<br>";
        }

        // comparison operators in PHP

        $age = 20;
        if ($age >= 18) {
            echo "You are an adult.<br>";
        } else {
            echo "You are a minor.<br>";
        }

        // logical operators in PHP

        $isRaining = true;
        $isCold = false;

        if ($isRaining && $isCold) {
            echo "It's raining and cold outside.<br>";
        } elseif ($isRaining || $isCold) {
            echo "It's either raining or cold outside.<br>";
        } else {
            echo "The weather is nice outside.<br>";
        }

        // switch statement in PHP

        $dayOfWeek = "Monday";

        switch ($dayOfWeek) {
            case "Monday":
                echo "Today is Monday.<br>";
                break;
            case "Tuesday":
                echo "Today is Tuesday.<br>";
                break;
            case "Wednesday":
                echo "Today is Wednesday.<br>";
                break;
            case "Thursday":
                echo "Today is Thursday.<br>";
                break;
            case "Friday":
                echo "Today is Friday.<br>";
                break;
            case "Saturday":
                echo "Today is Saturday.<br>";
                break;
            case "Sunday":
                echo "Today is Sunday.<br>";
                break;
            default:
                echo "Invalid day of the week.<br>";
        }

        // for loop in PHP

        echo "Counting from 1 to 5 using a for loop:<br>";
        for ($i = 1; $i <= 5; $i++) {
            echo "$i ";
        }
        echo "<br>";

        // arrays in PHP
        $fruits = array("Apple", "Banana", "Cherry");
        echo "My favorite fruits are: " . $fruits[0] . ", " . $fruits[1] . ", and " . $fruits[2] . ".<br>";
        print_r($fruits); // print_r is a function that prints human-readable information about a variable, useful for debugging

        echo sizeof($fruits); // size of the array

        // iteration through an array using a foreach loop
        echo "Iterating through the fruits array using a foreach loop:<br>";
        foreach ($fruits as $fruit) {
            echo "$fruit ";
        }
        echo "<br>";

        // while loop in PHP

        echo "Counting from 1 to 5 using a while loop:<br>";
        $i = 1;
        while ($i <= 5) {
            echo "$i ";
            $i++;
        }
        echo "<br>";

        // array iteration using the while loop
        echo "Iterating through the fruits array using a while loop:<br>";
        $i = 0;
        while ($i < sizeof($fruits)) {
            echo "$fruits[$i] ";
            $i++;
        }
        echo "<br>";

        // do while loop in PHP

        echo "Counting from 1 to 5 using a do while loop:<br>";
        $i = 1;
        do {
            echo "$i ";
            $i++;
        } while ($i <= 5);
        echo "<br>";

        // function preview

        function greet($name) {
            return "Hello, $name!";
        }
        echo greet("Alice") . "<br>";


    ?>

    <a href="board.php">Go to the checkerboard page</a>
</body>
</html>