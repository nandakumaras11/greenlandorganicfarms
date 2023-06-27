
<?php
class Order
{
    // database connection and table name
    private $conn;
    private $table_name = "order_details";

    // object properties
    public $order_id;
    public $user_id;
    public $address;
    public $product_id;
    // public $paymentMode;
    public $totalAmount;
    public $dateOfOrder;
    public $transaction_id;
    public $status;
    public $paymentMode;
    public $orderMessage;
    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function placeOrder()
    {
        $query = "INSERT INTO
                    " . $this->table_name . "(order_id,user_id,product_id,totalAmount,dateOfOrder,transaction_id,status,paymentMode,orderMessage) VALUES
                    ('" . $this->order_id . "','" . $this->user_id . "','" . $this->product_id . "','" . $this->totalAmount . "','" . $this->dateOfOrder . "','" . $this->transaction_id . "','" . $this->status . "','" . $this->paymentMode . "','')";

        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            $this->order_id = $this->conn->lastInsertId();
            // echo $this->order_id;
            return 1;
        }

        return false;
    }

    public function codSuccess()
    {
         $query = "UPDATE " . $this->table_name . " SET status='TXN_SUCCESS',transaction_id='0' WHERE order_id='" . $this->order_id . "'";
        // print_r($query);
                $stmt = $this->conn->prepare($query);
                if ($stmt->execute()) {
                    return true;
                    // return print_r($query);
                }
                return false;
                // return print_r($query);
//update status and transaction id and return true
// return true;
    }

    public function onlineSuccess()
    {
        $query = "UPDATE " . $this->table_name . " SET status='". $this->status."',transaction_id='". $this->transaction_id."' WHERE order_id='" . $this->order_id . "'";
        // print_r($query);
                $stmt = $this->conn->prepare($query);
                if ($stmt->execute()) {
                    return true;
                    // return print_r($query);
                }
                return false;
    }

    public function getOrderListDetails()
    {
        $query = "SELECT * FROM " . $this->table_name ." WHERE status!="."'pending' order by user_id";
        // print_r($query);
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            while ($row = $stmt->fetch()) {
                $res[] = $row;
            }
            return $res;
            // return print_r($query);
        } else {
            return [];
            // return print_r($query);
        }
    }
    public function singleOneOrderDetails()//for one user order details
    {
        $query  = "SELECT * FROM ".$this->table_name." WHERE user_id= ".$this->user_id;
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            while ($row = $stmt->fetch()) {
                $res[] = $row;
            }
            return $res;
        } else {
            return [];
        }   
    }
//in Admin side message update
public function orderDetail()
{
    $query  = "SELECT * FROM ".$this->table_name." WHERE order_id= ".$this->order_id;
    // prepare query statement
    $stmt = $this->conn->prepare($query);
    // execute query
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        while ($row = $stmt->fetch()) {
            $res[] = $row;
        }
        return $res;
        // return print_r($query);
    } else {
        return [];
        // return print_r($query);
    }   
}
    public function updateOrder()//onlin payment if successs
    {
        $query = "UPDATE " . $this->table_name . " SET dateOfOrder='" . $this->dateOfOrder . "',transaction_id='" . $this->transaction_id . "',status='" . $this->status . "',totelAmount='" . $this->totelAmount . "'
WHERE order_id='" . $this->order_id . "'";

// print_r($query);
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            return 1;
            // return print_r($query);
        }
        return false;
// return print_r($query);
    }
   public function updateOrderStatus()
   {
    $query = "UPDATE " . $this->table_name . " SET orderMessage='" . $this->orderMessage . "',status='" . $this->status . "'
    WHERE order_id='" . $this->order_id . "'";
    
    // print_r($query);
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute()) {
                return 1;
                // return print_r($query);
            }
            return false;
    // return print_r($query);

   }
public function cancelOrder()
{
    $query = "UPDATE " . $this->table_name . " SET status='orderCancelled',orderMessage='You have cancelled  this order'
    WHERE order_id='" . $this->order_id . "'";
    
    // print_r($query);
            $stmt = $this->conn->prepare($query);
            if ($stmt->execute()) {
                return 1;
                // return print_r($query);
            }
            return false; 
}



}
?>