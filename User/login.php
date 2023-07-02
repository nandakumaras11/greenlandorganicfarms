<?php
session_start();

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>OTT PLATFORM</title>
    <link rel="stylesheet" href="master.css" type="text/css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  </head>
  <body>
    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
            <a href="login.php" class="navbar-brand"> <img src="images/logo.png" alt=""> </a>
            <span class="navbar-text">TOP VIEW</span>

            <ul class="navbar-nav">
              <li class="nav-item"> <a href="#A" class="nav-link"> Services</a> </li>
              <li class="nav-item"> <a href="user-login.php" class="nav-link"> SignIn</a> </li>

            </ul>

        </nav>

        <div class="container">
          <div class="jumbotron">
            <h1>Watch Anywhere, <br> Watch Anytime... </h1> <br>
            <a href="test.php" type="button" class="btn btn-danger btn-block">Sign Up Now</a>
          </div>
        </div>
      </div>

      </header>



    <section class="features">
        <a href="#" name="A"></a>
        <h2>Our Services</h2>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <p class="arrange"><img src="images/mob.png" alt=""> <br> The objective of OTT Platform that provides a seamless and user friendly experience for viewers while also enabling content creators and producers to reach a wider audience.The platform will leverage cutting_edge technologies to provide personalized content recommendations,advanced search functionalities.
              </p>
            </div><div class="col-md-4">
              <p class="arrange"><img src="images/mess.png" alt=""> <br> The platform designed to support multiple devices,including smartphones,tablets,smart TVs,and gaming consoles.It leverage adaptive bitrate streaming technology to ensure smoth and uninterrupted playbck regardless of the user's internet connection speed,it will monetized through a subscription-based model offering to users to access the platform.
              </p>
            </div>
              <div class="col-md-4">

                <p class="arrange">
                  <img src="images/desktop.jpg"> <br>   IT develop a user friendly platform that offers viewers a range of entertaining options to watch on demand.The platform aims to provide a high quality viewing experience for users by incorporating personalized recommendations,a search function,and a watchlistand also allow to provide feedback option on the video they watch.
                </p>
              </div>

            </div>

          </div>
          <h3></h3>

    </section>

    </footer>
  </body>
</html>
