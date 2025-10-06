<?php
// Simple test file to debug the quiz submission
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode([
        'success' => true,
        'message' => 'PHP is working!',
        'received_data' => $_POST,
        'method' => $_SERVER['REQUEST_METHOD'],
        'content_type' => $_SERVER['CONTENT_TYPE'] ?? 'not set'
    ]);
} else {
    echo json_encode([
        'success' => true,
        'message' => 'Test endpoint is working!',
        'method' => $_SERVER['REQUEST_METHOD']
    ]);
}
?>
