<?php

$acceptedPass = $_POST['data'];

$trueHTML = '<h2>Page body</h2><p>The core of the page reachable if correct password is entered</p><img src="image.png" alt="image">'; 

if ($acceptedPass == 1978) echo $trueHTML;
else echo false;

?>