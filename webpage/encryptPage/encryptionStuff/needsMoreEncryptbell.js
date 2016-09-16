/*Useful:
  int to char: String.fromCharCode(10)
  char to int: "\n".charCodeAt(0);
 */
function encryptThree(clearText, sharedKey)//String clearText, int sharedKey
{
	var cypherText = "";
	var extra = "";
	//int[] cypherText = new int[clearText.length];
	var mod = 256;
	var gen = 152;

	var thirdNum = 7;
	
	var x = sharedKey % mod;
	while(x==0 || x==gen-1)
		x = (x+1) % mod;

	var length = clearText.length;

	for(var c=0; c<length; c++)
	{
		/*Stage Two:*
		x = (int)(Math.pow(gen, x+c) % mod);
		while(x==0 || x==gen-1)
			x = (x+1) % mod;
		/*This just makes x constantly change in crazy ways hopefully*/
		
		extra = gen;//these three lines do exponents until I have wifi to look up how to do them correctly
		for(var n=thirdNum-2; n>0; n++)
			extra*=extra;
		
		cypherText += (/*Math.pow(gen, thirdNum)*/extra%mod)*clearText.charCodeAt(c) % mod;
	}

	return cypherText;
}

function decryptThree(cypherText, sharedKey)
{
	var clearText = "";
	var mod = 256;
	var gen = 152;
	
	var thirdNum = 7;

	var x = sharedKey % mod;
	while(x==0 || x==gen-1)
		x = (x+1) % mod;
	
	var length = cypherText.length;

	for(var c=0; c<length; c++)
	{
		/*Stage Two:*
		x = (int)(Math.pow(gen, x+c) % mod);
		while(x==0 || x==gen-1)
			x = (x+1) % mod;
		/*This just makes x constantly change in crazy ways hopefully*/

		extra = gen;//these three lines do exponents until I have wifi to look up how to do them correctly
		for(var n=(mod-1-thirdNum)-2; n>0; n++)
			extra*=extra;
		
		var z = /*Math.pow(gen, mod-1-x)*/extra % mod;

		clearText += (cypherText.charCodeAt(c) * z) % mod;
	}

	return clearText;
}




