/**
 * Written by John Claassen
 * 
 */

/**
 * @var headerList
 * Used to create all the buttons that will appear in the header. Items are in order of
 * importance, meaning that items lower in the array will disappear before items higher
 * in the array when the page is resized. Items in position 3 automatically get top 
 * preference.
 * 
 * Note: for spaces in the label, use &nbsp;
 * 
 * 	button label		link							title(temporary)		position
 */
var headerList =
[   //["[>_]", 			"javascript:changeTerminal();",	"terminal",				2	],
//	["Home",			"illuminatiSite.html",			"The Illuminati Know",	1	],
/**/["&#x21B5;",		"javascript:print('printed');",	"&#x21B5;",				2	],
	["==>",				"javascript:changeLevel();",	"==>",					2	],
	["About", 			"aboutPage.html",				"About My Site",		1	],
	["Trajectory&nbsp;Calculator","trajectoryCalculatorPage.html","Trajectory Calculator",1],
//	["Bookmarks",		"bookmarksPage.html",			"Bookmarks",			1	],
//	["Notepad",			"notepadPage.html",				"Notepad",				1	],
	["Dice",			"dicePage.html",				"Dice",					1	],
	["References",		"referencePage.html",			"References",			1	],
	["Purple",			"colorPage.html",				"Purple Theme",			1	],
//	["Music", 			"musicPage.html",				"My Music",				1	],
//	["Encryption",		"encryptionTestingPage.html",	"Encryption Testing",	1	],
	["Color&nbsp;2",	"colorPage2.html",				"2 Color Testing",		1	],
	["Color&nbsp;3", 	"colorPage3.html",				"3 Color Testing",		1	] ];
var home = false;

/**
 * Changes the header when scrolling:
 */
function doTheHeaderScrollThingP(){
	headerScrollResizeP(true);
}

/**
 * Changes the header when resizing the page:
 */
function doTheHeaderResizeThingP(){
	headerScrollResizeP(false);
}

function headerScrollResizeP(scrolling){
	var scrollNum = document.getElementById("body_ID").scrollTop;
	/**/
	if(scrolling==true)
		document.getElementById("header_main").style="";
	else
		document.getElementById("header_main").style="-webkit-transition:height .25s;-moz-transition:height .25s;-o-transition:height .25s;";
	/**/
	if(window.innerWidth>600){
		if(scrolling==false)
			document.getElementById("header-p").style.height = 126;
		
		if(scrollNum<90){
			var width = window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth;

			//document.getElementById("header").className = "header_unattached";
			document.getElementById("header_main").style.height = 126-scrollNum;
			//document.getElementById("h0_div").style.position="relative";
			//document.getElementById("h0_div").style.height=126;/**/
			document.getElementById("h0_pic_link").style.width = 142-(scrollNum*(29/45));
			//document.getElementById("h0_pic_link").style.height = 126-scrollNum;
			//document.getElementById("h0_pic_link").style = "display:inline";
			if(home){
				document.getElementById("h0_pic").className = "h0b_colors-p";// header_pic_full";
			}
		}
		else{
			//document.getElementById("header").className = "header_attached";
			document.getElementById("header_main").style.height = 36;
			//document.getElementById("h0_div").style.position="fixed";
			//document.getElementById("h0_div").style.height=36;/**/
			document.getElementById("h0_pic_link").style.width = 84;
			//document.getElementById("h0_pic_link").style.height = 36;
			//document.getElementById("h0_pic_link").style = "display:none";
			if(home){
				document.getElementById("h0_pic").className = "h0_selected_color-p";//"header_pic_button";
			}
		}
	}
	else{
		if(scrolling==false)
			document.getElementById("header").style.height = 36;
		document.getElementById("header_main").style.height = 36;
	}
}

/**
 * Injects header buttons:
 */
function headerListStuffP(){
if(true)
{
	var newHTML = "";var newMenuHTML = "";
	var newFrontHTML = "";var newMenuEndHTML = "";
	var changeColor = "";
	var first = 3;//the first one in the code already is 2
	var doTheRest = true;
	var temp1 = "";
	var temp2 = "";
	
	var s=window.location.pathname;
	s = s.substring(s.indexOf("/webpage/")+9);
	if(s=="illuminatiSite.html"){
		home=true;//document.getElementById("header_pic").style.backgroundColor = "#414444";
		document.getElementById("title").innerHTML = "The Illuminati Know";
	}
	var c=0;
	var len = headerList.length;
	for(; c<len; c++){
		temp1 = "<a id=\"hb"+(c+first)+"\" class=\"";
		
		if(s==headerList[c][1]){
			temp2 = "\" href=\""+headerList[c][1]+"\" style=\"background-color:white\" title=\""
				+headerList[c][2]+"\">"+headerList[c][0]+"</a>";
			document.getElementById("title").innerHTML = headerList[c][2];
		}
		else{
			temp2 = "\" href=\""+headerList[c][1]+"\" title=\""+headerList[c][2]+"\">"+headerList[c][0]+"</a>";
		}
		
		if(headerList[c][3]==1){//left align
			newHTML += temp1+"h0_button-p h0b_colors-p h0_left"+temp2;
			newMenuHTML += temp1+"h0_menu_button-p h0b_colors-p"+temp2;
		}
		else if(headerList[c][3]==2){//right align
			newHTML += temp1+"h0_button-p h0b_colors-p h0_right"+temp2;
			newMenuEndHTML += temp1+"h0_menu_button-p h0b_colors-p"+temp2;
		}
		else if(headerList[c][3]==3){//important right align
			newFrontHTML += temp1+"h0_button-p h0b_colors-p h0_right"+temp2;
			newMenuEndHTML += temp1+"h0_menu_button-p h0b_colors-p"+temp2;
		}
		else{
			alert("wrongwrongwrongwrong");
		}
	}
	var spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	for(var n=c;n<40;n++)
		newHTML += "<a id=\"hb"+(n+first)+"\" class=\"h0_button-p h0_left\">"+spaces+"</a>";/**/

	document.getElementById("h0_array").innerHTML += newFrontHTML + newHTML;
	//document.getElementById("h0_menu").innerHTML = newMenuHTML + newMenuEndHTML;
}
	document.getElementById("hb3").style.display = "none";//terminal h0b
	document.getElementById("hb4").style.display = "none";//terminal h0b
//	document.getElementById("mhb3").style.display = "none";//terminal h0b
//	document.getElementById("mhb4").style.display = "none";//terminal h0b
	//changeTerminal();
	//changeTerminal();
}

function changeSearchbarFocusP(){
	if(document.getElementById("h0_sb_checkbox-p").checked==false){
		document.getElementById('h0_sb_input').focus();
	}
}
/** /
$(document).click(function() {alert("yoyoyo");
	//document.getElementById("h0_sb_checkbox").checked = false;
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
id="h0b6" class="h0_button h0_left" href="colored/colorPage.html">Purple</a><a 
id="h0b7" class="h0_button h0_left" href="colored/colorPage2.html">2 Color Testing</a><a 
id="h0b8" class="h0_button h0_left" href="colored/colorPage3.html">3 Color Testing</a><a 
id="h0b9" class="h0_button h0_left" href="encryptionTestingPage.html">Encryption</a>

*/

