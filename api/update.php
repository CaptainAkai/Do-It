<?php

  $CN = mysqli_connect("localhost", "root", "");
  $DB = mysqli_select_db($CN, "doit");

  $ID = $_POST['ID'];
  $Name = $_POST['Name'];
  $Content = $_POST['Content'];
  $Tag = $_POST['Tag'];
  // $isDone = $_POST['isDone'];

  $query = "UPDATE plans SET Name = '$Name', Tag = '$Tag', Content = '$Content' WHERE ID = '$ID'";

  $isOK = mysqli_query($CN, $query);

  if ( $isOK ) {

    $Msg = "Update successfully";
    $Res[] = array("Message" => $Msg);

  } else {

    $Msg = "Error, try later";
    $Res[] = array("Message" => $Msg);

  }

  echo json_encode ($Res);

?>