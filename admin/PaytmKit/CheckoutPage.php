
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title> Check Out Page</title>
<meta name="GENERATOR" content="Evrsoft First Page">
</head>
<body>
	<h1>Merchant Check Out Page</h1>
	<form method="post" action="pgRedirect.php">
		<label>ORDER_ID::*</label>
					<input id="ORDER_ID" tabindex="1" maxlength="20" size="20"
					name="ORDER_ID" autocomplete="off"
					value="">
<br>
					<label>CUSTID </label>
					<input id="CUST_ID" tabindex="2" maxlength="12" size="12" name="CUST_ID" autocomplete="off" value="CUST001">
				
			<br>
					<!-- <label>INDUSTRY_TYPE_ID ::*</label>
					<input id="INDUSTRY_TYPE_ID" tabindex="4" maxlength="12" size="12" name="INDUSTRY_TYPE_ID" autocomplete="off" value="Retail"> -->
			
				<br>
					<!-- <label>Channel ::*</label>
					<input id="CHANNEL_ID" tabindex="4" maxlength="12"
						size="12" name="CHANNEL_ID" autocomplete="off" value="WEB"><br> -->
					
					<label>txnAmount*</label>
					<input title="totalAmount" tabindex="10"
						type="text" name="totalAmount"
						value="1">
				<br>
					<input value="CheckOut" type="submit"	 id="chekoutBtn"onclick="">
			
		* - Mandatory Fields
	</form>
</body>
<!-- <script src="./js/common/api.js"></script> -->
<!-- <script>
	
	$(document).ready(function () {
	$('#chekoutBtn').on('click', function () {
		
	});
}); -->
</script>
</html>