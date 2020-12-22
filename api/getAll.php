<?php

  $CN = mysqli_connect("localhost", "root", "");
  $DB = mysqli_select_db($CN, "doit");

  $query = "SELECT * FROM plans";
  $isOK = mysqli_query($CN, $query);

  if ( $Inf = mysqli_num_rows($isOK) ) {

    while ( $row = mysqli_fetch_assoc($isOK) ) {
      // $Msg = ("ID: " . $row["ID"] . " - Name: " . $row["Name"] . " - Tag: " . $row["Tag"] . " - Content: " . $row["Content"]);
      $Res[] = array(
        "ID" => $row["ID"],
        "Name" => $row["Name"],
        "Tag" => $row["Tag"],
        "Content" => $row["Content"],
        "isDone" => $row["isDone"]
      );
      // $results = array_values($Res);
    }

  } else {

    $Msg = "No data";
    $Res[] = array("Message" => $Msg);
    
  }
  
  echo json_encode($Res);

?>
