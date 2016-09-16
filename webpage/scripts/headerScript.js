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
 * 																				positions
 * 	button label		link							title(temporary)		bar	menu
 */
var headerList =//buttons per menu column: [ 3, 3, 3, 3 ]
[	["About", 			"aboutPage.html",				"About My Site",		1,	0	],
	["References",		"referencePage.html",			"References",			1,	2	],
	["Traffic&nbsp;Simulator","trafficSimulator.html",	"Traffic Simulator",	1,	1	],
	["Trajectory&nbsp;Calculator","trajectoryCalculatorPage.html","Trajectory Calculator",1,1],
	["Index", 			"../index.html",				"Index",				1,	2	],
	["Purple",			"colorPage.html",				"Purple Theme",			1,	2	],
//	["Color&nbsp;2",	"colorPage2.html",				"2 Color Testing",		1,	2	],
//	["Color&nbsp;3", 	"colorPage3.html",				"3 Color Testing",		1,	2	],
	["Bookmarks",		"bookmarksPage.html",			"Bookmarks",			1,	0	],
	["Music", 			"musicPage.html",				"My Music",				1,	3	],
	["Dice",			"dicePage.html",				"Dice",					1,	1	],
	["Encryption",		"encryptionTestingPage.html",	"Encryption Testing",	1,	3	],
	["Notepad",			"notepadPage.html",				"Notepad",				1,	3	]/** /,
	["&#x21B5;",		"javascript:print('printed');",	"&#x21B5;",				3,	3	],
	["==>",				"javascript:changeLevel();",	"==>",					3,	3	]/**/ ];
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
		document.getElementById("header_main").style="";
	else
		document.getElementById("header_main").style="-webkit-transition:height .25s;-moz-transition:height .25s;-o-transition:height .25s;";
	/**/
	if(window.innerWidth>600){
		if(scrolling==false)
			document.getElementById("header").style.height = 126;
		
		if(scrollNum<90){
			var width = window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth;

			document.getElementById("header_main").style.height = 126-scrollNum;//><op2
			//document.getElementById("h0_main").style.position="relative";
			//document.getElementById("h0_main").style.height=126;
			document.getElementById("h0_pic_link").style.width = 142-(scrollNum*(29/45));
			//document.getElementById("h0_pic_space").style.width = 142-(scrollNum*(29/45));
			//document.getElementById("h0_pic_link").style.height = 126-scrollNum;
			//document.getElementById("h0_pic_link").style = "display:inline";
			if(home){
				document.getElementById("h0_pic").className = "h0b_colors";// header_pic_full";
			}
		}
		else{
			document.getElementById("header_main").style.height = 36;//><op2
			//document.getElementById("h0_main").style.position="fixed";
			//document.getElementById("h0_main").style.height=36;
			document.getElementById("h0_pic_link").style.width = 84;
			//document.getElementById("h0_pic_space").style.width = 84;
			//document.getElementById("h0_pic_link").style.height = 36;
			//document.getElementById("h0_pic_link").style = "display:none";
			if(home){
				document.getElementById("h0_pic").className = "h0_selected_color";//"header_pic_button";
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
function headerListStuff(){
if(true)
{
	var newHTML = "";	var newFrontHTML = "";
	var newCol0HTML = "";var newCol1HTML = "";var newCol2HTML = "";var newCol3HTML = "";
	var first = 1;//the first index in the code already is 2
	var beginning = "";
	var ending = "";
	var thisMenuButton = "";
	
	var s=window.location.pathname;
	s = s.substring(s.indexOf("/webpage/")+9);
	if(s=="illuminatiSite.html"){
		home=true;//document.getElementById("header_pic").style.backgroundColor = "#414444";
		document.getElementById("title").innerHTML = "The Illuminati Know";
	}
	var c=0;
	var len = headerList.length;
	for(; c<len; c++){
		if(s==headerList[c][1]){//determines if it's this page or not
			beginning = "<a id=\"h0b-"+(c+first)+"\" class=\"h0_button h0_selected_color ";
			document.getElementById("title").innerHTML = headerList[c][2];
		}
		else{
			beginning = "<a id=\"h0b-"+(c+first)+"\" class=\"h0_button h0b_colors ";
		}
		
		ending = "\" href=\""+headerList[c][1]+"\" title=\""+headerList[c][2]+"\">"+headerList[c][0]+"</a>";
		
		switch(headerList[c][3]){
			case 1:
				newHTML += beginning+"h0_left"+ending;		break;
			case 2:
				newHTML += beginning+"h0_right"+ending;		break;
			case 3:
				newFrontHTML += beginning+"h0_right"+ending;break;
			default:
				alert("Wrong header array location: '"+headerList[c][3]+"'");
		}
		
		thisMenuButton = "<a id=\"h0mb-"+(c+first)+"\" class=\"h0_button h0m_button"+ending;
		switch(headerList[c][4]){
			case 0:
				newCol0HTML += thisMenuButton;break;
			case 1:
				newCol1HTML += thisMenuButton;break;
			case 2:
				newCol2HTML += thisMenuButton;break;
			case 3:
				newCol3HTML += thisMenuButton;break;
			default:
				alert("Wrong menu column: '"+headerList[c][4]+"'");
		}
	}
	var spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	for(var n=c;n<40;n++)
		newHTML += "<a id=\"hb"+(n+first)+"\" class=\"h0_button h0_left\">"+spaces+"</a>";

	document.getElementById("h0_array").innerHTML += newFrontHTML + newHTML;
	document.getElementById("h0m_col-0").innerHTML += newCol0HTML;
	document.getElementById("h0m_col-1").innerHTML += newCol1HTML;
	document.getElementById("h0m_col-2").innerHTML += newCol2HTML;
	document.getElementById("h0m_col-3").innerHTML += newCol3HTML;
}
	//changeTerminal();
}/**/


function changeSearchbarFocus(){
	if(document.getElementById("h0s_checkbox").checked==false){
		document.getElementById('h0s_input').focus();
	}
	//alert("changed");
}

function dontSubmitHeaderSearch(){
	$('#h0s_checkbox').on('submit', function(e) {
		e.preventDefault();
	});
}

function searchbarClicked(){//fires after checkbox changes state
	if(document.getElementById("h0s_checkbox").checked==true)
		document.getElementById("h0m_checkbox").checked = false;
}

function menuClicked(){//fires after checkbox changes state
	if(document.getElementById("h0m_checkbox").checked==true)
		document.getElementById("h0s_checkbox").checked = false;
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



