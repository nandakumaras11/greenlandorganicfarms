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
		padding: 0% 2%;
	}

	.msg {
		color: white;
		font-weight: 400;
		font-size: 45;
		line-height: 2;
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

$workingKey = 'C0D3DE745853D6D17B11855597BED9B8'; //Working Key should be provided here.
$encResponse = $_POST["encResp"]; //This is the response sent by the CCAvenue Server
$rcvdString = decrypt($encResponse, $workingKey); //Crypto Decryption used as per the specified working key.
$order_id = "";
$transaction_id = "";
$order_status = "";
$totalAmount = "";
$decryptValues = explode('&', $rcvdString);
$dataSize = sizeof($decryptValues);
echo "<center>";

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
	if ($success)
		header('Location: ' . "https://greenlandorganicfarms.com/OrderPlaced");
	echo "<br> Thank you for shopping with us. Your credit card has been charged and your transaction is successful. We will be shipping your order to you soon.";

} else if ($order_status === "Aborted") {
	message("Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail");

} else if ($order_status === "Failure") {
	message("<br>Thank you for shopping with us.However,the transaction has been declined.");
} else {
	echo "<br>Security Error. Illegal access detected";

}

// echo "<br><br>";

// echo "<table cellspacing=4 cellpadding=4>";
// for ($i = 0; $i < $dataSize; $i++) {
// 	$information = explode('=', $decryptValues[$i]);
// 	echo '<tr><td>' . $information[0] . '</td><td>' . $information[1] . '</td></tr>';
// }

// echo "</table><br>";
// echo "</center>";
// $order->order_id=$_POST['ORDERID'];
// $order->transaction_id=$_POST['TXNID'];
// $order->status=$_POST['STATUS'];
// $order->totalAmount=$_POST['TXNAMOUNT'];

?>