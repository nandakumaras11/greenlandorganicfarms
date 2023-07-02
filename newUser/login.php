
<?php
session_start();

 ?>




<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>TopView-Login</title>
    <link rel="stylesheet" href="user-login.css" type="text/css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="assct/style.css" type="text/css">
  </head>
  <body>
        <!-- HEADER -->
        <header>
      <div class="netflixLogo">
      <!-- <a id="logo" href="./index.php"><h5  style="color: red;"><b>TOPVIEW</b></h5></a>  -->
      <a id="logo" href="./index.php"><img src="./assct/image/topview.png" alt="Logo Image"></a>
      </div>      
      <nav class="main-nav">                
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
        <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a>        
      </nav>
      <nav class="sub-nav">
        <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
        <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
        <a href="./createuser.html">Signup</a>        
      </nav>      
    </header>
    <!-- END OF HEADER -->
    <!-- <header> -->
      <div class="container-fluid">

        <div class="container col-6">

          <div class="jumbotron" style="background-color: black;margin-top: 83px;">
            <h1  style="padding: 0;">Login </h1> <br>
            <form class="" method="POST"> <br><br>
              <input type="email" class="form-control" placeholder="Usename/ Email Address" name="mail" value="">
              <br>
              <input type="password" class="form-control" placeholder="Password" name="pass" value="">
              <br><br>

              <div class="loginbutton">
                <button type="submit" class="btn btn-danger btn-lg" style="" name="login">Login</button>
                <?php
                // session_start();
                if(isset($_POST['login']))
{
  include 'connect.php';
    $username =  $_POST['mail'];
    $password =  $_POST['pass'];
    $sql = "SELECT * FROM user1 WHERE email = '$username' AND passwd = '$password' ";
    // print_r($sql);
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0) {
      $row=mysqli_fetch_assoc($result);
      $_SESSION['id'] = $row['id'];
      // echo $_SESSION['id'];
      echo "<script>alert('Succcessfult Logined');location.href='index.php';</script>";
      // echo "<script><script>";
    }else {
      echo "<script>alert('incorrect username or password');</script>";
      }
}
?>

              </div>
              </form>

              </div>


          </div>
        </div>
</div>
  <!-- </header> -->
  </body>

</html>
