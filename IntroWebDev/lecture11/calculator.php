<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>simple calculator</title>
</head>

<!-- php code to recieve the post -->
<?php
    $first_num = $_POST['first_num']; // get the first number from the form
    $second_num = $_POST['second_num']; // get the second number from the form
    $operator = $_POST['operator']; // get the operator from the form

    $result = '';
    if (is_numeric($first_num) && is_numeric($second_num)) {
        switch ($operator) {
            case 'add':
                $result = $first_num + $second_num;
                break;
            case 'subtract':
                $result = $first_num - $second_num;
                break;
        }
    }
?>

<body>
    <h1>Simple Calculator</h1>
    <form action="calculator.php" method="POST" id="calc-form">
        <p>
            <input type="number" 
            name="first_num" 
            id="first_num" 
            placeholder="Enter first number" 
            required>
            <b>First Number</b>
        </p>
        <p>
            <input type="number" 
            name="second_num" 
            id="second_num" 
            placeholder="Enter second number" 
            required>
            <b>Second Number</b>
        </p>
        <p>
            <input readonly name="result" value="<?php echo $result; ?>"/>
            <b>Result</b>
        </p>
        <input type="submit" value="add" name="operator" id="operator">
        <input type="submit" value="subtract" name="operator" id="operator">
    </form>

    <a href="guessgame.php">to guessgame</a>
</body>
</html>