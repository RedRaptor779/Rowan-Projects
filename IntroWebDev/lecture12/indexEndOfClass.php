<?php
    //define variables and set to empty values
    $name = $email = $website = $comment = $major = "";

    //check if the server request method is either a POST or a GET
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $name = sanitize_input($_POST["name"]);
        $email = sanitize_input($_POST["email"]);
        $website = sanitize_input($_POST["website"]);
        $comment = sanitize_input($_POST["comment"]);
        $major = sanitize_input($_POST["major"]);
    }

    //lets create a function to cleanse/sanitize user input before POSTing data
    function sanitize_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Form Validation</title>
</head>
<body>
    <h2>Course Registration Site</h2>
    <form method="POST" action="index.php">
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" name="name"/></td>
            </tr>
            <tr>
                <td>E-mail</td>
                <td><input type="text" name="email"/></td>
            </tr>
            <tr>
                <td>Website address:</td>
                <td><input type="text" name="website"/></td>
            </tr>
            <tr>
                <td>Class details:</td>
                <td><textarea name="comment" rows="5" cols="40"></textarea></td>
            </tr>
            <tr>
                <td>Major</td>
                <td>
                    <input type="radio" name="major" value="cs">Computer Science
                    <input type="radio" name="major" value="cis">Information Systems
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" name="submit" value="Register!"/>
                </td>
            </tr>
        </table>
    </form>

    <?php
        echo "<h2>Your registration details are as follows: </h2>";
        echo $name . "<br/>";
        echo $email . "<br/>";
        echo $website . "<br/>";
        echo $comment . "<br/>";
        echo $major . "<br/>";
    ?>
</body>
</html>