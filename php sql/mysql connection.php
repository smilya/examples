<?php

//тоже рабочий вариант подключения
/* $dbc = mysqli_connect("localhost", 'u0840192_default', "D_wV5aH0", "u0840192_default")
OR die (mysqli_connect_error());
mysqli_set_charset($dbc, "utf8"); */

$dbc = @new mysqli("localhost", 'u0840192_default', "D_wV5aH0", "u0840192_default");
 if (mysqli_connect_errno()) {
  echo "Подключение невозможно: ".mysqli_connect_error();
}

$dbc -> query('INSERT INTO animals (id, class, name) VALUES (null, "bird", "hawk")');
$dbc -> close();

?>