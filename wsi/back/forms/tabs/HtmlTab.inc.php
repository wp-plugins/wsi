<div id="tab_HTML">
	<table>
		<tr id="box_html" class="box_type" style="height:220px;">
			<td><input type="radio" id="radio_html" name="wsi_type" value="html" <?php if($siBean->getWsi_type()=="html") echo('checked="checked"') ?> /></td>
			<td style="padding-left: 15px; width: 590px;"><textarea cols="75" rows="10" name="wsi_html" id="wsi_html"><?php echo $siBean->getWsi_html(); ?></textarea></td>
		</tr>
	</table>
</div> 