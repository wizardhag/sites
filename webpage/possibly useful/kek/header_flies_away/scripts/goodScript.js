

function randAd(){
	var ad = parseInt(String(Math.random()*7));
	var adLitt=[ ["fakeAds/bottomAd1.png", "http://i.imgur.com/WnKoFsE.png"],
				 ["fakeAds/bottomAd2.jpg", "http://i.imgur.com/frgOnVX.jpg"],
				 ["fakeAds/bottomAd3.gif", "http://i.imgur.com/MYR7Sti.jpg"],
				 ["fakeAds/bottomAd4.png", "http://i.imgur.com/iPA51Rz.jpg"],
				 ["fakeAds/bottomAd5.gif", "http://i.imgur.com/AuCA4rx.png"],
				 ["fakeAds/bottomAd6.png", "http://i.imgur.com/bDyHPgg.gifv"],
				 ["fakeAds/bottomAd7.gif", "http://imgur.com"] ];

	document.getElementById("test_output").innerHTML = adLitt[ad][0]+"<br>"+adLitt[ad][1];
	document.getElementById("bottom_ad").href = adLitt[ad][1];
	document.getElementById("bottom_ad_image").src = adLitt[ad][0];
}






