<?php header('Access-Control-Allow-Origin: *');?>
<?php
// get database connection
include_once '../config/database.php';
// instantiate user object
include_once '../objects/product.php';
$database = new Database();
$db = $database->getConnection();
$product = new Product($db);
$res_arr = array();

$product->category = $_POST['category'];
$product->product_name = $_POST['product_name'];
$product->old_price = $_POST['old_price'];
$product->selling_price = $_POST['selling_price'];
// $product->product_img=$_POST['product_img'];
// image
if (isset($_FILES['image']) && !empty($_FILES['image'])) {
    $image = $_FILES['image']['name'];
    $expbanner = explode('.', $image);
    $imageType = $expbanner[1];
    date_default_timezone_set('Australia/Melbourne');
    $date = date('m/d/Yh:i:sa', time());
    $rand = rand(10000, 99999);
    $encname = $date . $rand;
    $imageName = md5($encname) . '.' . $imageType;
    $imagePath = "./images/" . $imageName;
    move_uploaded_file($_FILES["image"]["tmp_name"], $imagePath);
// image code end
    $product->product_img = $imageName;
    $product->description = $_POST['description'];
    $product->product_tags = json_encode($_POST['product_tags']);
    $product->stock = 0;
    $product->status = 0;
// $decode=json_decode($product->product_tags);
    // print_r($decode);
    // $gallery->category             = $_POST['category'];
    // $gallery->image                  = $imageName;
    // $gallery->description          =    $_POST['description'];
    // $gallery->caption              =  $_POST['caption'];

    if ($product->createProduct() == 1) {
        $res_arr = array("status" => "success", "message" => "Successfully Inserted !!");
    } else if ($product->createProduct() == 2) {
        $res_arr = array("status" => "failed", "message" => "Product Already exists !!");
    } else {
        $res_arr = array("status" => "failed", "message" => $product->createProduct());
    }
} else {
    $res_arr = array("status" => "failed", "message" => "Empty Mandatory Fields.");
}
// echo ($_POST['headline']);
echo json_encode($res_arr);
