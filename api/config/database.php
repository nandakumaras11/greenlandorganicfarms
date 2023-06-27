<?php

// header("Access-Control-Allow-Origin: *");
class Database{

    // private $host = "localhost";
    // private $db_name = "greenlan_db";
	// private $username = "greenlan_user";
    // private $password = "Vazha@2001";
    private $host = "localhost";
    private $db_name = "greennest";
	private $username = "root";
    private $password = "";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8mb4");
            // $this->conn->exec("set names utf8");
            //$this->conn->set_charset('utf8mb4');
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>