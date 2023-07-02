<?php
session_start();
  $conn = mysqli_connect("localhost","root","","topview_db");
  if(! $conn ) {
      die('Could not connect: ' . mysqli_error());
   }
?>
