<?php
// Capture any output and errors
ob_start();

// Quiz Email Handler - Sends personalized results based on answers
// Uses PHP's built-in mail() function - no external dependencies

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 0); // Prevent HTML errors from breaking JSON
ini_set('log_errors', 1);

// Add CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    ob_end_clean();
    http_response_code(200);
    exit();
}

// Function to generate personalized advice based on quiz answers
function generatePersonalizedAdvice($q1, $q2, $q3, $q4, $q5, $q6, $q7) {
    $advice = [];
    
    // Sleep & Recovery Analysis
    if (strpos($q1, 'poor') !== false || strpos($q1, 'trouble') !== false) {
        $advice[] = [
            'area' => 'Sleep & Recovery',
            'priority' => 'HIGH',
            'advice' => 'Your sleep quality is significantly impacting your hormones and metabolism. Focus on: 1) Consistent 10pm bedtime, 2) Cool bedroom (18-20°C), 3) No screens 1 hour before bed.',
            'impact' => 'This alone could improve your results by 30-40%'
        ];
    } elseif (strpos($q1, 'good') !== false || strpos($q1, 'well') !== false) {
        $advice[] = [
            'area' => 'Sleep & Recovery',
            'priority' => 'MAINTAIN',
            'advice' => 'Excellent! Your sleep foundation is solid. Keep prioritizing 7-9 hours nightly.',
            'impact' => 'Your sleep habits are supporting your goals'
        ];
    }
    
    // Protein Intake Analysis
    if (strpos($q2, 'low') !== false || strpos($q2, 'not sure') !== false) {
        $advice[] = [
            'area' => 'Protein Intake',
            'priority' => 'HIGH',
            'advice' => 'Increasing protein to 1.6g per kg bodyweight will boost your metabolism by 15-30%. Add protein to every meal: eggs, Greek yogurt, chicken, fish.',
            'impact' => 'This could accelerate your fat loss by 2-3x'
        ];
    } elseif (strpos($q2, 'adequate') !== false || strpos($q2, 'good') !== false) {
        $advice[] = [
            'area' => 'Protein Intake',
            'priority' => 'OPTIMIZE',
            'advice' => 'Great protein intake! Focus on timing: 30g within 1 hour of waking, and 20-30g every 3-4 hours.',
            'impact' => 'Optimizing timing could improve results by 20%'
        ];
    }
    
    // Strength Training Analysis
    if (strpos($q3, 'never') !== false || strpos($q3, 'rarely') !== false) {
        $advice[] = [
            'area' => 'Strength Training',
            'priority' => 'CRITICAL',
            'advice' => 'Strength training is ESSENTIAL for women 40+. Start with 2x per week, 30 minutes. Focus on squats, deadlifts, push-ups, rows.',
            'impact' => 'This is the #1 factor for sustainable fat loss in menopause'
        ];
    } elseif (strpos($q3, 'regular') !== false || strpos($q3, 'consistent') !== false) {
        $advice[] = [
            'area' => 'Strength Training',
            'priority' => 'PROGRESS',
            'advice' => 'Excellent! Keep progressing with heavier weights or more reps. Add 1-2 more sessions if possible.',
            'impact' => 'You\'re on the right track for long-term success'
        ];
    }
    
    // Energy Balance Analysis
    if (strpos($q4, 'eat more') !== false || strpos($q4, 'restrict') !== false) {
        $advice[] = [
            'area' => 'Energy Balance',
            'priority' => 'HIGH',
            'advice' => 'Stop restricting calories! This slows your metabolism. Focus on eating enough protein and whole foods.',
            'impact' => 'Proper nutrition will actually speed up your metabolism'
        ];
    } elseif (strpos($q4, 'balanced') !== false || strpos($q4, 'moderate') !== false) {
        $advice[] = [
            'area' => 'Energy Balance',
            'priority' => 'MAINTAIN',
            'advice' => 'Good approach! Keep focusing on quality over quantity. Monitor energy levels and adjust as needed.',
            'impact' => 'Your balanced approach is sustainable'
        ];
    }
    
    // Stress Management Analysis
    if (strpos($q5, 'high') !== false || strpos($q5, 'overwhelming') !== false) {
        $advice[] = [
            'area' => 'Stress Management',
            'priority' => 'CRITICAL',
            'advice' => 'High stress is blocking your fat loss. Implement: 1) 5-minute morning meditation, 2) Daily walks, 3) Set boundaries.',
            'impact' => 'Reducing stress could unlock 50% better results'
        ];
    } elseif (strpos($q5, 'manage') !== false || strpos($q5, 'cope') !== false) {
        $advice[] = [
            'area' => 'Stress Management',
            'priority' => 'OPTIMIZE',
            'advice' => 'Good stress management! Consider adding breathwork or yoga to further support your hormones.',
            'impact' => 'Your stress management is supporting your goals'
        ];
    }
    
    // Daily Movement Analysis
    if (strpos($q6, 'sedentary') !== false || strpos($q6, 'desk') !== false) {
        $advice[] = [
            'area' => 'Daily Movement',
            'priority' => 'HIGH',
            'advice' => 'Increase daily movement: 10,000 steps minimum, take breaks every hour, use stairs, park further away.',
            'impact' => 'This could burn an extra 200-400 calories daily'
        ];
    } elseif (strpos($q6, 'active') !== false || strpos($q6, 'regular') !== false) {
        $advice[] = [
            'area' => 'Daily Movement',
            'priority' => 'MAINTAIN',
            'advice' => 'Great daily activity! Keep it up and consider adding short walks after meals.',
            'impact' => 'Your movement habits are excellent'
        ];
    }
    
    // Nutrition Consistency Analysis
    if (strpos($q7, 'inconsistent') !== false || strpos($q7, 'struggle') !== false) {
        $advice[] = [
            'area' => 'Nutrition Consistency',
            'priority' => 'HIGH',
            'advice' => 'Consistency is key! Start with 1-2 meals per day that you can nail 100%. Build from there.',
            'impact' => 'Consistency beats perfection every time'
        ];
    } elseif (strpos($q7, 'consistent') !== false || strpos($q7, 'good') !== false) {
        $advice[] = [
            'area' => 'Nutrition Consistency',
            'priority' => 'PROGRESS',
            'advice' => 'Excellent consistency! Keep building on this foundation. Consider meal prep to maintain momentum.',
            'impact' => 'Your consistency is your superpower'
        ];
    }
    
    return $advice;
}

