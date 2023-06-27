<!-- deleteProduct.php -->
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
    $product->product_id		= $_POST['product_id']; 
        if($product->deleteProduct() == 1){
        $res_arr = array("status" 	=> "success","message" 	=> "Gallery Removed");
    }else{
        $res_arr = array("status" 	=> "failed","message" 	=> $product->deleteProduct());
    }
}
// echo ($_POST['headline']);
echo json_encode($res_arr);
  ?>