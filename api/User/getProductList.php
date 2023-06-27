<?php
 
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/product.php';
 
$database 		= new Database();
$db 			= $database->getConnection();
$product 			= new Product($db);
$res_arr		= array();
$result			= $product->getProductList();
if(isset($result) && !empty($result)){
		$res_arr = $result;
		// $res_arr = array("res_arr"=>$result);
		// $res_arr=>
}else if(empty($result)){
		$res_arr = array("status" => "failed", "message"=> "Empty Data !");
}
echo json_encode($res_arr);
?>