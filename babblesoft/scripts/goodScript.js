

function randAd(){
	var ad = parseInt(String(Math.random()*7));
	var adLitt=[ ["fakeAds/bottomAd1.png", "http://i.imgur.com/WnKoFsE.png"],
				 ["fakeAds/bottomAd2.jpg", "http://i.imgur.com/frgOnVX.jpg"],
				 ["fakeAds/bottomAd3.gif", "http://i.imgur.com/MYR7Sti.jpg"],
				 ["fakeAds/bottomAd4.png", "http://i.imgur.com/iPA51Rz.jpg"],
				 ["fakeAds/bottomAd5.gif", "http://i.imgur.com/AuCA4rx.png"],
				 ["fakeAds/bottomAd6.png", "http://i.imgur.com/bDyHPgg.gifv"],
				 ["fakeAds/bottomAd7.gif", "http://imgur.com"] ];

	document.getElementById("bottom_ad").href = adLitt[ad][1];
	document.getElementById("bottom_ad_image").src = "http://i.imgur.com/bDyHPgg.gifv";//adLitt[ad][0];/**/
}


function showWindow(indexOfNewsSlider, windNum)
{
	var leftInit = document.getElementsByClassName("slideNews_windowSlider")[indexOfNewsSlider].style.left;
	leftInit = leftInit.substring(0,leftInit.indexOf("%"));
	leftInit/=-100;
	changeWindow(indexOfNewsSlider, windNum, leftInit);
}
function shiftWindow(indexOfNewsSlider)
{
	var leftInit = document.getElementsByClassName("slideNews_windowSlider")[indexOfNewsSlider].style.left;
	leftInit = leftInit.substring(0,leftInit.indexOf("%"));
	leftInit/=-100;
	//alert(leftInit);
	if(leftInit+1<=5){
		changeWindow(indexOfNewsSlider, leftInit+2, leftInit);
	}
	else{
		changeWindow(indexOfNewsSlider, 1, leftInit);
	}
}
function changeWindow(indexOfNewsSlider, windNum, leftInit)
{
	document.getElementsByClassName("slideNews_menuText")[leftInit].style.background = "rgba(34,34,34,.6)";
	
	document.getElementsByClassName("slideNews_windowSlider")[indexOfNewsSlider].style.left = (-100*(windNum*1-1))+"%";
	
	document.getElementsByClassName("slideNews_menuText")[windNum-1].style.background = "rgba(34,34,34,.95)";
}
var timer = null;

function showWindow2(indexOfNewsSlider, windNum)
{
	var leftInit = document.getElementsByClassName("slideNews2_slider")[indexOfNewsSlider].style.left;//alert(leftInit);
	leftInit = leftInit.substring(0,leftInit.indexOf("%"));//alert(leftInit);
	leftInit/=-100;
	//alert(leftInit);
	changeWindow2(indexOfNewsSlider, windNum, leftInit);
}
function shiftWindow2(indexOfNewsSlider)
{
	var leftInit = document.getElementsByClassName("slideNews2_slider")[indexOfNewsSlider].style.left;
	leftInit = leftInit.substring(0,leftInit.indexOf("%"));
	leftInit/=-100;
	//alert(leftInit);
	if(leftInit+1<3){
		changeWindow2(indexOfNewsSlider, leftInit+2, leftInit);
	}
	else{
		changeWindow2(indexOfNewsSlider, 1, leftInit);
	}
}
function changeWindow2(indexOfNewsSlider, windNum, leftInit)
{
	clearTimeout(timer);
	timer = setTimeout(function(){shiftWindow2(0);},10000);
	
	document.getElementsByClassName("slideNews2_dot")[leftInit].style.background = "#66ff66";
	
	document.getElementsByClassName("slideNews2_slider")[indexOfNewsSlider].style.left = (-100*(windNum*1-1))+"%";
	
	document.getElementsByClassName("slideNews2_dot")[windNum-1].style.background = "#11cc11";
}

