<?php
 header('Access-Control-Allow-Origin: *');

 header('Access-Control-Allow-Methods: *');
 
 header("Access-Control-Allow-Headers: *");
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/gallery.php';
 
$database   = new Database();
$db    = $database->getConnection();
$gallery    = new Gallery($db);
$res_arr  = array();
$result   = $gallery->getGalleryList();
if(isset($result) && !empty($result)){
  $res_arr = $result;
}else if(empty($result)){
  $res_arr = array("status" => "failed", "message"=> "Empty Data !");
}
echo json_encode($res_arr);
?>