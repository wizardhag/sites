/**
 * Written by John Claassen
 * 
 */

var home = false;

/**
 * Changes the header when scrolling:
 */
function doTheHeaderScrollThing(){
	headerScrollResize(true);
}

/**
 * Changes the header when resizing the page:
 */
function doTheHeaderResizeThing(){
	headerScrollResize(false);
}

function headerScrollResize(scrolling){
	var scrollNum = document.body.scrollTop;
	/**/
	if(scrolling==true)
		document.getElementById("h0_main").style="";
	else
		document.getElementById("h0_main").style="-webkit-transition:height .25s;-moz-transition:height .25s;-o-transition:height .25s;";
	/**/
	if(window.innerWidth>600){
		if(scrolling==false)
			document.getElementById("header").style.height = 126;
		
		if(scrollNum<90){
			var width = window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth;

			document.getElementById("h0_main").style.height = 126-scrollNum;
			//document.getElementById("h0_main").style.position="relative";
			//document.getElementById("h0_main").style.height=126;
			document.getElementById("h0_pic_link").style.width = 124-(scrollNum*(4/9));
		}
		else{
			document.getElementById("h0_main").style.height = 36;
			//document.getElementById("h0_main").style.position="fixed";
			//document.getElementById("h0_main").style.height=36;
			document.getElementById("h0_pic_link").style.width = 84;
		}
	}
	else{
		if(scrolling==false)
			document.getElementById("header").style.height = 36;
		document.getElementById("h0_main").style.height = 36;
		document.getElementById("h0_pic_link").style.width = 84;
	}
}

function changeSearchbarFocus(){
	if(document.getElementById("h0_sb_checkbox").checked==false){
		document.getElementById('h0_sb_input').focus();
	}
	//alert("changed");
}

function searchBarSubmit(){
	$('#h0_main').on('submit', function(e) {
		e.preventDefault();
	});
}

function searchbarClicked(){//fires after checkbox changes state
	if(document.getElementById("h0_sb_checkbox").checked==true){
		document.getElementById("h0_menu_checkbox").checked = false;
		document.getElementById("h0_sb_button_img").src = "images/searchMagnifyingGlassGreen.png";
	}
	else{
		document.getElementById("h0_sb_button_img").src = "images/searchMagnifyingGlassYellow.png";
	}
}

function menuClicked(){//fires after checkbox changes state
	if(document.getElementById("h0_menu_checkbox").checked==true){
		document.getElementById("h0_sb_checkbox").checked = false;
		document.getElementById("h0_sb_button_img").src = "images/searchMagnifyingGlassYellow.png";
	}
}
/** /
$(document).click(function() {alert("yoyoyo");
	if(document.getElementById("h0_sb_checkbox").checked==true)
		alert("true");
	else
		alert("false");
});
$("h0_sb_div").click(function(e) {alert("yeyeye");
    e.stopPropagation(); // This is the preferred method.
    return false;        // This should not be used unless you do not want
                         // any click events registering inside the div
});
/**/


/*Do header w/o js:
1. Do titles, they can really be whatever
2. copy/paste this into the end of header_form:

<a id="h0b10" class="h0_button right" href="javascript:changeMenu();">&#9776;</a><a 
id="h0b1" class="h0_button h0_right" href="javascipt:changeTerminal();">[>_]</a><a 
id="h0b2" class="h0_button h0_left" href="illuminatiSite.html">Home</a><a 
id="h0b3" class="h0_button h0_left" href="aboutPage.html">About</a><a 
id="h0b4" class="h0_button h0_left" href="notepadPage.html">Notepad</a><a 
id="h0b5" class="h0_button h0_right" href="musicPage.html">Music</a><a 
id="h0b6" class="h0_button h0_left" href="colorPage.html">Purple</a><a 
id="h0b7" class="h0_button h0_left" href="colorPage2.html">2 Color Testing</a><a 
id="h0b8" class="h0_button h0_left" href="colorPage3.html">3 Color Testing</a><a 
id="h0b9" class="h0_button h0_left" href="encryptionTestingPage.html">Encryption</a>

*/

