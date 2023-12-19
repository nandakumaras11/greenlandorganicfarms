<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
include_once '../config/database.php';
include_once '../objects/Address.php';
$database 		= new Database();
$db 			= $database->getConnection();
$address        = new Address($db);
$res_arr		= array();

$data = json_decode(file_get_contents('php://input'), true);

// $address->user_id=$data['user_id'];
// $address->address=$data['address'];
$address->user_id=88;
$address->address='test adddress';
$result=$address->insertAddress();
		if($result==1){
			$res_arr = array("status" 	=> true,"message" 	=> "Successfully Address was inserted !!","user_id"=>$address->user_id);
		}else if($result==2){
			$res_arr = array("status" 	=> false,"message" 	=> "The Address was already exist!!");
		}else{
			$res_arr = array("status" 	=> false,"message" 	=> "Someting went Wrong. Try Again.");
		}
echo json_encode($res_arr);
?>