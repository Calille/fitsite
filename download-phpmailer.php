<?php
// Simple script to download PHPMailer
// Run this once to get PHPMailer files

$phpmailer_url = 'https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip';
$zip_file = 'phpmailer.zip';
$extract_dir = 'PHPMailer';

// Download PHPMailer
echo "Downloading PHPMailer...\n";
file_put_contents($zip_file, file_get_contents($phpmailer_url));

// Extract files
echo "Extracting files...\n";
$zip = new ZipArchive;
if ($zip->open($zip_file) === TRUE) {
    $zip->extractTo('.');
    $zip->close();
    
    // Move files to correct location
    if (is_dir('PHPMailer-master')) {
        rename('PHPMailer-master', $extract_dir);
    }
    
    // Clean up
    unlink($zip_file);
    
    echo "PHPMailer downloaded and extracted successfully!\n";
    echo "Files are now in the 'PHPMailer' directory.\n";
} else {
    echo "Failed to extract PHPMailer.\n";
}
?>
