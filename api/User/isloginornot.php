<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/Admin.php';
$database 		= new Database();
$db 			= $database->getConnection();
$admin        = new Admin($db);
$res_arr		= array();

// // $data = json_decode(file_get_contents('php://input'), true);
// // var_dump($data);
// // var_dump($_POST['signInMobile']);
// // print_r(json_decode(file_get_contents('php://input'), true));
// $admin->signInMobile=$_POST['signInMobile'];
// $admin->signInPassword=md5($_POST['signInPassword']);
// $newUser->username="aravind";
// $newUser->password=md5("aravind123");

		if($admin->isLogin() == null){
			$res_arr = array("status" 	=> "failed","message" 	=> $admin->isLogin());
		}else 
			$res_arr = array("status" 	=> "success","message" 	=> $admin->isLogin());
echo json_encode($res_arr);
?>