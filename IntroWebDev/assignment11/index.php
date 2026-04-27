<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 11</title>
</head>
<body>
<?php

// (20%) Counting from 5 to 15 using a Loop - Use a PHP loop (for, while, or do-while) to display a count from 5 to 15.

for ($i = 5; $i <= 15; $i++) {
    echo $i . "<br>";
}

// (20%) Factorial Using a For Loop - Write a PHP program that calculates the factorial of a number using a for loop, 
// then display the result on the page

 for ($i = 1; $i <= 5; $i++) {
    $factorial = 1;
    for ($j = 1; $j <= $i; $j++) {
        $factorial *= $j;
    }
    echo "Factorial of " . $i . " is: " . $factorial . "<br>";
}

// (20%) Factorial Using a Recursive Function - Create a recursive PHP function that computes the factorial of a number. 
// Display both the function definition and the resulting output.

function factorial($n) {
    if ($n == 0) {
        return 1;
    } else {
        return $n * factorial($n-1);
    }
}

echo "Factorial of 5 is: " . factorial(5) . "<br>";

// (20%) Temperature Analysis with Indexed Arrays - Using the following list of recorded temperatures:
// 78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73

// Your program must:

// Store the temperatures in an indexed PHP array
// Calculate and display the average temperature
// Display the five lowest temperatures
// Display the five highest temperatures

$temperatures = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73];

// Calculate the average temperature
$average = array_sum($temperatures) / count($temperatures);
echo "Average temperature: " . $average . "<br>";

// Display the five lowest temperatures
sort($temperatures);
echo "Five lowest temperatures: ";
for ($i = 0; $i < 5; $i++) {
    echo $temperatures[$i] . " ";
}
echo "<br>";

// Display the five highest temperatures
rsort($temperatures);
echo "Five highest temperatures: ";
for ($i = 0; $i < 5; $i++) {
    echo $temperatures[$i] . " ";
}
echo "<br>";

// (20%) Pattern Generation Using For Loops - Use PHP for loops to generate and display the following pattern:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********

for ($i = 1; $i <= 8; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "*";
    }
    echo "<br>";
}

?>
</body>
</html>

