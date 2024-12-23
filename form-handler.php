<?php
// Check if the script is accessed via a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from POST array and sanitize it to prevent injection attacks
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $visitor_email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $servicetype = filter_input(INPUT_POST, 'servicetype', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Email information
    $email_from = 'info@yourwebsite.com'; // This should be a valid email address for the 'From' field
    $email_subject = 'New Form Submission';

    // Prepare email body text
    $email_body = "User Name: $name.\n" .
                  "User Email: $visitor_email.\n" .
                  "Subject: $servicetype.\n" .
                  "User Message: $message.\n";

    // Email recipient
    $to = 'mahapatrashiv05@gmail.com'; // Ensure this is your intended recipient

    // Email headers
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n"; // Specify the character encoding

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirect to index.html after sending the email
        header("Location: index.html");
        exit; // Ensure the script stops executing after a redirect
    } else {
        // Handle errors with the mail function
        echo "Error: Your message could not be sent.";
    }
} else {
    // Redirect or display an error if the script is accessed without a POST request
    header("Location: error.html");
    exit; // Redirect to an error page or back to the form
}
?>
