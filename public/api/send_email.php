<?php
// Email configuration - Store these securely (environment variables recommended)
define('SMTP_HOST', 'mail.empirel.co.tz'); // Change to your SMTP server
define('SMTP_PORT', 465);
define('SMTP_USERNAME', 'm-tech@empirel.co.tz'); // Your email
define('SMTP_PASSWORD', 'Mtech2025@'); // Your app password
define('RECIPIENT_EMAIL', 'm-tech@empirel.co.tz');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Rate limiting (basic protection)
session_start();
$current_time = time();
if (isset($_SESSION['last_email_time']) && ($current_time - $_SESSION['last_email_time']) < 60) {
    echo json_encode(['success' => false, 'message' => 'Please wait before sending another email.']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);
    
    if (json_last_error() !== JSON_ERROR_NONE || empty($data)) {
        echo json_encode(['success' => false, 'message' => 'Invalid JSON input.']);
        exit();
    }
    
    // Extract and sanitize form data
    $name = isset($data['name']) ? trim(htmlspecialchars(strip_tags($data['name']))) : '';
    $email = isset($data['email']) ? trim(htmlspecialchars(strip_tags($data['email']))) : '';
    $phone = isset($data['phone']) ? trim(htmlspecialchars(strip_tags($data['phone']))) : '';
    $service = isset($data['service']) ? trim(htmlspecialchars(strip_tags($data['service']))) : '';
    $message = isset($data['message']) ? trim(htmlspecialchars(strip_tags($data['message']))) : '';
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'Name, Email, and Message are required.']);
        exit();
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
        exit();
    }
    
    // Additional validation
    if (strlen($name) > 100 || strlen($message) > 1000) {
        echo json_encode(['success' => false, 'message' => 'Input too long.']);
        exit();
    }
    
    // Try to send email using SMTP
    if (sendEmailSMTP($name, $email, $phone, $service, $message)) {
        $_SESSION['last_email_time'] = $current_time;
        echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only POST requests are allowed.']);
}

function sendEmailSMTP($name, $email, $phone, $service, $message) {
    // Email content
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Service: $service\n";
    $body .= "Message:\n$message\n";
    
    // Create email headers
    $headers = "From: " . SMTP_USERNAME . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // For better reliability, use PHPMailer (commented out - requires library)
    /*
    require_once 'vendor/autoload.php';
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USERNAME;
        $mail->Password   = SMTP_PASSWORD;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        
        $mail->setFrom(SMTP_USERNAME, 'Contact Form');
        $mail->addAddress(RECIPIENT_EMAIL);
        $mail->addReplyTo($email, $name);
        
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        
        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("Email sending failed: " . $mail->ErrorInfo);
        return false;
    }
    */
    
    // Fallback to basic mail() function
    return mail(RECIPIENT_EMAIL, $subject, $body, $headers);
}
?>