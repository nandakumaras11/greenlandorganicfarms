<?php header('Access-Control-Allow-Origin: *');?>
<?php
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/User.php';
$database = new Database();
$db = $database->getConnection();
$getaddress = new User($db);
$res_arr = array();

$data = json_decode(file_get_contents('php://input'), true);
$getaddress->user_id = $data['user_id'];
// $newUser->username="aravind";
// $newUser->password=md5("aravind123");


$result   = $getaddress->getAddress();
// print_r($result);
if(isset($result) && !empty($result)){
$res_arr = $result;
}else {
$res_arr = array("status" => "failed", "message"=> $result );
}




//user_id
echo json_encode($res_arr);
?>