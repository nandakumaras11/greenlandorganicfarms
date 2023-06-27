<?php
  header('Access-Control-Allow-Origin: *');  
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/gallery.php';

// print_r($_POST);
$database 		= new Database();
$db 			= $database->getConnection();
$gallery 			= new Gallery($db);
$res_arr		= array();
// print_r($_POST);
// print_r(json_decode(file_get_contents("php://input"), true));
if(isset($_POST['galleryId']) && !empty($_POST['galleryId']) ){
		$gallery->deleteGallery_id		= $_POST['galleryId'];
			if($gallery->deleteGallery() == 1){
			$res_arr = array("status" 	=> "success","message" 	=> "Gallery Removed");
		}else{
			$res_arr = array("status" 	=> "failed","message" 	=> $gallery->deleteGallery());
		}
}
// echo ($_POST['headline']);
echo json_encode($res_arr);
?>