<html>
<head>
<title> Non-Seamless-kit</title>
</head>
<body>
<center>

<?php include('Crypto.php')?>

<?php 
	require_once("../../objects/order.php");
	include_once '../../config/database.php';
	$database = new Database();
	$db = $database->getConnection();
	$order = new Order($db);
		// error_reporting(0);
	
	$merchant_data='';
	// $merchant_data='2';
	$working_key='E05443DCE003E70103286E1B0C2C9999';//Shared by CCAVENUES
	$access_code='AVNJ18KJ98AO81JNOA';//Shared by CCAVENUES
	// $working_key='C0D3DE745853D6D17B11855597BED9B8';//Shared by CCAVENUES
	// $access_code='AVOZ77KF20BA67ZOAB';//Shared by CCAVENUES
	

	$order->order_id =$_POST['order_id'];
	$details = $order->orderDetail();
	$_details = $details[0];
	// print_r($_details["totalAmount"]);

	// array_push($_POST,$_details["totalAmount"]);
	foreach ($_POST as $key => $value){
		$merchant_data.=$key.'='.$value.'&';
	}
	$merchant_data.='amount='.$_details["totalAmount"].'&';
	// echo $merchant_data;
	// this.order_id = $_POST['order_id'];

	$encrypted_data=encrypt($merchant_data,$working_key); // Method for encrypting the data.

?>
<form method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"> 
<!-- <form method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction">  -->
<!-- <form method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction">  -->
<?php
echo "<input type=hidden name=encRequest value=$encrypted_data>";
echo "<input type=hidden name=access_code value=$access_code>";
?>
</form>
</center>
<script language='javascript'>document.redirect.submit();</script>
</body>
</html>

