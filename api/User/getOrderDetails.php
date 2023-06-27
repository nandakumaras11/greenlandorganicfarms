<?php
 
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/order.php';
 
$database 		= new Database();
$db 			= $database->getConnection();
$orderdetail 	= new Order($db);
$res_arr		= array();
$result			= $orderdetail->getOrderListDetails();
if(isset($result) && !empty($result)){
		$res_arr = $result;
		// $res_arr = array("res_arr"=>$result);
		// $res_arr=>
}else if(empty($result)){
		$res_arr = array("status" => "failed", "message"=> "Empty Data!");
}
echo json_encode($res_arr);
?>