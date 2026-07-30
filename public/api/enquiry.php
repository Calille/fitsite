<?php
// TP Health & Fitness — Level 3 PT Diploma enquiry handler
// Receives POST submissions from the enquiry form on pt.tphealthfitness.com
// and emails them to Teighlor. Adapted from the proven TP Performance handler
// running on the same cPanel host (PHP mail()).
//
// Same-origin only: this file is deployed in the subdomain's document root
// alongside the static export, so no CORS headers are required.

ob_start();

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

function respond($success, $payload = [], $statusCode = 200) {
    ob_end_clean();
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode(array_merge(['success' => (bool) $success], $payload));
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, ['error' => 'Method not allowed'], 405);
}

try {
    // Honeypot: real visitors never see or fill this field. Reject if present.
    $honeypot = trim($_POST['company'] ?? '');
    if ($honeypot !== '') {
        respond(false, ['error' => 'Invalid submission.'], 400);
    }

    $name    = trim($_POST['name'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $phone   = trim($_POST['phone'] ?? '');
    $message = trim($_POST['message'] ?? ''); // optional

    $missing = [];
    if ($name === '')  $missing[] = 'name';
    if ($email === '') $missing[] = 'email';
    if ($phone === '') $missing[] = 'phone';

    if (!empty($missing)) {
        respond(false, ['error' => 'Missing required fields: ' . implode(', ', $missing)], 400);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond(false, ['error' => 'Invalid email address.'], 400);
    }

    // Sanitise for header/body usage
    $cleanName    = filter_var($name,    FILTER_SANITIZE_SPECIAL_CHARS);
    $cleanEmail   = filter_var($email,   FILTER_SANITIZE_EMAIL);
    $cleanPhone   = filter_var($phone,   FILTER_SANITIZE_SPECIAL_CHARS);
    $cleanMessage = filter_var($message, FILTER_SANITIZE_SPECIAL_CHARS);

    // Strip CR/LF from header-bound fields to prevent header injection
    $headerSafeName  = preg_replace('/[\r\n]+/', ' ', $cleanName);
    $headerSafeEmail = preg_replace('/[\r\n]+/', '', $cleanEmail);

    $to        = 'teighlor@tphealthfitness.com';
    $subject   = 'PT Diploma enquiry: ' . $headerSafeName;
    $fromEmail = 'noreply@tphealthfitness.com';
    $fromName  = 'PT Diploma Website';

    $body  = "New Level 3 PT Diploma enquiry from pt.tphealthfitness.com:\n\n";
    $body .= "Name:    {$cleanName}\n";
    $body .= "Email:   {$cleanEmail}\n";
    $body .= "Phone:   {$cleanPhone}\n\n";
    if ($cleanMessage !== '') {
        $body .= "Message:\n{$cleanMessage}\n\n";
    }
    $body .= "----------------------------------------\n";
    $body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
    $body .= "Source:    pt.tphealthfitness.com\n";

    $headers  = "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$headerSafeName} <{$headerSafeEmail}>\r\n";
    $headers .= "Return-Path: {$fromEmail}\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    $sent = mail($to, $subject, $body, $headers);

    if (!$sent) {
        respond(false, ['error' => 'Failed to send email.'], 500);
    }

    respond(true, ['message' => 'Enquiry sent successfully.']);

} catch (Exception $e) {
    respond(false, ['error' => 'Server error.'], 500);
}
