<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/Address.php';
$database 		= new Database();
$db 			= $database->getConnection();
$address        = new Address($db);
$res_arr		= array();
$_POST['address_id']=4;
$_POST['address']="mani bhavan kottaram veedu  kottayam";
$address->address_id=$_POST['address_id'];
$address->address=$_POST['address'];

			if($address->updateAddress() == 1){
	
				$res_arr = array("status" 	=> "success","message" 	=> "Successfully Updated !!");
				}else{
	
				$res_arr = array("status" 	=> "failed","message" 	=> $address->updateAddress());
			}

	echo json_encode($res_arr);
?>