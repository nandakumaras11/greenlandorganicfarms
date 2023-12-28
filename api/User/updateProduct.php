<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/product.php';
$database 		= new Database();
$db 			= $database->getConnection();
$product        = new Product($db);
$res_arr		= array();
$product->product_id=$_POST['product_id'];
$product->category=$_POST['category'];
$product->product_name=$_POST['product_name'];
$product->old_price=$_POST['old_price'];
$product->selling_price=$_POST['selling_price'];

// echo $image;
// if(isset($_FILES['image']) && !empty($_FILES['image']) ){
	if(isset($_FILES['image']) && !empty($_FILES['image']['name'])) {
		$image=$_FILES['image']['name']; 
	
		$expbanner=explode('.',$image);
   
		$imageType=$expbanner[1];
   
		date_default_timezone_set('Australia/Melbourne');
   
		$date = date('m/d/Yh:i:sa', time());
   
		$rand=rand(10000,99999);
   
		$encname=$date.$rand;
   
		$imageName=md5($encname).'.'.$imageType;
   
	$imagePath="./images/".$imageName;
   
	move_uploaded_file($_FILES["image"]["tmp_name"],$imagePath);
		
		

	}else{
		$imageName=$_POST['old_imageName'];	
	
	}
	// image code end 

	
	$product->product_img 				= $imageName;
	
	$product->description=$_POST['description'];
	// print_r(json_decode($_POST['old_producttag']));
	// print_r(json_encode($_POST['new_product_tags']));
	if(sizeof($_POST['new_product_tags'])!=0)
	 {
		$product->product_tags=json_encode($_POST['new_product_tags']);	
		// print_r($product->product_tags);
	}
	else
	{
		$myNewArray = json_decode($_POST['old_producttag']);
		$product->product_tags=$myNewArray;	
	}
	
	
	$product->stock=0;
	
	$product->status=0;
	
	
	
			// $gallery->category 			= $_POST['category'];
	
			// $gallery->image  				= $imageName;
	
			// $gallery->description  		=    $_POST['description'];
	
			// $gallery->caption  			=  $_POST['caption'];
	
			if($product->updateProduct() == 1){
	
				$res_arr = array("status" 	=> "success","message" 	=> "Successfully Inserted !!");
			}else{
				$res_arr = array("status" 	=> "failed","message" 	=> "Product Was Not Updated ");
			}
	
	
	
	// echo ($_POST['headline']);
	
	echo json_encode($res_arr);
?>