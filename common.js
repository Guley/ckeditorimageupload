jQuery(document).ready(function () {
  
   CKEDITOR.replace( 'story',
                {
                    filebrowserBrowseUrl :'imageslist.php',
                    filebrowserImageBrowseUrl : 'imageslist.php',
                    filebrowserFlashBrowseUrl :'imageslist.php',
                    filebrowserUploadUrl  :'upload.php',
                    filebrowserImageUploadUrl : 'upload.php',
                    filebrowserFlashUploadUrl : 'upload.php'
 
        });

});

function copytext(image){
   var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#'+image).data('link')).select();
    document.execCommand("copy");
    $temp.remove();
    window.top.close();
  /* Alert the copied text */
  alert("Link Copied: ");
}