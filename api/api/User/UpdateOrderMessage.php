<?php
 
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/order.php';
 
$database 		= new Database();
$db 			= $database->getConnection();
$orderDetail 	= new Order($db);
$res_arr		= array();

$orderDetail->orderMessage=$_POST['orderMessage'];
$orderDetail->status=$_POST['productCurrentStatus'];
$orderDetail->order_id=$_POST['order_id'];
$result			= $orderDetail->updateOrderStatus();


if ($orderDetail->updateOrderStatus()== 1) {
    $res_arr = array("status" => "success", "message" => "Successfully order details was updated !!");

} else {
$res_arr = array("status" => "failed", "message" => " order details was not updated .");
}

echo json_encode($res_arr);
?>