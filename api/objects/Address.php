<?php
class Address
{
    private $conn;
    private $table_name = 'address_details';
    public $address_id;
    public $user_id;
    public $address;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function insertAddress()
    {
        if ($this->isAlreadyExist() == 2) {
            return 2;
        } else {
            // return $this->isAlreadyExist();
            $query = "INSERT INTO " . $this->table_name . "(address_id,user_id,address) VALUES
    ('','" . $this->user_id . "','" . $this->address . "')";
            print_r($query);

            $stmt = $this->conn->prepare($query);
            return 1;
            // if ($stmt->execute()) {
            //     $this->user_id = $this->conn->lastInsertId();
            //     return 1;
            // }
            // return false;
        }

    }
    public function addAddress() # by click order the product
    {
        $query = "UPDATE user_details SET address='" . $this->address_id . "' WHERE user_id='" . $this->user_id . "'";
        // print_r($query);
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            return 1;
        }
        return false;
    }
    public function addressDetailList()
    {
        $query = "SELECT " . "address_id,address" . " FROM " . $this->table_name . " WHERE user_id='" . $this->user_id . "'";
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
        $query = "SELECT * FROM " . $this->table_name . " WHERE address='" . $this->address . "'";
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            // $this->user_id=$stmt->user_id;
            // return 1;
            return 2;
        } else {
            return 1;
        }
    }

    public function updateAddress()
    {
        $query = "UPDATE " . $this->table_name . " SET address='" . $this->address . "' WHERE address_id='" . $this->address_id . "'";
        // print_r($query);
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            return 1;
        }
        return false;
    }
    // public function getAddress()
    // {
    //     $query = "SELECT "."address_id,address"." FROM " . $this->table_name . " WHERE user_id= " . $this->user_id;
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
    public function deleteAddress()
    {
        $query = "DELETE FROM " . $this->table_name . " where address_id=" . $this->address_id;

        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        return 1;
    }
}
