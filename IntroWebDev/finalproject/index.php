<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$reviewMessage = '';
$reviewError = '';
$reviews = [];

// Step 1: setup connection variables (provided config)
$servername = 'elvisdb';
$username = 'piecza14';
$password = '11!W3Bd3vclass21!';
$dbname = 'piecza14';

// Step 2: create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Step 3: check if the connection was successful
if ($conn->connect_error) {
    $reviewError = 'Connection failed: ' . $conn->connect_error;
} else {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['review-button'])) {
        $content = trim($_POST['review-content'] ?? '');
        $stars = (int)($_POST['review-stars'] ?? 0);

        if ($content === '') {
            $reviewError = 'Please enter review content.';
        } elseif ($stars < 1 || $stars > 5) {
            $reviewError = 'Please select a star rating from 1 to 5.';
        } else {
            $stmt = $conn->prepare('INSERT INTO reviews (content, stars) VALUES (?, ?)');
            if ($stmt) {
                $stmt->bind_param('si', $content, $stars);
                if ($stmt->execute()) {
                    $reviewMessage = 'Review submitted successfully.';
                } else {
                    $reviewError = 'Failed to save review. Please try again.';
                }
                $stmt->close();
            } else {
                $reviewError = 'Could not prepare the review insert statement.';
            }
        }
    }

    $result = $conn->query('SELECT reviewid, content, stars FROM reviews ORDER BY reviewid DESC LIMIT 10');
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $reviews[] = $row;
        }
        $result->free();
    }
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InfoAudit</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <img id="siteLogo" src="logo.png" alt="InfoAudit logo">
    <h1>InfoAudit</h1>
    <p>Welcome to InfoAudit!</p>

    <h2>Search the web to see what public information is available about you.</h2> <!-- centered -->

    <div id="searchBar">
        <input type="text" id="searchInput" placeholder="Enter your name, email, or phone number">
        <button id="searchButton">Search</button>
    </div>

    <div id="sourcesCards">
        <div class="card">
            <h3>Databases</h3>
            <p>Search for your name, email, or phone number on Google to see what information is publicly available.</p>
        </div>
        <div class="card">
            <h3>Public Records</h3>
            <p>Check public records for any information associated with your name, email, or phone number.</p>
        </div>
        <div class="card">
            <h3>Social Media Profiles</h3>
            <p>Look up your name, email, or phone number on various social media platforms to find any public profiles.</p>
        </div>
    </div>

    <div id="privacyNotice">
        <h2>Privacy Notice</h2>
        <p>InfoAudit is a tool designed to help you understand what information about you is publicly available on the internet. We do not collect or store any personal information entered into the search bar. Please use this tool responsibly and be mindful of the information you share online.</p>
    </div>

    <section id="reviewsSection">
        <h2>Leave a Review</h2>

        <?php if ($reviewMessage !== ''): ?>
            <p class="review-status success"><?php echo htmlspecialchars($reviewMessage, ENT_QUOTES, 'UTF-8'); ?></p>
        <?php endif; ?>

        <?php if ($reviewError !== ''): ?>
            <p class="review-status error"><?php echo htmlspecialchars($reviewError, ENT_QUOTES, 'UTF-8'); ?></p>
        <?php endif; ?>

        <form id="reviewForm" action="index.php" method="post">
            <label for="reviewContent">Your Review</label>
            <textarea id="reviewContent" name="review-content" rows="4" maxlength="500" placeholder="Tell us what you think..."></textarea>

            <label for="reviewStars">Rating</label>
            <div class="star-picker" aria-label="Choose rating from one to five stars">
                <button type="button" class="star-btn" data-value="1" aria-label="1 star">☆</button>
                <button type="button" class="star-btn" data-value="2" aria-label="2 stars">☆</button>
                <button type="button" class="star-btn" data-value="3" aria-label="3 stars">☆</button>
                <button type="button" class="star-btn" data-value="4" aria-label="4 stars">☆</button>
                <button type="button" class="star-btn" data-value="5" aria-label="5 stars">☆</button>
            </div>
            <input type="hidden" id="reviewStars" name="review-stars" value="0">

            <button type="submit" id="reviewSubmit" name="review-button" value="1">Submit Review</button>
        </form>

        <div id="reviewsList">
            <h3>Recent Reviews</h3>
            <?php if (count($reviews) === 0): ?>
                <p class="review-empty">No reviews yet.</p>
            <?php else: ?>
                <?php foreach ($reviews as $review): ?>
                    <?php
                    $starValue = (int)$review['stars'];
                    $safeStars = max(0, min(5, $starValue));
                    $filled = str_repeat('★', $safeStars);
                    $empty = str_repeat('☆', 5 - $safeStars);
                    ?>
                    <article class="review-card">
                        <p class="review-stars"><?php echo htmlspecialchars($filled . $empty, ENT_QUOTES, 'UTF-8'); ?> <span class="review-stars-value">(<?php echo $safeStars; ?>/5)</span></p>
                        <p class="review-content"><?php echo htmlspecialchars($review['content'], ENT_QUOTES, 'UTF-8'); ?></p>
                    </article>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </section>

    <script src="script.js" defer></script>
</body>
</html>

<!-- 

x (10%) jQuery - Incorporate us of jQuery UI into your design 

x (40%) PHP - Demonstrate server-side scripting using PHP for one of your pages, 
and provide evidence that data is successfully being sent and stored in your MySQL database 
(e.g., screenshots of executed PHP code and resulting records in the database).

(40%) MySQL - Discuss how you plan to design the backend to capture and persist data using MySQL, 
and provide evidence of your MySQL tables created on ElvisDB in MySQL Workbench 
(e.g., screenshots of table structures, schemas, and relationships).

 -->