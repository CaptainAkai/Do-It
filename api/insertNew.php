<?php

  $CN = mysqli_connect("localhost", "root", "");
  $DB = mysqli_select_db($CN, "doit");

  $Name = $_GET['Name'];
  $Content = $_GET['Content'];
  $Tag = $_GET['Tag'];
  // $isDone = $_POST['isDone'];

  $query = "INSERT INTO plans (Name, Content, Tag, isDone) VALUES ('$Name', '$Content', '$Tag', 0)";

  $isOK = mysqli_query($CN, $query);

  if ( $isOK ) {

    $Msg = "Insert successfully";
    $Res[] = array("Message" => $Msg);

  } else {

    $Msg = "Error, try later";
    $Res[] = array("Message" => $Msg);

  }

  echo json_encode ($Res);

?>