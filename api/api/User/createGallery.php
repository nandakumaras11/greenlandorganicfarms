<?php
 
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/gallery.php';
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: *');

header("Access-Control-Allow-Headers: *");
$database 		= new Database();
$db 			= $database->getConnection();
$gallery 			= new Gallery($db);
$res_arr		= array();
// print_r($_FILES);
// print_r(json_decode(file_get_contents("php://input"), true));
// image code start 
if(isset($_FILES['image']) && !empty($_FILES['image']) ){
	$image=$_FILES['image']['name']; 
 	$expbanner=explode('.',$image);
 	$imageType=$expbanner[1];
 	date_default_timezone_set('Australia/Melbourne');
 	$date = date('m/d/Yh:i:sa', time());
 	$rand=rand(10000,99999);
 	$encname=$date.$rand;
 	$imageName=md5($encname).'.'.$imageType;
 $imagePath="./images/".$imageName;
 move_uploaded_file($_FILES["image"]["tmp_name"],$imagePath);
// image code end 

		// $gallery->category 			= $_POST['category'];
		$gallery->image  				= $imageName;
		// $gallery->description  		=    $_POST['description'];
		// $gallery->caption  			=  $_POST['caption'];
	
		if($gallery->createGallery() == 1){
			$res_arr = array("status" 	=> "success","message" 	=> "Successfully Inserted !!");
		}
		else{
			$res_arr = array("status" 	=> "failed","message" 	=> $gallery->createGallery());
		}
	
}else{
	$res_arr = array("status" => "failed","message" => "Empty Mandatory Fields.");
}

// echo ($_POST['headline']);																		
echo json_encode($res_arr);
?>