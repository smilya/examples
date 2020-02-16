<?php

$dataFile = file_get_contents('php://input');
$data = file_get_contents("./data/" .$dataFile .".dat");
echo $data;

?>