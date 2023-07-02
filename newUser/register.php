

<?php
  
  include './connect.php';


    $fname = strtolower($_POST['fname']);
    $lname =  strtolower($_POST['lname']);
    $name = $fname." ".$lname;
    $phn =  $_POST['phn'];
    $email =  $_POST['mail'];
    // $username =  $_POST['mail'];
    $password =  $_POST['pass'];
    $dob = $_POST['dob'];
    // $dob = $date."/".$month."/".$year;


    $sql = "INSERT INTO user1( passwd, name, phone, email, DOB)
    values('$password','$name','$phn','$email','$dob')";
    $result = mysqli_query($conn,$sql);
if($result)
{
  echo "<script>alert('Successfuly Account Created Please Login');
  window.location.href='login.php';
  <script>";
    // header("Location:login.php");
}
    else
    echo "<script>alert('something went wrong');<script>";
?>
