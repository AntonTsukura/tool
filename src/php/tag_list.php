<?php
include_once('db.php');
$tag = $db->query('SELECT * FROM `tag_list`');
while($row = $tag->fetch(PDO::FETCH_ASSOC)){
    echo
        '<span class="tag_proporties">' .
            $row['tag_name'] .
        '</span>';
}