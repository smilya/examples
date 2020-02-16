<?php

$json_str = file_get_contents('php://input');

$ifSuccess = file_put_contents("./data/data.dat", $json_str);

echo $ifSuccess;


?>