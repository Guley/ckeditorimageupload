# ckeditorimageupload
ckeditor image upload
Include following cdn in footer
```<script src="//cdn.ckeditor.com/4.11.3/standard/ckeditor.js"></script>```

Download ckfinder from below link
```
https://ckeditor.com/ckfinder/download/
```
place finder directory on your assets location

edit finder config file which is named as ckfinder.php

```
$config['backends'][] = array(
    'name'         => 'default',
    'adapter'      => 'local',
    'baseUrl'      => 'http://localhost/example/assets/ckimages/',
     'root'         =>'/var/www/html/example/assets/ckimages/', // Can be used to explicitly set the CKFinder user files directory.
    'chmodFiles'   => 0777,
    'chmodFolders' => 0755,
    'filesystemEncoding' => 'UTF-8',
);
```
Make directory in assets folder which files will uploaded eg: ckimages

# Enjoy uploading with ckeditor and ckfinder 


# Screenshots
<img src="https://github.com/Guley/ckeditorimageupload/blob/master/ckfinder3.png" />
<img src="https://github.com/Guley/ckeditorimageupload/blob/master/ckfinder2.png" />
<img src="https://github.com/Guley/ckeditorimageupload/blob/master/ckfinder1.png" />












