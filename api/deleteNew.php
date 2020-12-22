<?php

  $CN = mysqli_connect("localhost", "root", "");
  $DB = mysqli_select_db($CN, "doit");

  $ID = $_GET['ID'];

  $query = "DELETE FROM plans WHERE ID = '$ID'";

  $isOK = mysqli_query($CN, $query);

  if ( $isOK ) {

    $Msg = "Delete successfully";
    $Res[] = array("Message" => $Msg);

  } else {

    $Msg = "Error, try later";
    $Res[] = array("Message" => $Msg);

  }
  
  echo json_encode ($Res);

?>