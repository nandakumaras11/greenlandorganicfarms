<?php header('Access-Control-Allow-Origin: *');?>

<?php

error_reporting(E_ALL);

ini_set('display_errors', '1');

// get database connection

include_once '../config/database.php';

// instantiate user object

include_once '../objects/order.php';
include_once '../objects/product.php';

include_once '../objects/User.php';

$database = new Database();

$db = $database->getConnection();

$order = new Order($db);
$product = new Product($db);

$res_arr = array();



$userDetails=new User($db);





$data = json_decode(file_get_contents('php://input'), true);

$order->user_id = $data['user_id'];

// $order->address = $data['address'];

$order->product_id = json_encode($data['items']);

$order->paymentMode = $data['paymentMode'];
$products = $data['items'];
$totalAmount = 0;
foreach ($products as $_product) {
    $product->product_id = $_product["product_id"];
   $result= $product->selectOneProduct();
   $_result = $result[0];
   $totalAmount=$totalAmount+ $_result["selling_price"];
}
// print_r($totalAmount);
 
$order->totalAmount = $totalAmount;

date_default_timezone_set("Asia/Kolkata");

$order->dateOfOrder = date('d-m-Y H:i:s');

$order->status = "pending";

$orderPlaced= $order->placeOrder();

 $userDetails->address=$data['address'];

 $userDetails->user_id=$data['user_id'];

 $addressUpdate=$userDetails->updateAddress();

if ($orderPlaced && $order->paymentMode == "cod") {



    $res_arr = array("status" => $order->codSuccess(),"addressUpdate"=>$userDetails->updateAddress(),"message" => "Order Placed.");

}

else{

    $res_arr = array("status" => $orderPlaced, "message" => $order->order_id);

}

echo json_encode($res_arr);

