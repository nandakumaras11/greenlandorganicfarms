<?php
 
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/order.php';
 
$database 		= new Database();
$db 			= $database->getConnection();
$order 	= new Order($db);
$res_arr		= array();

$data = json_decode(file_get_contents('php://input'), true);
$order->order_id = $data['orderID'];

if ($order->cancelOrder()== 1) {
    $res_arr = array("status" => "success", "message" => "Successfully order Canceled!!");

} else {
$res_arr = array("status" => "failed", "message" => " order was not canceled .");
}

echo json_encode($res_arr);
?>