<?php
$input = file_get_contents('php://input');
$inputObj = json_decode($input);
$type = $inputObj -> {'type'};
$name = $inputObj -> {'name'};
$action = $inputObj -> {'action'};

require('../connect_db.php');
if (!mysqli_ping($dbc)) {
  echo json_encode(false);
  die();
}

$type = mysqli_real_escape_string($dbc, $type);
$name = mysqli_real_escape_string($dbc, $name);

switch ($inputObj -> {'action'}) {
  case 'add':
    $result = addCar($dbc, $type, $name);
    break;

  case 'show':
    $result = show($dbc, $type, $name);
    break;

  case 'count':
    $result = countRows($dbc, $type, $name);
    break;

  case 'changeType':
    $result = updateCarType($dbc, $type, $name);
    break;

  case 'delete':
    $result = deleteCars($dbc, $type, $name);
    break;
  
   default:
    $result = 'no commain recognized';
    break;
}

mysqli_free_result($dbc);
mysqli_close($dbc);
echo json_encode($result);
 



function addCar($dbc, $type, $name) {
  $query = "INSERT INTO cars (type, name) VALUES ('$type', '$name')";
  $result = mysqli_query($dbc, $query);
	if (!$result) {
		if (mysqli_errno($dbc) == 1062) {
			$result = true;
		}
		else {
			$result = false;
		}
	}
  return $result;
}

function show($dbc, $type, $name) {
  if (!$type) {
    $type = '%';
  }
  if (!$name) {
    $name = '%';
  }
  $query = "SELECT * FROM cars WHERE type LIKE '$type' && name LIKE '$name'";
  $result = mysqli_query($dbc, $query);
  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $finalArr[] = $row;
  }
  return $finalArr;
}

function countRows($dbc, $type, $name) {
  if (!$type) {
    $type = '%';
  }
  if (!$name) {
    $name = '%';
  }
  $query = "SELECT * FROM cars WHERE type LIKE '$type' AND name LIKE '$name'";
  $rows = mysqli_query($dbc, $query);
  $result = mysqli_num_rows($rows);
  return $result;
}

function updateCarType($dbc, $type, $name) {
  $query = "UPDATE cars SET type = '$type' WHERE name = '$name'";
  mysqli_query($dbc, $query);
  $result = mysqli_affected_rows($dbc);
  return "Updated $result record";
}

function deleteCars($dbc, $type, $name) {
  if (!$type) {
    $type = '%';
  }
  if (!$name) {
    $name = '%';
  }
  $query = "DELETE from cars WHERE type LIKE '$type' AND name LIKE '$name'";
  mysqli_query($dbc, $query);
  $result = mysqli_affected_rows($dbc);
  return "Deleted $result record(s)";
}
?>