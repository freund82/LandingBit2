<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$apiKey = 'wHHm48J7Ncf8xO30oCw21765112461';
$url = 'https://api.u-on.ru/' . $apiKey . '/lead/create.json';

$data = file_get_contents('php://input');
$options = [
    'http' => [
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => $data
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
echo $result;
?>