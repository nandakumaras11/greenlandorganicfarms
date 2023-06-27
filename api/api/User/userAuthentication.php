<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/User.php';
$database 		= new Database();
$db 			= $database->getConnection();
$newUser        = new User($db);
$res_arr		= array();

$data = json_decode(file_get_contents('php://input'), true);
$newUser->signInMobile=$data['signInMobile'];
$newUser->signInPassword=md5($data['signInPassword']);
// $newUser->username="aravind";
// $newUser->password=md5("aravind123");

		if($newUser->authentication() == 1){
			$res_arr = array("status" 	=> "success","message" 	=> $newUser->authentication());
		}else if($newUser->authentication() == 2){
			$res_arr = array("status" 	=> "failed","message" 	=> $newUser->authentication());
		}else{
			$res_arr = array("status" 	=> "authentication was failed","message" 	=> $newUser->authentication());
		}
echo json_encode($res_arr);
?>