var  BASE_URL = 'http://localhost/example/';
CKEDITOR.replace( "editor", {
        filebrowserBrowseUrl: BASE_URL+'/assets/ckfinder/ckfinder.html',
    filebrowserImageBrowseUrl: BASE_URL+'/assets/ckfinder/ckfinder.html?Type=Images',
    filebrowserUploadUrl: BASE_URL+'/assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserImageUploadUrl: BASE_URL+'/assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    filebrowserWindowWidth: '1000',
    filebrowserWindowHeight: '700'
});





