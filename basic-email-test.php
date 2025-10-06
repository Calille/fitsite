<?php
// Basic email test - no PHPMailer dependency
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get basic data
        $firstName = $_POST['firstName'] ?? '';
        $email = $_POST['email'] ?? '';
        
        // Simple validation
        if (empty($firstName) || empty($email)) {
            throw new Exception('Missing required fields');
        }
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email format');
        }
        
        // Try to send basic email using PHP's built-in mail() function
        $subject = "Test Email from Quiz";
        $message = "Hello $firstName,\n\nThis is a test email from your quiz system.\n\nBest regards,\nThe Menopause Way Team";
        $headers = "From: will@coachwill.co.uk\r\n";
        $headers .= "Reply-To: will@coachwill.co.uk\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        $mailSent = mail($email, $subject, $message, $headers);
        
        if ($mailSent) {
            echo json_encode([
                'success' => true,
                'message' => 'Basic email sent successfully!',
                'firstName' => $firstName,
                'email' => $email
            ]);
        } else {
            throw new Exception('Failed to send email using PHP mail() function');
        }
        
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage()
        ]);
    }
} else {
    echo json_encode([
        'success' => true,
        'message' => 'Basic email test endpoint is working!'
    ]);
}
?>
