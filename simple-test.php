<?php
// Very simple test to isolate the issue
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Simple response
echo json_encode([
    'success' => true,
    'message' => 'Simple test working!',
    'method' => $_SERVER['REQUEST_METHOD'],
    'post_data' => $_POST,
    'timestamp' => date('Y-m-d H:i:s')
]);
?>
