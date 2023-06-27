<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
include_once '../config/database.php';
include_once '../objects/User.php';
$database 		= new Database();
$db 			= $database->getConnection();
$newUser        = new User($db);
$res_arr		= array();

$data = json_decode(file_get_contents('php://input'), true);

$newUser->username=$data['name'];
$newUser->phone_no=$data['phone_no'];
$newUser->password=md5($data['password']);
if(empty($data['address']))
$newUser->address="";
else
$newUser->address=$data['address'];
$result=$newUser->insertUser();
		if($result==1){
			$res_arr = array("status" 	=> true,"message" 	=> "Successfully Registered !!","user_id"=>$newUser->user_id);
		}else if($result==2){
			$res_arr = array("status" 	=> false,"message" 	=> "The Mobile Number was Already exists.Please Login!!");
		}else{
			$res_arr = array("status" 	=> false,"message" 	=> "Someting went Wrong. Try Again.");
		}
echo json_encode($res_arr);
?>