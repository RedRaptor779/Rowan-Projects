<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkerboard</title>
</head>
<body>
    <table width="400px" cellspacing="0" cellpadding="0" border="1px">
    <?php
        //use outer loop for the rows 
        for ($row=1; $row <=8; $row++){
            //use inner loop for the columns
            echo "<tr>";
            for ($col=1; $col <=8; $col++){
                echo "<td height='35px' width='30px'";
                //check if the sum of the row and column is even or odd
                if (($row + $col) % 2 == 0){
                    echo " bgcolor='black'";
                } else {
                    echo " bgcolor='white'";
                }
                echo "></td>";
            }
            echo "</tr>";
        }
    ?>

    <a href="calculator.php">to calculator</a>
</body>
</html>