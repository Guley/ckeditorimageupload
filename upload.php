<?php

    $UserFilesPath = '/ckediorupload/' ;
    $UserFilesAbsolutePath = '/ckediorupload/' ;
    $ext = pathinfo($_FILES["upload"]["name"], PATHINFO_EXTENSION);
    $newext = strtolower($ext);
    if($newext == 'jpeg' || $newext == 'jpg' || $newext == 'png'){

    if (file_exists($UserFilesPath. $_FILES["upload"]["name"]))
        {
         echo $_FILES["upload"]["name"] . " already exists. ";
        }
        else
        {
         move_uploaded_file($_FILES["upload"]["tmp_name"],
         $UserFilesPath . $_FILES["upload"]["name"]);
         echo "<p class='ck_img_url' style='font-size: 12px;'>Stored in: " . $UserFilesAbsolutePath . $_FILES["upload"]["name"].'</p>';
        }
    }else{
         echo "<p class='alert alert-danger' style='font-size: 12px;'>Invaild File Format</p>";
    }
?>