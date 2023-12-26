<?php
session_start();
class Admin
{
    private $conn;
    private $table_name = 'admin_details';
    public $admin_id;
    public $password;
    public $phone_no;
    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function authentication()
    {
        $query = "SELECT "."admin_id"." FROM " . $this->table_name . " WHERE phone_no='" . $this->signInMobile . "' AND password='" . $this->signInPassword . "'";
        // echo ($query);
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        if ($stmt->rowCount() > 1) {
            // admin_id
            return 2;
        }
        else if($stmt->rowCount() == 1){
         
            $res=$stmt->fetch();
            $_SESSION['admin_id']=$res['admin_id'];
        // print_r($res['admin_id']);
        return 1;
        }
        else
        return -1;
    }
    public function isAlreadyExist()
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE phone_no='" . $this->phone_no."'";
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
public function isLogin()
{
    if(isset($_SESSION['admin_id']))
    return $_SESSION['admin_id'];
    else
    return null;
}
public function logout()
{
    if(isset($_SESSION['admin_id']))
    {
        unset($_SESSION['admin_id']);
    return 1;
}
else
return null;

}
}

