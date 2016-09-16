//java version:
class PrimitiveRootCalculator()
{
	private int[] primRoots(int theNum)
	{
		if (!isPrime(theNum))
		{
			System.out.println("Sorry, the number must be prime.");
			return;//return new int[1];
		}

		int o = 1;
		int k;
		int[] output = new int[theNum];
		int z = 0;

		for(int c=2; c<theNum; c++)
		{
			k = (int)Math.pow(c, o);
			k %= theNum;
			while(k > 1)
			{
				o++;
				k *= c;
				k %= theNum;
			}
			if (o == (theNum - 1))
			{
				output[z] = c;
				z++;
			}
			o = 1;
		}
		
		return output[];
	}

	private boolean isPrime(int x)
	{
		if(x%2==0)
			return false;
		for(int c=3; c*2<=x; c+=2)
			if(x%c==0)
				return false;
		
		return true;
	}
}




