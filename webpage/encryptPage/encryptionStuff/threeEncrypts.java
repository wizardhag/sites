
/**
 * TODO:
 * - mod and gen are gross, fix that
 *
 *
 */

//////////////////////////////////////////////////////////////////////
//Stages One and Two: Basic Encryption and Changing Encryption
//////////////////////////////////////////////////////////////////////

public String encryptTwo(String input)//, int sharedKey)
{
	int[] clearText = stringToInt(input);
	
	int[] cypherText = new int[clearText.length];
	int mod = 223;
	int gen = 91;
	int x = sharedKey;
	int length = clearText.length;
	
	for(int c=0; c<length; c++){
		/*Stage Two:* x = (int)(Math.pow(gen, x+c) % mod);/*This just makes x constantly change in crazy ways (hopefully)*/
		cypherText[c] = (int)((clearText[c] + Math.pow(gen, x)) % mod) + 32;
	}
	
	return intToString(cypherText[]);
}

public String decryptTwo(String input)//, int sharedKey)
{
	int[] cypherText = stringToInt(input);
	
	int[] clearText = new int[cypherText.length];
	int mod = 223;
	int gen = 91;
	int x = sharedKey;
	int length = cypherText.length;
	
	for(int c=0; c<length; c++){
		/*Stage Two:* x = (int)(Math.pow(gen, x+c) % mod);/*This just makes x constantly change in crazy ways (hopefully)*/
		clearText[c] = mod - (Math.abs((cypherText[c] - 32) - Math.pow(gen, x)) % mod);
	}
	
	return intToString(clearText[]);
}


//////////////////////////////////////////////////////////////////////
//Stage Three: Changing Lengths
//////////////////////////////////////////////////////////////////////

public void arrayAdd(int[] arr, int value)
{
	int[] temp = new int[arr.length+1];
	System.arraycopy(arr, 0, temp, 0, arr.length-1);
	
	arr = new int[temp.length];
	System.arraycopy(temp, 0, arr, 0, arr.length-1);
	
	arr[arr.length-1] = value;
}

//Scene 2:
public int[] arrayAdd(int[] arr, int value)
{
	int[] temp = new int[arr.length+1];
	System.arraycopy(arr, 0, temp, 0, arr.length-1);
	
	arr = new int[temp.length];
	System.arraycopy(temp, 0, arr, 0, arr.length-1);
	arr[arr.length-1] = value;
	
	return arr;
}/**/

//with z:
public String encryptThree(String input)//, int sharedKey)
{
	int[] clearText = stringToInt(input);
	
	int[] cypherText = new int[0];
	int mod = 223;
	int gen = 91;
	int x = sharedKey;
	int y = (int)(Math.pow(2, sharedKey) % 3);//--
	int z = (int)(Math.pow(2, y*(c+1) % 3);
	int length = clearText.length;
	
	for(int c=0; c<length; c++){
		x = (int)(Math.pow(gen, x*(c+1)) % mod);//Stage Two
		y = (int)(Math.pow(2, y*(c+1) % 3);//Stage Three
		
		if(y==z)
			x = (x-sharedKey) % mod;
		
		for(int n=0; n<=y; n++){
			if(y == z)
				x = (x+sharedKey) % mod;

			z = (int)(Math.pow(2, y*(c+1) % 3);

			int f = (int)( (clearText[c] + Math.pow(gen, x)) * (z/y) );
			arrayAdd(cypherText, (f % mod) + 32);
		}
	}
	
	return intToString(cypherText[]);
}

//without z:
public String encryptThree(String input)//, int sharedKey)
{
	int[] clearText = stringToInt(input);
	
	int[] cypherText = new int[0];
	int mod = 223;
	int gen = 91;
	int x = sharedKey;
	int y = (int)(Math.pow(2, sharedKey) % 3);
	int length = clearText.length;
	
	for(int c=0; c<length; c++){
		x = (int)(Math.pow(gen, x*(c+1)) % mod);//Stage Two
		y = (int)(Math.pow(2, y*(c+1) % 3);//Stage Three
		
		for(int n=0; n<=y; n++){
			int f = (int)( (clearText[c]+Math.pow(gen, x))*((n+1)/(y+1)) );
			arrayAdd(cypherText, (f % mod) + 32);
		}
	}
	
	return intToString(cypherText[]);
}



