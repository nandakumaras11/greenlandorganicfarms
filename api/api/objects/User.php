<?php
class User
{
    private $conn;
    private $table_name = 'user_details';
    public $user_id;
    public $username;
    public $password;
    public $address;
    public $phone_no;
    public $signInMobile;
    public $signInPassword;
    public $userDetails;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function insertUser()
    {
        if ($this->isAlreadyExist()) {
            return 2;
        } else {
            $query = "INSERT INTO
    " . $this->table_name . "(user_id,username,password,address,phone_no) VALUES
    ('','" . $this->username . "','" . $this->password . "','" . $this->address . "','" . $this->phone_no . "')";

            $stmt = $this->conn->prepare($query);

            if ($stmt->execute()) {
                $this->user_id = $this->conn->lastInsertId();
                return 1;
            }
            return false;
        }

    }
    public function authentication()
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE phone_no='" . $this->signInMobile . "' AND password='" . $this->signInPassword . "'";
        // print_r($query);
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            while ($row = $stmt->fetch()) {
                $res[] = $row;
            }
            // $userDetails = $res;
            return $res;
        }
        // if ($stmt->rowCount() > 0) {

        //     // $this->user_id=$stmt->user_id;
        //     return 1;
        // }
        else {
            return [];
        }

    }

    public function isAlreadyExist()
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE phone_no='" . $this->phone_no;
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            // $this->user_id=$stmt->user_id;
            return true;
        } else {
            return false;
        }
    }

    // public function getUserList()
    // {
    //     $query = "SELECT * FROM " . $this->table_name;
    //     // prepare query statement
    //     $stmt = $this->conn->prepare($query);
    //     // execute query
    //     $stmt->execute();

    //     if ($stmt->rowCount() > 0) {
    //         $stmt->setFetchMode(PDO::FETCH_ASSOC);
    //         while ($row = $stmt->fetch()) {
    //             $res[] = $row;
    //         }
    //         return $res;
    //     } else {
    //         return [];
    //     }
    // }
    public function updateAddress()
    {
        $query = "UPDATE " . $this->table_name . " SET address='".$this->address."' WHERE user_id='".$this->user_id."'";
    // print_r($query);
    $stmt = $this->conn->prepare($query);
    if($stmt->execute()){
    return 1;
    }
    return false;
    }
    public function getAddress()
    {
        $query = "SELECT "."user_id,address,username,phone_no"." FROM " . $this->table_name . " WHERE user_id= " . $this->user_id;
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

   
// function updateProduct()
    // {
    // $query = "INSERT INTO
    // " . $this->table_name . "(product_id,category,product_name,old_price,selling_price,product_img,description,product_tags,stock,status) VALUES
    // ('','".$this->category."','".$this->product_name."','".$this->old_price ."','".$this->selling_price."','". $this->product_img."','". $this->description."','". $this->product_tags."','". $this->stock ."','".$this->status."')";

// $query = "UPDATE " . $this->table_name . " SET category='".$this->category."',product_name='".$this->product_name."',old_price='".$this->old_price ."',selling_price='".$this->selling_price."',product_img='". $this->product_img."',description='". $this->description."',product_tags='". $this->product_tags."'
    // WHERE product_id='".$this->product_id."'";
    // // print_r($query);
    // $stmt = $this->conn->prepare($query);
    // if($stmt->execute()){
    // return 1;
    // }
    // return false;
    // }
}