// Handle the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get form data
        $firstName = trim($_POST['firstName'] ?? '');
        $lastName = trim($_POST['lastName'] ?? '');
        $email = trim($_POST['email'] ?? '');
        $phoneNumber = trim($_POST['phoneNumber'] ?? '');
        $q1 = trim($_POST['q1'] ?? '');
        $q2 = trim($_POST['q2'] ?? '');
        $q3 = trim($_POST['q3'] ?? '');
        $q4 = trim($_POST['q4'] ?? '');
        $q5 = trim($_POST['q5'] ?? '');
        $q6 = trim($_POST['q6'] ?? '');
        $q7 = trim($_POST['q7'] ?? '');
        
        // Validate required fields
        $missingFields = [];
        if (empty($firstName)) $missingFields[] = 'firstName';
        if (empty($lastName)) $missingFields[] = 'lastName';
        if (empty($email)) $missingFields[] = 'email';
        if (empty($phoneNumber)) $missingFields[] = 'phoneNumber';
        if (empty($q1)) $missingFields[] = 'q1';
        if (empty($q2)) $missingFields[] = 'q2';
        if (empty($q3)) $missingFields[] = 'q3';
        if (empty($q4)) $missingFields[] = 'q4';
        if (empty($q5)) $missingFields[] = 'q5';
        if (empty($q6)) $missingFields[] = 'q6';
        if (empty($q7)) $missingFields[] = 'q7';
        
        if (!empty($missingFields)) {
            throw new Exception('Missing required fields: ' . implode(', ', $missingFields));
        }
        
        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email address format: ' . $email);
        }
        
        // Generate personalized advice
        $advice = generatePersonalizedAdvice($q1, $q2, $q3, $q4, $q5, $q6, $q7);
        
        // Create personalized email content
        $subject = "Your Personalized Fat-Loss Blocker Results + 3-Step Fix";
        
        $message = "Hi $firstName,\n\n";
        $message .= "Thank you for completing the quiz! I've analyzed your answers and created a personalized action plan specifically for your situation. Here's what I found:\n\n";
        
        foreach ($advice as $item) {
            $message .= "=== " . $item['area'] . " (" . $item['priority'] . ") ===\n";
            $message .= $item['advice'] . "\n";
            $message .= "Impact: " . $item['impact'] . "\n\n";
        }
        
        $message .= "Your Quiz Answers:\n";
        $message .= "Sleep & Recovery: $q1\n";
        $message .= "Protein Intake: $q2\n";
        $message .= "Strength Training: $q3\n";
        $message .= "Energy Balance: $q4\n";
        $message .= "Stress Management: $q5\n";
        $message .= "Daily Movement: $q6\n";
        $message .= "Nutrition Consistency: $q7\n\n";
        
        $message .= "Based on your responses, you're an excellent fit for our 8-Week Transformation Programme. We'll be in touch soon with personalized support and next steps.\n\n";
        $message .= "Have questions? Simply reply to this email and we'll be happy to help.\n\n";
        $message .= "Warm regards,\nThe Menopause Way Team\n\n";
        $message .= "© " . date('Y') . " TP Health & Fitness. All rights reserved.";
        
        // Email headers
        $fromEmail = "themenopauseway@tphealthfitness.com";
        $fromName = "The Menopause Way";
        $replyTo = "will@coachwill.co.uk";

        $headers = "From: $fromName <$fromEmail>\r\n";
        $headers .= "Reply-To: $replyTo\r\n";
        $headers .= "Return-Path: $fromEmail\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        
        // Send email
        $mailSent = mail($email, $subject, $message, $headers);
        
        // Clear any buffered output before sending JSON
        ob_end_clean();
        
        if ($mailSent) {
            // Return success response
            header('Content-Type: application/json');
            echo json_encode([
                'success' => true,
                'message' => 'Personalized email sent successfully!',
                'messageId' => 'mail-' . time()
            ]);
        } else {
            throw new Exception('Failed to send email using PHP mail() function');
        }
        
    } catch (Exception $e) {
        // Clear any buffered output before sending JSON
        ob_end_clean();
        
        // Return error response
        header('Content-Type: application/json');
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage()
        ]);
    }
} else {
    // Clear any buffered output before sending JSON
    ob_end_clean();
    
    // Return method not allowed
    header('Content-Type: application/json');
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed'
    ]);
}
?>