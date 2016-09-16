/**
 * Written by John Claassen
 * 
 */

function print(s)//print() and println() are only useful for testing stuff
{
	document.getElementById("test").innerHTML += s;
	maybeScroll();
}
function println(s)
{
	document.getElementById("test").innerHTML += s+"<br>>";
	maybeScroll();
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
[   ["[>_]", 			"javascript:changeTerminal();",	"terminal",				2	],
	["Home",			"illuminatiSite.html",			"The Illuminati Know",	1	],
//	["About", 			"aboutPage.html",				"About My Site",		1	],
//	["Notepad",			"notepadPage.html",				"Notepad",				1	],
//	["Dice",			"dicePage.html",				"Dice",					1	],
	["References",		"referencePage.html",			"References",			1	],
	["Purple",			"experimental/colorPage.html",	"Purple",				1	],
	["Color2", 			"experimental/colorPage2.html",	"2 Color Testing",		1	],
	["Color3", 			"experimental/colorPage3.html",	"3 Color Testing",		1	],
	["Music", 			"musicPage.html",				"My Music",				1	],
//	["Encryption",		"encryptionTestingPage.html",	"Encryption Testing",	1	],
    ["&#9776;",			"javascript:changeMenu();",		"Menu",					3	] ];
var visible = headerList.length;

function dropDownMenu(){
	println("dropped!");
	alert("dropped!");
}

function doTheHeaderThing(){//Changes the header when scrolling
	if(document.getElementById("body_ID").scrollTop<90){
		var scrollNum = document.getElementById("body_ID").scrollTop;
		var width = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
		
		document.getElementById("header_grayBar").style.top = 90-scrollNum;
		document.getElementById("header_pic").style.height = 128-(scrollNum*(29/45));
		document.getElementById("header_pic_div").style.height = 128-scrollNum;
		//document.getElementById("header_array").style.top = 90-scrollNum;
	}
	else{
		document.getElementById("header_grayBar").style.top = 0;
		document.getElementById("header_pic").style.height = 70;
		document.getElementById("header_pic_div").style.height = 38;
		//document.getElementById("header_array").style.top = 0;
	}
	/*if(document.getElementById("header_pic").style.height<=0){
		document.getElementById("header_pic").style.height=0;
		document.getElementById("header_array").style.left=document.getElementById("header_pic").style.width;
	}*/
}

/**
 * Creation of things:
 */
function headerListStuff(s){//implements headerList
	//changeTerminal();
	if(true)
	{
		var len = headerList.length;
		var newHTML = "";
		var front = "";
		
		for(var c=1; c<=len; c++){
						//  <a id= "hb  1   " class= "header_button left "></a>
			
			if(headerList[c-1][3]==1){
				newHTML += "<a id=\"hb"+c+"\" class=\"header_button left\"></a>";
			}
			else if(headerList[c-1][3]==2){
				newHTML += "<a id=\"hb"+c+"\" class=\"header_button right\"></a>";
			}
			else if(headerList[c-1][3]==3){
				front += "<a id=\"hb"+c+"\" class=\"header_button right\"></a>";
			}
			else{
				alert("wrongwrongwrongwrong");
			}
			
		}
		document.getElementById("header_form").innerHTML += front + newHTML;
	
		s = s.substring(s.indexOf("/webpage/")+9);

		for(var c=1; c<=len; c++)
		{
			document.getElementById("hb"+c).innerHTML = headerList[c-1][0];
			document.getElementById("hb"+c).href = headerList[c-1][1];


			if(s==headerList[c-1][1]){
				document.getElementById("hb"+c).style.backgroundColor = "#414444";
				document.getElementById("hb"+c).href = "";
				document.getElementById("title").innerHTML = headerList[c-1][2];
			}/**/
		}
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

