<?php
  header('Access-Control-Allow-Origin: *');  
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/Address.php';

// print_r($_POST);
$database 		= new Database();
$db 			= $database->getConnection();
$address 			= new Address($db);
$res_arr		= array();

$data = json_decode(file_get_contents('php://input'), true);
// $address->address_id = $data['address_id'];
// $_POST['address_id']=1;
// print_r($_POST);
// print_r(json_decode(file_get_contents("php://input"), true));
if(isset($data['address_id']) && !empty($data['address_id']) ){
		$address->address_id		= $data['address_id'];
			if($address->deleteAddress() == 1){
			$res_arr = array("status" 	=> "success","message" 	=> "Address Removed");
		}else{
			$res_arr = array("status" 	=> "failed","message" 	=> $address->deleteAddress());
		}
}
// echo ($_POST['headline']);
echo json_encode($res_arr);
?>