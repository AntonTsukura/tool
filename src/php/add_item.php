<?php
   include_once('db.php');
   /*echo ( $_GET['new_item'] );*/
   
   try {
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO searchtool (name, tags)
    VALUES ("."'".$_GET['new_item']."'".", 'tags')";
    // use exec() because no results are returned
    $db->exec($sql);
    $id = $db->lastInsertId();
    echo "id=".$id;
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$db = null;
?>