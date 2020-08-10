<?php

$input = file_get_contents('php://input');
$inputObj = json_decode($input);
$id = $inputObj -> {'id'};
$class = $inputObj -> {'class'};
$name = $inputObj -> {'name'}; 

require('../connect_db.php');
if (!mysqli_ping($dbc)) {
  echo json_encode(false);
  die();
} 

// $result = select_by_class($dbc, $class);
$result = show_records($dbc, $class);

if (!$result) {
  $final = mysqli_error($dbc);
}
else {
  $final;
  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $final[] = $row;
  }
} 

mysqli_close($dbc);
echo json_encode($final);
// --------------------------- //

function select_by_class($dbc, $class) {
  $query = "SELECT id, class, name FROM animals WHERE class = '$class'";
  $result = mysqli_query($dbc, $query);
  return $result;
}

function show_records($dbc) {
  $query = "SELECT * FROM animals";
  $result = mysqli_query($dbc, $query);
  return $result;
}

//$query = "INSERT INTO animals (id, class, name) VALUES ('$id', '$class', '$name')";
//$query = 'DELETE FROM animals WHERE id > 12';

?>