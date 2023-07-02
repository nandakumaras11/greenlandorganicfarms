<?php
session_start();

 ?>


 <!DOCTYPE html>
 <head>
   <meta charset="utf-8">
   <title>OTT PLATFORM</title>
   <link rel="stylesheet" href="user.css" type="text/css">
   <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
 </head>
 <body>
 <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="index.html"><img class="img-fluid" style="width: 95px;" src="../newUser/assct/image/topview.png" alt="Logo Image"></a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <a class="nav-link" href="../User/admin.php">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Add Movie
                            </a>
                            <!-- <div class="sb-sidenav-menu-heading">Interface</div> -->
                     
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
               
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <!-- <h1 class="mt-4"><a href="./index.html">Dashboard</a></h1> -->
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Add movies</li>
                        </ol>
                       
                    </div>
                </main>
                <div class="container-fluid">
   

   <div class="container">

     <div class="jumbotron">
       <h1> Enter the Movie details</h1>
       <p> <b></b> </p> <br>

       <form class=""  method="POST" enctype="multipart/form-data">

        <input type="text" class="form-control" placeholder="Movie Name" name="mname" value=""><br>
         <input type="text" class="form-control" placeholder="Year of Release" name="release" value="">
         <br>
         <input type="text" class="form-control" placeholder="Genre" name="genre" value="">
         <br>
         <input type="number" class="form-control" placeholder="Runtime in minutes" name="rtime" value="">
         <br>
         <select name="movietag" class="form-control" id="">
            <option value="PopularonTopview">Popular on Topview</option>
            <option value="TrendingNow">Trending Now</option>
            <option value="TVShows">TV Shows</option>
            <option value="Blockbuster">Blockbuster</option>
            <option value="NetflixOriginals">Netflix Originals</option>
         </select>
        
         <br>
         <br>
         <input type="text" class="form-control" placeholder="Description..." name="desc" value="">
         <br>
         <div class="row">
           <div class="col">
             <table>
               <tr>
                 <td> <label for=""><b>Upload Image : </b></label> </td>
                 <td>
                      <div class="">
                          <input type="hidden" name="size" value="100000">

                          <input type="file" name="image" value="">
                      </div>
                 </td>
               </tr>
             </table>
           </div>
           <div class="col">
             <table>
               <tr>
                 <td> <label for=""><b>Upload Video : </b></label> </td>
                 <td>
                      <div class="">
                          <input type="hidden" name="size" value="30000000">

                          <input type="file" name="video" value="">
                      </div>
                 </td>
               </tr>
             </table>

           </div>
         </div> <br><br>
         <div class="signupbutton">
           <input type="submit" class ="btn btn-success btn-lg" name="upload" value="Submit" >
         </div>


       </form>

    </div>


     </div>

   </div>


</div>
            </div>
        </div>
   <header>
    

   
<?php
// session_start();
if (isset($_POST['upload'])) {

  include 'connect.php';

  $targetvid = "video-uploads/".basename($_FILES['video']['name']);
  $target = "uploads/".basename($_FILES['image']['name']);
  $name = strtolower($_POST['mname']);
  $rdate = $_POST['release'];
  $genre = strtolower($_POST['genre']);
  $rtime = $_POST['rtime'];
  $desc = $_POST['desc'];
  $movietag = $_POST['movietag'];
  $image = $_FILES['image']['name'];
  $video = $_FILES['video']['name'];

  $sql = "INSERT INTO movies  VALUES('','$name','$rdate','$genre','$rtime','$desc','','$image','$video','$movietag')";
// print_r($sql);
move_uploaded_file($_FILES['image']['tmp_name'],$target) ;
move_uploaded_file($_FILES['video']['tmp_name'],$targetvid);
  if (mysqli_query($conn,$sql)) {
    echo "<script>alert('Succcessfuly Movie Added');location.href='index.html';</script>";
  }else {
    echo "<script>alert('Something Went Wrong.Try again');location.href='index.html';</script>";
  }
}


?>

 </footer>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
        <script src="assets/demo/chart-area-demo.js"></script>
        <script src="assets/demo/chart-bar-demo.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js" crossorigin="anonymous"></script>
        <script src="js/datatables-simple-demo.js"></script>
   </body>
 </html>
