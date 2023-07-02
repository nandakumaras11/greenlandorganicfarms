<?php
 
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/order.php';
 
$database 		= new Database();
$db 			= $database->getConnection();
$orderDetail 	= new Order($db);
$res_arr		= array();
// DELIVERED productCurrentStatus
if(empty($_POST['orderMessage']) and $_POST['productCurrentStatus']=="DELIVERED")
$orderDetail->orderMessage="DELIVERED";
else if(empty($_POST['orderMessage']) and $_POST['productCurrentStatus']=="TRANSIST")
$orderDetail->orderMessage="Order successfully placed";
// if(empty($_POST['orderMessage']))
// $orderDetail->orderMessage=$_POST['productCurrentStatus'];
else
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