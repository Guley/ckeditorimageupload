  function confirmDelete(url){
	swal({
	  title: "Are you sure?",
	  text: "You will not be able to recover!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Yes, remove it!",
	  cancelButtonText: "No, cancel!",
	  closeOnConfirm: false,
	  closeOnCancel: true
	},
	function(isConfirm) {
	  if (isConfirm) {
	  	window.location.href = url;
	  } 
	});
}


CKEDITOR.replace( "blog_desc", {
        filebrowserBrowseUrl: BASE_URL+'http://localhost/laurajanestylist/portal/ckfinder/ckfinder.html',
    filebrowserImageBrowseUrl: BASE_URL+'/ckfinder/ckfinder.html?Type=Images',
    filebrowserUploadUrl: BASE_URL+'/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserImageUploadUrl: BASE_URL+'/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    filebrowserWindowWidth: '1000',
    filebrowserWindowHeight: '700'
 });

CKEDITOR.replace( "short_desc", {
    filebrowserBrowseUrl: BASE_URL+'http://localhost/laurajanestylist/portal/ckfinder/ckfinder.html',
    filebrowserImageBrowseUrl: BASE_URL+'/ckfinder/ckfinder.html?Type=Images',
    filebrowserUploadUrl: BASE_URL+'/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserImageUploadUrl: BASE_URL+'/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    filebrowserWindowWidth: '1000',
    filebrowserWindowHeight: '700'
	     // filebrowserBrowseUrl      : BASE_URL+'imageslist',
      //   filebrowserImageBrowseUrl : BASE_URL+'imageslist',
      //   filebrowserFlashBrowseUrl : BASE_URL+'imageslist',
      //   filebrowserUploadUrl      : BASE_URL+'imageupload',
      //   filebrowserImageUploadUrl : BASE_URL+'imageupload',
      //   filebrowserFlashUploadUrl : BASE_URL+'imageupload'
	   
 });





