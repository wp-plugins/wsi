<a style="display:none;" id="splashLink" href="#" rel="#miesSPLASH"></a>
<div class="simple_overlay" style="text-align:center;color:#<?php echo $_GET["splash_color"]; ?>;margin-top:15px;height:<?php echo $_GET['splash_image_height']; ?>px;width:<?php echo $_GET['splash_image_width']; ?>px;" id="miesSPLASH">
	
	<?php switch ($_GET['wsi_type']) {
	    case "picture": ?>

			<?php if($_GET['wsi_picture_link_url']!="") { echo ('<a href="'.$_GET['wsi_picture_link_url'].'" target="_'.$_GET['wsi_picture_link_target'].'">'); } ?>
			<img style="height:<?php echo $_GET['splash_image_height']; ?>px;width:<?php echo $_GET['splash_image_width']; ?>px;" src="<?php echo $_GET['url_splash_image']; ?>" />
			<?php if($_GET['wsi_picture_link_url']!="") { echo('</a>'); } ?>
		
	    <?php break; case "youtube": ?>

			<object width="<?php echo $_GET['splash_image_width']; ?>" height="<?php echo $_GET['splash_image_height']; ?>">
				<param name="movie" value="http://www.youtube.com/v/<?php echo $_GET['wsi_youtube']; ?>&hl=<?php echo get_locale(); ?>&fs=1&rel=0"></param>
				<param name="allowFullScreen" value="true"></param>
				<param name="allowscriptaccess" value="always"></param>
				<embed src="http://www.youtube.com/v/<?php echo $_GET['wsi_youtube']; ?>&hl=<?php echo get_locale(); ?>&fs=1&rel=0<?php if($_GET['wsi_youtube_autoplay']=='true'){ ?>&autoplay=1<?php } if($_GET['wsi_youtube_loop']=='true'){ ?>&loop=1<?php } ?>" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="<?php echo $_GET['splash_image_width']; ?>" height="<?php echo $_GET['splash_image_height']; ?>"></embed>
			</object>
			    
		<?php break; case "yahoo": ?>
		
			<object width="<?php echo $_GET['splash_image_width']; ?>" height="<?php echo $_GET['splash_image_height']; ?>"><param name="movie" value="http://d.yimg.com/static.video.yahoo.com/yep/YV_YEP.swf?ver=2.2.46" />
				<param name="allowFullScreen" value="true" />
				<param name="AllowScriptAccess" VALUE="always" />
				<param name="bgcolor" value="#000000" />
				<param name="flashVars" value="id=20476969&vid=<?php echo $_GET['wsi_yahoo']; ?>&lang=<?php echo get_locale(); ?>&embed=1" />
				<embed src="http://d.yimg.com/static.video.yahoo.com/yep/YV_YEP.swf?ver=2.2.46" type="application/x-shockwave-flash" width="<?php echo $_GET['splash_image_width']; ?>" height="<?php echo $_GET['splash_image_height']; ?>" allowFullScreen="true" AllowScriptAccess="always" bgcolor="#000000" flashVars="id=20476969&vid=<?php echo $_GET['wsi_yahoo']; ?>&lang=<?php echo get_locale(); ?>&embed=1" ></embed>
			</object>
		
		<?php break; case "dailymotion": ?>
		
			<object width="<?php echo $_GET['splash_image_width']; ?>" height="<?php echo $_GET['splash_image_height']; ?>">
				<param name="movie" value="http://www.dailymotion.com/swf/video/<?php echo $_GET['wsi_dailymotion']; ?>"></param>
				<param name="allowFullScreen" value="true"></param>
				<param name="allowScriptAccess" value="always"></param>
				<embed type="application/x-shockwave-flash" src="http://www.dailymotion.com/swf/video/<?php echo $_GET['wsi_dailymotion']; ?>" width="<?php echo $_GET['splash_image_width']; ?>" height="<?php echo $_GET['splash_image_height']; ?>" allowfullscreen="true" allowscriptaccess="always"></embed>
			</object>
			
		<?php break; case "metacafe": ?>
				
			<embed 
				src="http://www.metacafe.com/fplayer/<?php echo $_GET['wsi_metacafe']; ?>/.swf" 
				width="<?php echo $_GET['splash_image_width']; ?>" 
				height="<?php echo $_GET['splash_image_height']; ?>" 
				wmode="transparent" 
				pluginspage="http://www.macromedia.com/go/getflashplayer" 
				type="application/x-shockwave-flash" 
				allowFullScreen="true" 
				allowScriptAccess="always" 
				name="Metacafe_<?php echo $_GET['wsi_metacafe']; ?>"></embed>
		
		<?php break; case "swf": ?>
			
			<object id='player' name='player' width='<?php echo $_GET['splash_image_width']; ?>' height='<?php echo $_GET['splash_image_height']; ?>' >
				<param name='FileName' value='<?php echo $_GET['wsi_swf']; ?>'> 
				<param name='ShowControls' value='TRUE'> 
				<param name='AutoStart' value='FALSE'> 
				<param name='AnimationAtStart' value='TRUE'> 
				<param name='ShowDisplay' value='FALSE'> 
				<param name='TransparentAtStart' value='FALSE'> 
				<param name='ShowStatusbar' value='TRUE'> 
				<param name='enableContextMenu' value='FALSE'> 
				<param name='AllowChangeDisplaySize' value='TRUE'> 
				<param name='AutoSize' value='FALSE'> 
				<param name='EnableFullScreenControls' value='TRUE'> 
				<embed type='video/x-ms-asf-plugin' 
					src='<?php echo $_GET['wsi_swf']; ?>' 
					name='player' 
					autostart='0' 
					showcontrols='1' 
					showdisplay='0' 
					showstatusbar='1' 
					animationatstart='1' 
					transparentatstart='0' 
					allowchangedisplaysize='1' 
					autosize='0' 
					displaysize='0' 
					enablecontextmenu='0' 
					windowless='1' 
					width='<?php echo $_GET['splash_image_width']; ?>' 
					height='<?php echo $_GET['splash_image_height']; ?>' 
					enablefullscreencontrols='1'> 
				</embed> 
			</object>
			
		<?php break; case "html": ?>
		
			<?php echo stripslashes($_GET['wsi_html']); ?>
			
		<?php break; case "include": ?>
		
			<iframe 
				height="<?php echo $_GET['splash_image_height']; ?>" 
				width="<?php echo $_GET['splash_image_width']; ?>" 
				src="<?php echo stripslashes($_GET['wsi_include_url']); ?>">
			</iframe>
		
	<?php } ?>

