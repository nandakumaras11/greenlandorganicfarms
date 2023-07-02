

<?php
  session_start();
  include 'dbh.php';


    $fname = strtolower($_POST['fname']);
    $lname =  strtolower($_POST['lname']);
    $name = $fname." ".$lname;
    $phn =  $_POST['phn'];
    $email =  $_POST['mail'];
    $username =  $_POST['mail'];
    $password =  $_POST['pass'];
    $dob = $_POST['dob'];
    // $dob = $date."/".$month."/".$year;


    $sql = "INSERT INTO user1(username, passwd, name, phone, email, DOB)
    values('$username','$password','$name','$phn','$email','$dob')";
    $result = $conn->query($sql);

    header("Location: user-login.php");
?>
