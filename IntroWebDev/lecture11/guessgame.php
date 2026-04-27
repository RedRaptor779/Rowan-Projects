<?php
//start a session
// NOTE sessions allow php to store data that will persist between page refreshes
session_start();

//step 1, initalize the game if it has not been started

if (!isset($_SESSION["secretNumber"]))
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Guessing Game</title>
</head>
<body>
    <h2>PHP Number Guessing Game</h2>
    <form action="" method="POST">
        <input type="number" name="guess" min="1" max="20" placeholder="Enter your guess (1-20)" required>
        </br></br>
        <button type="submit">Submit Guess</button>
    </form>
    <p>Attempts: </p>
</body>
</html>