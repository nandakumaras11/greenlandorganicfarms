<?php
 header('Access-Control-Allow-Origin: *');
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/order.php';
$database = new Database();
$db = $database->getConnection();
$singleOrderDetails = new Order($db);
$res_arr = array();

$data = json_decode(file_get_contents('php://input'), true);
$singleOrderDetails->user_id = $data['user_id'];
$result=$singleOrderDetails->singleOneOrderDetails();
if(isset($result) && !empty($result)){
  $res_arr = $result;
}else if(empty($result)){
  $res_arr = array("status" => "failed", "message"=> "Empty Data !");
}
echo json_encode($res_arr);
?>
