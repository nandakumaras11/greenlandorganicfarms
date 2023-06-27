<?php
class Product{
     // database connection and table name
     private $conn;
     private $table_name = "product";
  
     // object properties
    public $product_id;
    public $category;
    public $product_name;
    public $old_price;
    public $selling_price;
    public $product_img;
    public $description;
    public $product_tags;
    public $stock;
    public $status;
     
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    function createProduct()
    {
        if($this->isAlreadyExist())
        {
            return 2;
        }
        $query = "INSERT INTO
                    " . $this->table_name . "(product_id,category,product_name,old_price,selling_price,product_img,description,product_tags,stock,status) VALUES
                    ('','".$this->category."','".$this->product_name."','".$this->old_price ."','".$this->selling_price."','". $this->product_img."','". $this->description."','". $this->product_tags."','". $this->stock ."','".$this->status."')";
// print_r($query);
// $sql = "INSERT INTO MyGuests (firstname, lastname, email)
// VALUES ('John', 'Doe', 'john@example.com')";

        $stmt = $this->conn->prepare($query);
        // sanitize
        // $this->category=htmlspecialchars(strip_tags($this->category));
        // $this->product_img=htmlspecialchars(strip_tags($this->product_img));
        // $this->description=htmlspecialchars(strip_tags($this->description));
        // $this->caption=htmlspecialchars(strip_tags($this->caption));
        // deleteProduct
        // bind values
        // $stmt->bindParam(":category", $this->category);
        // $stmt->bindParam(":image", $this->image);
        // $stmt->bindParam(":description", $this->description);
        // $stmt->bindParam(":caption", $this->caption);
		
		// execute query
        if($stmt->execute()){
            // $this->id = $this->conn->lastInsertId();
            return 1;
        }
    
        return false;
    }

    function getProductList(){
        $query = "SELECT * FROM " . $this->table_name;
       // prepare query statement
       $stmt = $this->conn->prepare($query);
       // execute query
       $stmt->execute();
       
       if($stmt->rowCount() > 0){
           $stmt->setFetchMode(PDO::FETCH_ASSOC);
           while ($row = $stmt->fetch()) {
               $res[] = $row;
           }
           return $res;
       }
       else{
           return [];
       }
   }
   function isAlreadyExist(){
    // $query  = "SELECT * FROM ".$this->table_name." WHERE category= ".$this->category AND "product_name= ".$this->product_name; 
    $query  = "SELECT * FROM ".$this->table_name." WHERE category='".$this->category ."'AND "."product_name='".$this->product_name."'"; 
    $stmt = $this->conn->prepare($query);
    // execute query
    $stmt->execute();
        if($stmt->rowCount() > 0){
            // $this->user_id=$stmt->user_id;
            return true;
        }
        else{
            return false;
        }
    }

    function deleteProduct()
    {
        $query  = "DELETE FROM ".$this->table_name." WHERE product_id= ".$this->product_id;
        // DELETE FROM table_name WHERE condition;
        // print_r($query);
        $product_delete_query = $this->conn->prepare($query);
      $execute=$product_delete_query->execute();
      if($execute)
      return 1;
      else
      return -1;
        }

function selectOneProduct()
{
   
    $query  = "SELECT * FROM ".$this->table_name." WHERE product_id= ".$this->product_id;
     // prepare query statement
     $stmt = $this->conn->prepare($query);
     // execute query
     $stmt->execute();
     
     if($stmt->rowCount() > 0){
         $stmt->setFetchMode(PDO::FETCH_ASSOC);
         while ($row = $stmt->fetch()) {
             $res[] = $row;
         }
         return $res;
     }
     else{
         return [];
     }
}
function updateProduct()
{
    // $query = "INSERT INTO
    // " . $this->table_name . "(product_id,category,product_name,old_price,selling_price,product_img,description,product_tags,stock,status) VALUES
    // ('','".$this->category."','".$this->product_name."','".$this->old_price ."','".$this->selling_price."','". $this->product_img."','". $this->description."','". $this->product_tags."','". $this->stock ."','".$this->status."')";

$query = "UPDATE " . $this->table_name . " SET category='".$this->category."',product_name='".$this->product_name."',old_price='".$this->old_price ."',selling_price='".$this->selling_price."',product_img='". $this->product_img."',description='". $this->description."',product_tags='". $this->product_tags."'
WHERE product_id='".$this->product_id."'";
// print_r($query);
$stmt = $this->conn->prepare($query); 
if($stmt->execute()){
    return 1;
}
return false;
}
}
?>