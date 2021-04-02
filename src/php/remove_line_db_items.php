<?php
   include_once('db.php');
   echo ( $_GET['item_id'] );
 
   try {
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "DELETE FROM searchtool WHERE Id=:id LIMIT 1";
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':id', $_GET['item_id']);
    $stmt->execute();
    echo "line removed";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$db = null;
?>