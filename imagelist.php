<?php
 		$local = '/ckediorupload/';
        $UserFilesAbsolutePath = 'ckediorupload/' ;
        $dataArr =[];
         if ($handle = opendir($local)) {

                while (false !== ($entry = readdir($handle))) {

                    if ($entry != "." && $entry != "..") {

                        array_push( $dataArr, $UserFilesAbsolutePath.$entry);
                    }
                }
                closedir($handle);
            }
            ?>
            <table class="table">
						<thead>
							<tr>
								<th>Url</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
            <?php
            if(!empty($images)){ 
					foreach ($images as $key => $image) {
					?>
				<tr>
					<td id="img_<?php echo $key; ?>" data-link="<?php echo $image; ?>"><img src="<?php echo $image; ?>" height="100" width="100" /></td>
					<td><button  class="btn btn-sm btn-success" onclick="copytext('img_<?php echo $key; ?>')">Copy Image Url</button></td>
				</tr>
			<?php } } ?>
			</tbody>
			</table>