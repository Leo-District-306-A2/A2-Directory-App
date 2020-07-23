<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$file_path = $_GET['file'];

// Read JSON file
$json = file_get_contents($file_path);

echo $json;
?>
