<?php
  header('Access-Control-Allow-Origin: *');  
  // get database connection
  include_once '../config/database.php';
  // instantiate user object
  include_once '../objects/product.php';
 $db=new Database(); 
$conn=$db->getConnection();
$product=new Product($conn);
$res_arr		= array();
 if(isset($_POST['product_id']) && !empty($_POST['product_id']) ){
    $product->product_id= $_POST['product_id']; 
    //      if($product->selectOneProduct() == 1){
    //      $res_arr = array("status" 	=> "success","message" 	=> "single product selected");
    //  }else{
    //      $res_arr = array("status" 	=> "failed","message" 	=> $product->selectOneProduct());
    //  }
    $result   = $product->selectOneProduct();
    // print_r($result);
if(isset($result) && !empty($result)){
  $res_arr = $result;
}else if(empty($result)){
  $res_arr = array("status" => "failed", "message"=> "Empty Data !");
}
 }
 // echo ($_POST['headline']);
 echo json_encode($res_arr);

?>