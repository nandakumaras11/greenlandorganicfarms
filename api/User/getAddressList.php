<?php
 header('Access-Control-Allow-Origin: *');

 header('Access-Control-Allow-Methods: *');
 
 header("Access-Control-Allow-Headers: *");
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/Address.php';
 
$database   = new Database();
$db    = $database->getConnection();
$address    = new Address($db);
$res_arr  = array();
$address->user_id=93; //hardcoded
$result   = $address->addressDetailList();
if(isset($result) && !empty($result)){
  $res_arr = $result;
}else if(empty($result)){
  $res_arr = array("status" => "failed", "message"=> "Empty Data !");
}
echo json_encode($res_arr);
?>