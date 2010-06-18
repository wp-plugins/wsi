/*
  mColorPicker
  Version: 1.0.0
  
  Copyright (c) 2010 Meta100 LLC.
  
  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation
  files (the "Software"), to deal in the Software without
  restriction, including without limitation the rights to use,
  copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following
  conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  Except as contained in this notice, the name(s) of the above 
  copyright holders shall not be used in advertising or otherwise 
  to promote the sale, use or other dealings in this Software 
  without prior written authorization.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.
*/
mColorPicker={current_color:false,current_value:false,color:false,imageUrl:"http://blog.dark-sides.com/wp-content/plugins/wsi/colorpicker/",swatches:["#ffffff","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#ff0000","#4c2b11","#3b3b3b","#000000"],colorShow:function(e,d){var a="icp_"+e;eICP=jQuery("#"+a).offset();jQuery("#mColorPicker").css({top:(eICP.top+jQuery("#"+a).outerHeight())+"px",left:(eICP.left)+"px",position:"absolute"}).fadeIn("fast");jQuery("#mColorPickerBg").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).fadeIn("fast");var c=jQuery("#"+e).val();jQuery("#colorPreview span").text(c);jQuery("#colorPreview").css("background",c);jQuery("#color").val(c);mColorPicker.current_color=jQuery("#"+e).val();mColorPicker.color=jQuery("#"+e).css("background-color");var b=jQuery("#mColorPicker");jQuery("#mColorPickerImg").unbind().mousemove(function(f){var g=jQuery("#mColorPickerImg").offset();mColorPicker.color=mColorPicker.whichColor(f.pageX-g.left,f.pageY-g.top);mColorPicker.setInputColor(e,mColorPicker.color,d)}).bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)}).click(function(f){mColorPicker.colorPicked(e,d)});jQuery("#mColorPickerImgGray").unbind().mousemove(function(f){var g=jQuery("#mColorPickerImgGray").offset();mColorPicker.color=mColorPicker.whichColor(f.pageX-g.left,f.pageY-g.top+128);mColorPicker.setInputColor(e,mColorPicker.color,d)}).bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)}).click(function(f){mColorPicker.colorPicked(e,d)});jQuery(".pastColor").unbind().mousemove(function(f){mColorPicker.color=mColorPicker.toRGBHex(jQuery(this).css("background-color"));mColorPicker.setInputColor(e,mColorPicker.color,d)}).bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)}).click(function(f){mColorPicker.colorPicked(e,d)});jQuery("#mColorPickerTransparent").unbind().mouseover(function(f){mColorPicker.color="transparent";mColorPicker.setInputColor(e,mColorPicker.color,d)}).bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)}).click(function(f){mColorPicker.colorPicked(e,d)});jQuery("#mColorPickerInput").unbind().bind("keyup",function(f){mColorPicker.color=jQuery("#mColorPickerInput").val();mColorPicker.setInputColor(e,mColorPicker.color,d);if(f.which==13){mColorPicker.colorPicked(e,d)}}).bind("blur",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)});jQuery("#mColorPickerSwatches").unbind().bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)});jQuery("#mColorPickerFooter").unbind().bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)});jQuery("#mColorPickerWrapper").unbind().bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)});jQuery("#mColorPicker").unbind().bind("mouseleave",function(f){mColorPicker.setInputColor(e,mColorPicker.current_color,d)})},setInputColor:function(e,a,c){var d=(a=="transparent")?"url('"+mColorPicker.imageUrl+"grid.gif')":"",b=(a=="transparent")?"#000000":mColorPicker.textColor(a);if(c){jQuery("#icp_"+e).css({"background-color":a,"background-image":d})}jQuery("#"+e).val(a).css({"background-color":a,"background-image":d,color:b});jQuery("#mColorPickerInput").val(a)},textColor:function(a){return(parseInt(a.substr(1,2),16)+parseInt(a.substr(3,2),16)+parseInt(a.substr(5,2),16)<400)?"white":"black"},set_cookie:function(c,d,e){var b=c+"="+escape(d),a=new Date();a.setDate(a.getDate()+e);b+="; expires="+a.toGMTString();document.cookie=b},get_cookie:function(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return null}},colorPicked:function(d,c){var b=[],a=0;mColorPicker.current_value=mColorPicker.current_color=mColorPicker.color;jQuery("#mColorPickerImg").unbind();jQuery("#mColorPickerImgGray").unbind();jQuery(".pastColor").unbind();jQuery("#mColorPickerBg").hide();jQuery("#mColorPicker").fadeOut();if(mColorPicker.color!="transparent"){b[0]=mColorPicker.color}jQuery(".pastColor").each(function(){var e=mColorPicker.toRGBHex(jQuery(this).css("background-color"));if(e!=b[0]&&b.length<10){b[b.length]=e}jQuery(this).css("background-color",b[a++])});mColorPicker.set_cookie("swatches",b.join(","),365)},whichColor:function(a,c){var b=colorG=colorB=256;if(a<32){colorG=a*8;colorB=1}else{if(a<64){b=256-(a-32)*8;colorB=1}else{if(a<96){b=1;colorB=(a-64)*8}else{if(a<128){b=1;colorG=256-(a-96)*8}else{if(a<160){b=(a-128)*8;colorG=1}else{colorG=1;colorB=256-(a-160)*8}}}}}if(c<64){b=b+(256-b)*(64-c)/64;colorG=colorG+(256-colorG)*(64-c)/64;colorB=colorB+(256-colorB)*(64-c)/64}else{if(c<=128){b=b-b*(c-64)/64;colorG=colorG-colorG*(c-64)/64;colorB=colorB-colorB*(c-64)/64}else{if(c>128){b=256-(a/192*256);colorG=256-(a/192*256);colorB=256-(a/192*256)}}}b=parseInt(b);colorG=parseInt(colorG);colorB=parseInt(colorB);if(b>=256){b=255}if(colorG>=256){colorG=255}if(colorB>=256){colorB=255}b=b.toString(16);colorG=colorG.toString(16);colorB=colorB.toString(16);if(b.length<2){b=0+b}if(colorG.length<2){colorG=0+colorG}if(colorB.length<2){colorB=0+colorB}return"#"+b+colorG+colorB},toRGBHex:function(c){if(c.indexOf("#")>-1){return c}var a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],d="#",b=0;c=c.replace(/[^0-9,]/g,"").split(",");for(var e=0;e<c.length;e++){b=Math.floor(c[e]/16);d+=a[b]+a[c[e]-b*16]}return d},main:function(){jQuery("input").filter(function(a){return this.getAttribute("type")=="color"}).each(function(g){if(g==0){jQuery(document.createElement("div")).attr("id","mColorPicker").css("display","none").html('<div id="mColorPickerWrapper"><div id="mColorPickerImg"></div><div id="mColorPickerImgGray"></div><div id="mColorPickerSwatches"><div id="cell0" class="pastColor">&nbsp;</div><div id="cell1" class="pastColor noLeftBorder">&nbsp;</div><div id="cell2" class="pastColor noLeftBorder">&nbsp;</div><div id="cell3" class="pastColor noLeftBorder">&nbsp;</div><div id="cell4" class="pastColor noLeftBorder">&nbsp;</div><div id="cell5" class="pastColor noLeftBorder">&nbsp;</div><div id="cell6" class="pastColor noLeftBorder">&nbsp;</div><div id="cell7" class="pastColor noLeftBorder">&nbsp;</div><div id="cell8" class="pastColor noLeftBorder">&nbsp;</div><div id="cell9" class="pastColor noLeftBorder">&nbsp;</div><div class="clear"></div></div><div id="mColorPickerFooter"><input type="text" size="8" id="mColorPickerInput"/><span id="mColorPickerTransparent">transparent</span></div></div>').appendTo("body");jQuery(document.createElement("div")).attr("id","mColorPickerBg").click(function(){jQuery("#mColorPickerBg").hide();jQuery("#mColorPicker").fadeOut()}).appendTo("body");jQuery("table.pickerTable td").css({width:"12px",height:"14px",border:"1px solid #000",cursor:"pointer"});jQuery("#mColorPicker table.pickerTable").css({"border-collapse":"collapse"});jQuery("#mColorPicker").css({border:"1px solid #ccc",background:"#333",color:"#fff","z-index":999998,width:"194px",height:"184px","font-size":"12px","font-family":"times"});jQuery(".pastColor").css({height:"18px",width:"18px",border:"1px solid #000","float":"left"});jQuery("#colorPreview").css({height:"50px"});jQuery(".noLeftBorder").css({"border-left":"0"});jQuery(".clear").css({clear:"both"});jQuery("#mColorPickerWrapper").css({position:"relative",border:"solid 1px gray","background-color":"white","z-index":"999999"});jQuery("#mColorPickerImg").css({height:"128px",width:"192px",border:"0",cursor:"crosshair","background-image":"url('" + mColorPicker.imageUrl + "colorpicker.png')"});jQuery("#mColorPickerImgGray").css({height:"8px",width:"192px",border:"0",cursor:"crosshair","background-image":"url('" + mColorPicker.imageUrl + "graybar.jpg')"});jQuery("#mColorPickerInput").css({border:"solid 1px gray","font-size":"12pt",margin:"1px"});jQuery("#mColorPickerImgGrid").css({border:"0",height:"20px",width:"20px","vertical-align":"text-bottom"});jQuery("#mColorPickerSwatches").css({"background-color":"#000"});jQuery("#mColorPickerFooter").css({"background-image":"url('"+mColorPicker.imageUrl+"grid.gif')"});jQuery("#mColorPickerTransparent").css({"font-size":" 18px",color:"#000","padding-left":" 4px",cursor:" pointer",overflow:"hidden"})}var b=jQuery(this).attr("id"),c=new Date(),h=false;if(b==""){b=jQuery(this).attr("name")}if(b==""){b="color_"+c.getTime()}jQuery(this).attr("id",b);if(jQuery(this).attr("text")=="hidden"){var f=jQuery(this).val(),d=(jQuery(this).width()>0)?jQuery(this).width():parseInt(jQuery(this).css("width"));height=(jQuery(this).height())?jQuery(this).height():parseInt(jQuery(this).css("height"));flt=jQuery(this).css("float"),e=(f=="transparent")?"url('"+mColorPicker.imageUrl+"/grid.gif')":"",k=(f=="transparent")?"#000000":mColorPicker.textColor(f),a="";jQuery("body").append('<span id="color_work_area"></span>');jQuery("span#color_work_area").append(jQuery(this).clone(true));a=jQuery("span#color_work_area").html().replace(/type=[^a-z]*color[^a-z]*/gi,'type="hidden"');jQuery("span#color_work_area").html("").remove();jQuery(this).after('<span style="cursor:pointer;border:1px solid black;float:'+flt+";width:"+d+"px;height:"+height+'px;" id="icp_'+b+'">&nbsp;</span>').after(a).remove();jQuery("#icp_"+b).css({"background-color":f,"background-image":e,display:"inline-block",color:k});h=true}else{var f=jQuery(this).val(),b=jQuery(this).attr("id"),e=(f=="transparent")?"url('"+mColorPicker.imageUrl+"/grid.gif')":"",k=(f=="transparent")?"#000000":mColorPicker.textColor(f),a="";jQuery("body").append('<span id="color_work_area"></span>');jQuery("span#color_work_area").append(jQuery(this).clone(true));a=jQuery("span#color_work_area").html().replace(/type=[^a-z]*color[^a-z]*/gi,'type="text"');jQuery("span#color_work_area").html("").remove();jQuery(this).after(a).remove();jQuery("#"+b).css({"background-color":f,"background-image":e,color:k}).after('<span style="cursor:pointer;" id="icp_'+b+'"><img src="'+mColorPicker.imageUrl+'color.png" style="border:0;margin:0 0 0 3px" align="absmiddle"></span>')}jQuery("#icp_"+b).bind("click",function(){mColorPicker.colorShow(b,h)});var j=mColorPicker.get_cookie("swatches"),g=0;if(j==null){j=mColorPicker.swatches}else{j=j.split(",")}jQuery(".pastColor").each(function(){jQuery(this).css("background-color",j[g++])})})}};jQuery(document).ready(function(){mColorPicker.main()});