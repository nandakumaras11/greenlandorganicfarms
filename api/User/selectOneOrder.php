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
// $data = json_decode(file_get_contents('php://input'), true);
if(isset($_POST['order_id']) && !empty($_POST['order_id']) )
{
    $singleOrderDetails->order_id= $_POST['order_id'];
$result=$singleOrderDetails->orderDetail();
if(isset($result) && !empty($result)){
  $res_arr = $result;
}else if(empty($result)){
  $res_arr = array("status" => "failed", "message"=> "Empty Data !");
}



}
echo json_encode($res_arr);
?>
