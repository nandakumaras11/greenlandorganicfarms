<?php
  header('Access-Control-Allow-Origin: *');  
  // get database connection
  include_once '../config/database.php';
  // instantiate user object
  include_once '../objects/Address.php';
 $db=new Database(); 
$conn=$db->getConnection();
$address=new Address($conn);
$res_arr		= array();
$data = json_decode(file_get_contents('php://input'), true);

 if(isset($data['address_id']) && !empty($data['address_id']) ){
    $address->address_id= $data['address_id']; 
    //      if($address->selectOneProduct() == 1){
    //      $res_arr = array("status" 	=> "success","message" 	=> "single product selected");
    //  }else{
    //      $res_arr = array("status" 	=> "failed","message" 	=> $address->selectOneProduct());
    //  }
    $result   = $address->getOneAddress();
    // print_r($result);
if(isset($result) && !empty($result)){
  $res_arr = $result;
}else{
  $res_arr = array("status" => "failed", "message"=> "Empty Data !");
}

 }
 // echo ($_POST['headline']);
 echo json_encode($res_arr);

?>