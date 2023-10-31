<style type="text/css">
	body {
		margin: 0;
		padding: 0;
	}

	.messageContainer {
		height: 100vh;
		display: flex;
		background-color: #FF0060;
		justify-content: center;
		align-items: center;
		font-family: monospace;
		padding: 3% 2%;
	}

	.msg {
		color: white;
		font-weight: 400;
		font-size: 45;
		line-height: 2;
	}
	.orderDetailsContainer{
		width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
	flex-direction: column;
}
.message{
	padding-top:3%;
}
	.row{

		display: flex;
    width: 22%;
    justify-content: center;
    padding: 1%;
    font-size: 1.2rem;

	}
	.col {
		width: 50%;
		text-align: left;
}

</style>
<?php
include('Crypto.php');
include_once '../../config/database.php';
require_once("../../objects/order.php");

function message($message)
{
	echo "<div class='messageContainer'> <div class='msg'>$message</div> </div>";
}
?>

<?php

error_reporting(0);
$database = new Database();
$db = $database->getConnection();
$order = new Order($db);
$working_key='E05443DCE003E70103286E1B0C2C9999';//Shared by CCAVENUES
// $workingKey = 'C0D3DE745853D6D17B11855597BED9B8'; //Working Key should be provided here.
$encResponse = $_POST["encResp"]; //This is the response sent by the CCAvenue Server
$rcvdString = decrypt($encResponse, $working_key); //Crypto Decryption used as per the specified working key.
// print_r($rcvdString);
$order_id = "";
$transaction_id = "";
$order_status = "";
$totalAmount = "";
$decryptValues = explode('&', $rcvdString);
$dataSize = sizeof($decryptValues);
echo "<center>";
// print_r($decryptValues);
for ($i = 0; $i < $dataSize; $i++) {
	$information = explode('=', $decryptValues[$i]);
	if ($i == 0) {
		$order_id = $information[1];
	}
	if ($i == 2) {
		$transaction_id = $information[1];
	}

	if ($i == 3) {
		$order_status = $information[1];
	}
	if ($i == 10) {
		$totalAmount = $information[1];
	}
}
// echo $order_id . "_" . $transaction_id . "_" . $order_status . "_" . $totalAmount;
if ($order_status === "Success") {
	$order->order_id = $order_id;
	$order->transaction_id = $transaction_id;
	$order->status = $order_status;
	$order->totalAmount = $totalAmount;
	$success = $order->onlineSuccess();
	if ($success){
		
		echo "<div class='message'> Thank you for shopping with us. We will be shipping your order to you soon. <br/></div>";
		// header("refresh : 10; url=https://greenlandorganicfarms.com/OrderPlaced");
	//
	// <div class='row'><div class='col'>Amount</div><div class='col'>$totalAmount</div><div>
	// ";
	sleep(5);
	header('Location: ' . "https://greenlandorganicfarms.com/OrderPlaced");
	}

} else if ($order_status === "Aborted") {
	message("Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail");

} else if ($order_status === "Failure") {
	message("<br>Thank you for shopping with us.However,the transaction has been declined.");
} else {
	echo "<br>Security Error. Illegal access detected 	$order_status ";

}

// echo "<br><br>";

echo "<table cellspacing=4 cellpadding=4>";
for ($i = 0; $i < $dataSize; $i++) {
	$information = explode('=', $decryptValues[$i]);
	if( $information[1]!=""&&$information[1]!="null")
	echo '<tr><td>' . $information[0] . '</td><td>' . $information[1] . '</td></tr>';
}

// echo "<div class='orderDetailsContainer'><div class='row'><div class='col'>Order ID</div><div class='col'>$order_id</div></div>";
// echo "<div class='row'><div class='col'>Transaction ID</div><div class='col'>$transaction_id</div></div>";
// echo "<div class='row'><div class='col'>Amount</div><div class='col'>$totalAmount</div></div>";
// echo "<div class='row'><div class='col'>Order status</div><div class='col'>$status_message</div></div>";
	// sleep(5);

echo "</table><br>";
// echo "</center>";
// $order->order_id=$_POST['ORDERID'];
// $order->transaction_id=$_POST['TXNID'];
// $order->status=$_POST['STATUS'];
// $order->totalAmount=$_POST['TXNAMOUNT'];

?>