<?php
class Gallery{
    private $conn;
    private $table_name='gallery';
    public $deleteGallery_id;
    public $image;
    public $status;

    public function __construct($db){
        $this->conn = $db;
    }
	// create new news
    function createGallery(){
    
        // if($this->isAlreadyExist()){
        //     return 2;
        // }
		// query to insert record
		$query = "INSERT INTO
                    " . $this->table_name . "
                SET
                   image=:image";
        
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        // $this->category=htmlspecialchars(strip_tags($this->category));
        $this->image=htmlspecialchars(strip_tags($this->image));
        // $this->description=htmlspecialchars(strip_tags($this->description));
        // $this->caption=htmlspecialchars(strip_tags($this->caption));

        // bind values
        // $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":image", $this->image);
        // $stmt->bindParam(":description", $this->description);
        // $stmt->bindParam(":caption", $this->caption);
		
		// execute query
        if($stmt->execute()){
            $this->id = $this->conn->lastInsertId();
            return 1;
        }
    
        return false;
        
    }

	// function isAlreadyExist(){
 //        $query = "SELECT * FROM " . $this->table_name . " WHERE productname='".$this->productname."'";
 //        // prepare query statement
 //        $stmt = $this->conn->prepare($query);
 //        // execute query
 //        $stmt->execute();
 //        if($stmt->rowCount() > 0){
 //            return true;
 //        }
 //        else{
 //            return false;
 //        }
 //    }
	
	//get all news
	function getGalleryList(){
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
    function deleteGallery(){
        $query = "DELETE FROM " . $this->table_name . " where gallery_id=".$this->deleteGallery_id;
        
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        return 1;
    }
    
}
?>