<?php
$url ="https://sandbox.cashfree.com/pg/orders";
$secret ="59bf321eec6c27b0fea03def782949263b837e01";
$appID ="293782e980f21c594ed6bd0aa9287392";
$ORDER_ID = $_POST["ORDER_ID"];
$CUST_ID = $_POST["CUST_ID"];
$TXN_AMOUNT = $_POST["TXN_AMOUNT"];
print_r($_POST);
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, $url );
curl_setopt($ch,CURLOPT_POST, true );
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt($ch,CURLOPT_HTTPHEADER, array(
  "Content-Type:application/json",
  "x-client-id:$appID",
  "x-client-secret: $secret",
  "x-api-version: 2022-01-01"
) );

$data = <<< JSON
{
  "order_id": "$ORDER_ID",
  "order_amount": "$TXN_AMOUNT",
  "order_currency": "INR",
  "order_note": "Additional order info",
  "order_meta":{
    "return_url":"https://greenlandorganicfarms.com/api/User/cashfree/response.php?order_id={order_id}"
  },
  "customer_details":{
   "customer_id": "$CUST_ID",
   "customer_name": "name",
    "customer_email": "care@cashfree.com",
    "customer_phone": "9816512345"
  }
}
JSON;

curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
$response = curl_exec($ch);
$decode = json_decode($response);
$link = $decode->payment_link;
print_r($response);     
header("Location: $link");
// echo "$decode->payments";     
// echo "$decode->payments[0]";     
?>