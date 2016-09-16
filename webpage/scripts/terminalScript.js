ss/**
 * Written by John Claassen
 * 
 */

var beginning = "> ";
var width = "93%";
var myWindow = {};
var winIndex = [];


function openWin(index, location, here, terminal)
{
	if(myWindow[index]==null){
		if(here==null || here==false){
			here="_blank";
			winIndex[winIndex.length]=index;
		}
		else if(here==true){
			here="_parent";
		}

		if(terminal==true){
			myWindow[index] = window.open("terminal.html", here, "width=600, height=300");
		}
		else{
			myWindow[index] = window.open(location, here);
		}
	}
	else
		print_("<br>A window at this id already exists");
}

function closeWin(index)
{
	if(myWindow[index]!=null)
		myWindow[index].close();
	else
		if(index=="0")
			print_("<br>Nothing to close");
		else
			print_("<br>Incorrect index");
}

function getWinInds()
{
	println("");
	for(var c=0;c<winIndex.length;c++){
		println(winIndex[c]);//+" "+winIndex[c].location);
	}
}


function changeTerminal()
{
	if(document.getElementById("terminal_window").style.display=="none"){
		document.getElementById("terminal_window").style.display = "initial";
		//document.getElementById("hb_sp1").style.display = "initial";
		//document.getElementById("hb_sp2").style.display = "initial";
	}
	else{
		document.getElementById("terminal_window").style.display = "none";
		//document.getElementById("hb_sp1").style.display = "none";
		//document.getElementById("hb_sp2").style.display = "none";
	}
	scrollTerminal();
	giveTerminalFocus();
}

function changeLevel()
{
	if(beginning=="> "){
		width="90%";
		printer("inline", "==> ");
		beginning="==> ";
	}
	else if("==> "==beginning){
		width="93%";
		printer("inline", "> ");
		beginning="> ";
	}
	giveTerminalFocus();
	
}

function changeLevelOnce()
{
	
}


function printer(display, s)
{
	var inputHTML = "<input id=\"terminal_input\" type=\"text\" autocomplete=\"off\" style=\"display:"+display+";\">";
	var inner = document.getElementById("terminal_text").innerHTML;
	var loc = inner.indexOf("<input id=\"terminal_input\"");
	inner = inner.substring(0, loc);
	
	if(inner.charAt(inner.length-5)=='&' && inner.charAt(inner.length-4)=='g' && inner.charAt(inner.length-3)=='t' 
		&& inner.charAt(inner.length-2)==';' && inner.charAt(inner.length-1)==' '){
		inner = inner.substring(0, inner.length-(beginning.length+3));
	}
	//alert(inner+s);
	document.getElementById("terminal_text").innerHTML = inner + s + inputHTML;
	var theWidth = width;
	document.getElementById("terminal_input").style.width=theWidth;
	scrollTerminal();
}

function print(s)
{
	printer("inline", s+"<br>"+beginning);
}

function print_(s)
{
	printer("none", s);
}

function println(s)
{
	printer("none", s+"<br>");
}


function processInput()
{
	$('#terminal').on('submit', function(e) {
		e.preventDefault();
	});
	
	var input = document.getElementById("terminal_input").value;
	input = sanitize(input);
	//print_(beginning+input);
	//processCommand(input);
	//print("");
	giveTerminalFocus();
	alert("hi:"+input+":");
}


function clearTerminal()
{
	document.getElementById("terminal_text").innerHTML = beginning
		+"<input id=\"terminal_input\" type=\"text\" autocomplete=\"off\" style=\"display:inline\">";
}

function scrollTerminal()
{
	var tester = document.getElementById("terminal");
	tester.scrollTop = tester.scrollHeight;
}

function giveTerminalFocus()
{
	document.getElementById("terminal_input").focus();
}

/**/
function sanitize(s)
{
	while(s.indexOf(">")!=-1 && s.indexOf("<")!=-1){
		s = s.replace(">", "&#062;").replace("<", "&#060;");
	}
	return s;
}

function processCommand(s)
{
	var len=s.length;
	
	var allSpaces=true;
	for(var c=0;c<len;c++){//test if entirely strings
		if(s.charAt(c)!=" "){
			allSpaces=false;
			//break;
		}
	}
	if(!allSpaces && len!=0){
		//pre-trim & pre-lowercase
		if(s.indexOf("print ")==0){
			print("<br>"+s.substring(6, s.length));
		}
		else{
			s=s.trim();//with trim, pre-lowercase
			
			if(s.substring(0,4).toLowerCase()=="open"){//s.indexOf("open")==0){
				processOpen(s);
				print("");
			}
			else if(s.substring(0,5).toLowerCase()=="close"){//s.indexOf("close")==0){
				if(s.toLowerCase()=="closeall"){
					for(var c=0;c<winIndex.length;c++){
						closeWin(winIndex[c]);
					}
				}
				else{
					if(s.length>6)
						closeWin(s.substring(6,s.length));
					else
						closeWin("0");
				}
				print("");
			}
			else{
				s=s.toLowerCase();//with trim & lowercase
				
				if(s=="exit"){
					print("");
					if(document.getElementById("terminal_window")!=null){//(window.top == window.self){
						clearTerminal();
						changeTerminal();alert("1");
					}else{
						this.window.close();alert("2");
					}
					giveTerminalFocus();
				}
				else if(s=="clear"){
					clearTerminal();
				}
				else if(s.indexOf("get ")==0){
					processGet(s.substring(4,s.length));
					print("");
				}
				else if(s.indexOf("help")==0){
					processHelp(s.substring(4,s.length));
				}
				else if(s.indexOf("==>")==0){
					changeLevel();
					//processCommand(s.substring(3, s.length));
					return false;
				}
				else{
					print("");
				}
			}
		}
	}
	else
		print(beginning.substring(0,beginning.length-1)+">");
	
	return true;/**/
}

