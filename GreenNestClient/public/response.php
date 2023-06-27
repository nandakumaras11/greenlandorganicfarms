<?php

$orderId = $_GET['order_id'];
$curl = curl_init();
$secret ="59bf321eec6c27b0fea03def782949263b837e01";
$appID ="293782e980f21c594ed6bd0aa9287392";
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://sandbox.cashfree.com/pg/orders/$orderId",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'x-client-id: 293782e980f21c594ed6bd0aa9287392',
    'x-client-secret: 59bf321eec6c27b0fea03def782949263b837e01',
    'x-api-version: 2021-05-21'
  ),
));

$response = curl_exec($curl);

$err = curl_error($curl);
print_r($response);
curl_close($curl);

if(!$err) {
    $result = json_decode($response, true);
    if($result["order_status"] == 'PAID'){
        echo "This order is paid!";
    } else {
        echo "Order has not been paid!";
    }
} else {
    echo  $err;
}

?>