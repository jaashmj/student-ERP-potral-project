<?php
// Configuration
$dbHost = 'localhost';
$dbUsername = 'your_username';
$dbPassword = 'your_password';
$dbName = 'your_database_name';

// Connect to the database
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle login form submission
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query to check if username and password are correct
    $query = "SELECT * FROM `student login`;";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        // Login successful, redirect to student ERP portal
        header('Location: student ERP portal.html');
        exit;
    } else {
        // Login failed, display error message
        echo 'Invalid username or password!';
    }
}

$conn->close();