function processOpen(s)
{
	if(s.length<=5)
		openWin("0", null, null, true);
	else{
		s=s.substring(5, s.length);
		if(s.indexOf(" ")!=-1){
			if(s.substring(s.length-4,s.length).toLowerCase()=="here"){//s.indexOf("here")==s.length-
				openWin(s.substring(0,s.indexOf(" ")), s.substring(s.indexOf(" "),s.length-4), true, false);
			}
			else{
				openWin(s.substring(0,s.indexOf(" ")), s.substring(s.indexOf(" "),s.length), false, false);
			}
		}
		else{
			openWin(s, null, null, true);
		}
	}
}

function processGet(s)
{
	if(s.indexOf("index ")==0){
		s=s.substring(6,s.length).trim();
		if(s=="all")
			getWinInds();
		else{
			if(s.length==0)
				s="0";
			
			if(myWindow[s]!=null)
				print_("<br>"+myWindow[s].location);
			else
				print_("<br>Incorrect index");
		}
	}
	else{
		print_("<br>Unrecognized command: \""+s+"\"");
	}
}

function processHelp(s)
{
	s=s.trim();
	println("");
	
	if(s.length==0){
		println("help [command]<br>&nbsp;&nbsp;Displays how to use [command] (doesn't work yet)<br>");
		println("exit<br>&nbsp;&nbsp;Closes the terminal<br>");
		println("clear<br>&nbsp;&nbsp;Clears out all commands and output from the terminal<br>");
		println("print [words]<br>&nbsp;&nbsp;Prints out everything after the word 'print'<br>");
		println("open [id] [location] \"here\"<br>&nbsp;&nbsp;Opens window with [id] at [location], in the current frame if \"here\" is included<br>");
		println("close [id]<br>&nbsp;&nbsp;Closes window opened with [id]<br>");
		println("closeall<br>&nbsp;&nbsp;Closes all windows opened by this session<br>");
		println("==><br>&nbsp;&nbsp;Gives your commands root user access<br>");
		println("get \"index [id]\"<br>&nbsp;&nbsp;Too much to explain briefly, type 'help get' for info<br>");//update this
		print_("save [slot]<br>&nbsp;&nbsp;Undefined as of yet<br>");
	}
	else{
		if(s=="help"){
			println("help [command]");
			println("&nbsp;&nbsp;Displays how to use every command.");
			println("<br>[command]: Displays more in-depth information about [command]");//add more
		}
		else if(s=="exit"){
			println("exit");
			println("&nbsp;&nbsp;Closes the terminal");
		}
		else if(s=="clear"){
			println("clear");
			println("&nbsp;&nbsp;Clears all text from the terminal");
		}
		else if(s=="print"){
			println("print [words]");
			println("&nbsp;&nbsp;Prints [words] on the next line");
			println("<br>[words]: Words to print");
		}
		else if(s=="open"){
			println("open [id] [location] \"here\"");
			println("&nbsp;&nbsp;Opens window with [id] at [location], in the current frame if \"here\" is included");
			println("<br>[id]: The id to assign to the window. The default id is 0");
			println("[location]: The location the window will be opened at. The default is to open another terminal");
			println("\"here\": If included, the window opens in the current frame");
		}
		else if(s=="close"){
			println("close");
			println("&nbsp;&nbsp;Closes window opened with [id]");
			println("<br>[id]: ID of window to close. The default id is 0");
		}
		else if(s=="closeall"){
			println("closeall");//finish this
			println("&nbsp;&nbsp;Closes all windows opened by this session");
		}
		else if(s=="==>"){
			println("==>");
			println("&nbsp;&nbsp;Gives your commands root user access");
		}
		else if(s=="get"){
			println("get \"index [id]\"");
			println("\"index\":");
			println("&nbsp;&nbsp;Prints the location of the window associated with [id]");
			println("<br>[id]: The id of the window whose location will be printed");
			/*println("");
			println("\"index\":");
			println("&nbsp;&nbsp;Prints the location of the window associated with [id]");
			println("<br>&nbsp;&nbsp;[id]: The id of the window whose location will be printed");*/
		}
		else if(s=="save"){
			println("save");
			println("&nbsp;&nbsp;Undefined so far");
		}
		else{
			println("Undefined command: '"+s+"'");
		}
	}
	print("");
}