</div>

<script type="text/javascript">

	<?/* No Conflict */?>
	var $j = jQuery.noConflict();

	$j(document).ready(function () {
		<?/* Splash Image */?>
		$j("#splashLink").overlay({
			mask: {
				color: '#<?php echo $_GET["splash_color"]; ?>',
				opacity: <?php echo $_GET['wsi_opacity']/100; ?> 
			},
			load: true, // Lance la Splash Image à l'ouverture			
			fixed: <?php echo $_GET['wsi_fixed_splash']; ?>,
			closeOnClick: <?php echo ($_GET['wsi_close_esc_function']=='true')?'false':'true'; ?>
		});

		<?/* Autoclose de la Splash Image */?>
		setTimeout("$j('#miesSPLASH').fadeOut()",<?php echo $_GET["wsi_display_time"]; ?>000);
		setTimeout("$j('#exposeMask').fadeOut()",<?php echo $_GET["wsi_display_time"]; ?>000);

		<?/* On masque la croix en haut à droite si besoin */?>
		<?php if($_GET['wsi_hide_cross']=='true') { ?>
			$j('.simple_overlay .close').css('display','none');
		<?php } ?>
		
		<?/* On masque la bordure d'ombre si besoin */?>
		<?php if($_GET['wsi_disable_shadow_border']=='true') { ?>
			$j('.simple_overlay').css('-moz-box-shadow','none');
			$j('.simple_overlay').css('-webkit-box-shadow','none');
			$j('.simple_overlay').css('box-shadow','none');
		<?php } ?>
		
	});
	
</script>
