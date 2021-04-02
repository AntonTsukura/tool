<?php
   include_once('db.php');
 
   try {
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "UPDATE searchtool SET description=:description WHERE id=:id";
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':id', $_GET['parent_item_id']);
    $stmt->bindValue(':description', $_GET['new_description']);
    $stmt->execute();
    echo "description change";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$db = null;
?>