/**
 * Written by John Claassen
 * 
 */

function print(s)//print() and println() are only useful for testing stuff
{
	document.getElementById("terminal_output").innerHTML += s;
	maybeScroll();
}
function println(s)
{
	document.getElementById("terminal_output").innerHTML += s+"<br>> ";
	maybeScroll();
}
function wipeTerminal()
{
	document.getElementById("terminal_output").innerHTML = "";
}
function maybeScroll(){
	var tester = document.getElementById("terminal");
	tester.scrollTop = tester.scrollHeight;
}

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
	["Home",			"illuminatiSite.html",			"The Illuminati Know",	1	],
	["About", 			"aboutPage.html",				"About My Site",		1	],
	["Notepad",			"notepadPage.html",				"Notepad",				1	],
	["Dice",			"dicePage.html",				"Dice",					1	],
	["References",		"referencePage.html",			"References",			1	],
	["Purple",			"experimental/colorPage.html",	"Purple Theme",			1	],
	["Music", 			"musicPage.html",				"My Music",				1	],
	["Encryption",		"encryptionTestingPage.html",	"Encryption Testing",	1	],
	["Color2", 			"experimental/colorPage2.html",	"2 Color Testing",		1	],
	["Color3", 			"experimental/colorPage3.html",	"3 Color Testing",		1	],
	["",				"",								"Spacer",				4	] ];
var previousPosition = 0;
var home = false;

function dropDownMenu(){
	println("dropped!");
	alert("dropped!");
}

function doTheHeaderThing(){//Changes the header when scrolling
	var scrollNum = document.getElementById("body_ID").scrollTop;
	/** /
	var change = scrollNum-previousPosition;
	previousPosition=scrollNum;
	var dist=change/7;
	dist = parseInt(dist);
	dist = dist>=50 ? 50 : (dist<0 ? 0 : dist);
	if(dist==50)
		println("woah");
	//println(change+" "+(90-dist));
	/** /
	if(scrollNum<(90-dist)){/**/
	document.getElementById("testing456").style.left = 200+scrollNum;
	document.getElementById("testing789").style.right = -850+scrollNum;
	document.getElementById("testing789").style.bottom = -850+scrollNum;
	if(scrollNum<90){/**/
		var width = window.innerWidth
			|| document.documentElement.clientWidth//498, 264, 234
			|| document.body.clientWidth;
		
		//document.getElementById("header").className = "header_unattached";
		document.getElementById("header").style.height = 126-scrollNum;
		document.getElementById("header_pic").style.width = 142-(scrollNum*(29/45));
		//if(home){
			//document.getElementById("header_pic").className = "hb_colors header_pic_full";
		//}
	}
	else{
		//document.getElementById("header").className = "header_attached";
		document.getElementById("header").style.height = 36;
		document.getElementById("header_pic").style.width = 84;
		//if(home){
			//document.getElementById("header_pic").className = "header_pic_button";
		//}
	}
}

/**
 * Creation of things:
 */
function headerListStuff(){//implements headerList
	//changeTerminal();
if(true)
{
	var newHTML = "";
	var newFrontHTML = "";
	var changeColor = "";
	var first = 2;//the first one in the code already is 2
	var doTheRest = true;
	
	var s=window.location.pathname;
	s = s.substring(s.indexOf("/webpage/")+9);
	if(s=="illuminatiSite.html"){
		home=true;//document.getElementById("header_pic").style.backgroundColor = "#414444";
		document.getElementById("title").innerHTML = "The Illuminati Know";
	}
	
	var len = headerList.length;
	for(var c=0; c<len; c++){
		if(s==headerList[c][1]){
			changeColor=" style=\"background-color:#414444\"";
			document.getElementById("title").innerHTML = headerList[c][2];
		}
		else{
			changeColor="";
		}

		//  <a id="hb1" class="header_button left" href="illuminatiSite.html" style="background-color:#414444">Home</a>
		if(headerList[c][3]==1){//left align
			newHTML += "<a id=\"hb"+(c+first)+"\" class=\"header_button hb_colors left\" href=\""
				+headerList[c][1]+"\""+changeColor+" title=\""+headerList[c][2]+"\">"+headerList[c][0]+"</a>";
		}
		else if(headerList[c][3]==2){//right align
			newHTML += "<a id=\"hb"+(c+first)+"\" class=\"header_button hb_colors right\" href=\""
				+headerList[c][1]+"\""+changeColor+" title=\""+headerList[c][2]+"\">"+headerList[c][0]+"</a>";
		}
		else if(headerList[c][3]==3){//important right align
			newFrontHTML += "<a id=\"hb"+(c+first)+"\" class=\"header_button hb_colors right\" href=\""
				+headerList[c][1]+"\""+changeColor+" title=\""+headerList[c][2]+"\">"+headerList[c][0]+"</a>";
		}
		else if(headerList[c][3]==4){//spacer button
			var spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			for(var n=c;n<25;n++)
				newHTML += "<a id=\"hb"+(n+first)+"\" class=\"header_button left\">"+spaces+"</a>";
		}
		else{
			alert("wrongwrongwrongwrong");
		}
	}
	document.getElementById("header_array").innerHTML += newFrontHTML + newHTML;
}
}

function changeTerminal(){
	if(document.getElementById("terminal").style.display=="none")
		document.getElementById("terminal").style.display = "initial";
	else
		document.getElementById("terminal").style.display = "none";
		
	return false;
}

function changeMenu(){
	alert("menu!");
}

/*Do header w/o js:
1. Do titles, they can really be whatever
2. copy/paste this into the end of header_form:

<a id="hb10" class="header_button right" href="javascript:changeMenu();">&#9776;</a><a 
id="hb1" class="header_button right" href="javascipt:changeTerminal();">[>_]</a><a 
id="hb2" class="header_button left" href="illuminatiSite.html">Home</a><a 
id="hb3" class="header_button left" href="aboutPage.html">About</a><a 
id="hb4" class="header_button left" href="notepadPage.html">Notepad</a><a 
id="hb5" class="header_button right" href="musicPage.html">Music</a><a 
id="hb6" class="header_button left" href="colored/colorPage.html">Purple</a><a 
id="hb7" class="header_button left" href="colored/colorPage2.html">2 Color Testing</a><a 
id="hb8" class="header_button left" href="colored/colorPage3.html">3 Color Testing</a><a 
id="hb9" class="header_button left" href="encryptionTestingPage.html">Encryption</a>

*/

