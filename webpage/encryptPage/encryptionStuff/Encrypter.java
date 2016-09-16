/**
 * Marcel 
 * John
 * Encrypto the Encrypter
 */

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JLabel;
import javax.swing.JToggleButton;

public class Encrypter
{
    final static boolean shouldFill = true;
    final static boolean shouldWeightX = true;
    final static boolean RIGHT_TO_LEFT = false;
    
    static JFrame frame = new JFrame();
    static JFrame answerFrame = new JFrame();
    
	static Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
	
	private static int publicKey;
	private static int privateKey;
	private static boolean stateBool;
	private static int modulo;
    
	public static void publicKeyBox(int generator, int privateNumber)
	{
		publicKey = publicKey(generator, modulo, privateNumber);
		
		String newPublicKey = "" + publicKey;
		
		answerFrame = new JFrame("Public Key");
		
		
		GridBagConstraints a = new GridBagConstraints();
		
		answerFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        answerFrame.setLocation((int) (screenSize.getWidth()/2),
        		(int) (screenSize.getHeight()/2));
        
       Container answerPane = answerFrame.getContentPane();
       answerPane.setLayout(new GridBagLayout());
       
        if (shouldFill) 
        {
        	//natural height, maximum width
        	//c.fill = GridBagConstraints.HORIZONTAL;
        	a.ipadx = 100;
        	a.ipady = 10;
        }
        
        if (shouldWeightX) 
        {
        	a.weightx = 0.5;
        }
        
        JLabel label = new JLabel("Public Key: ");
        a.fill = GridBagConstraints.HORIZONTAL;
        a.gridx = 0;
        a.gridy = 0;
        a.insets = new Insets(5,5,5,0);
        answerPane.add(label, a);
        
        JTextField answer = new JTextField(newPublicKey);
        a.gridx = 0;
        a.gridy = 1;
        a.insets = new Insets(5,5,8,5);
        answerPane.add(answer,a);
        
        final JToggleButton checkBoxOne = new JToggleButton();
        changeStateBool();
        checkBoxOne.setText("Sending");
        a.gridx = 0;
        a.gridy = 2;
        a.insets = new Insets(5,5,8,5);
        answerPane.add(checkBoxOne,a);
        
        JButton button = new JButton("Continue");
        a.gridx = 0;
        a.gridy = 3;
        a.insets = new Insets(5,5,8,5);
        answerPane.add(button, a);
        
        checkBoxOne.addActionListener(new ActionListener()
		{

			public void actionPerformed(ActionEvent arg0) 
			{
		    	javax.swing.SwingUtilities.invokeLater(new Runnable() 
		        {
		            public void run() 
		            {
		            	if(stateBool)
		            	{
		            		checkBoxOne.setText("Receiving");
		            		changeStateBool();
		            	}
		            	else if(!stateBool)
		            	{
		            		checkBoxOne.setText("Sending");
		            		changeStateBool();
		            	}
		            	
		            }
		        });
			}
		});
        
        button.addActionListener(new ActionListener()
		{

			public void actionPerformed(ActionEvent arg0) 
			{
		    	javax.swing.SwingUtilities.invokeLater(new Runnable() 
		        {
		            public void run() 
		            {
		            	
		            	
		                if(stateBool == true)
		                {
		                	frame.setVisible(false);
		                	answerFrame.setVisible(false);
		                	sendBox();
		                }
		                else if(stateBool == false)
		                {
		                	frame.setVisible(false);
		                	answerFrame.setVisible(false);
		                	receiveBox();
		                }
		                else
		                	System.out.println("wat");
		                
		            }
		        });
			}
		});
        
        answerFrame.pack();
        answerFrame.setVisible(true);
	}
	
	public static void sendBox()
	{
		JFrame answerFrame = new JFrame("Answer");
		
		
		GridBagConstraints a = new GridBagConstraints();
		
		answerFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        answerFrame.setLocation((int) (screenSize.getWidth()/2),
        		(int) (screenSize.getHeight()/2));
        
       Container answerPane = answerFrame.getContentPane();
       answerPane.setLayout(new GridBagLayout());
       
        if (shouldFill) 
        {
        	//natural height, maximum width
        	//c.fill = GridBagConstraints.HORIZONTAL;
        	a.ipadx = 100;
        	a.ipady = 10;
        }
        
        if (shouldWeightX) 
        {
        	a.weightx = 0.5;
        }
        
        JLabel label = new JLabel("Partner's Public Key: ");
        a.fill = GridBagConstraints.HORIZONTAL;
        a.gridx = 0;
        a.gridy = 0;
        a.insets = new Insets(5,5,5,0);
        answerPane.add(label, a);
        
        final JTextField otherPublicKey = new JTextField();
        a.gridx = 0;
        a.gridy = 1;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(otherPublicKey,a);
        
        label = new JLabel("Message to Send: ");
        a.gridx = 0;
        a.gridy = 2;
        a.insets = new Insets(5,5,5,0);
        answerPane.add(label,a);
        
        final JTextField messageToSend = new JTextField();
        a.gridx = 0;
        a.gridy = 3;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(messageToSend, a);
        
        label = new JLabel("Output: ");
        a.gridx = 0;
        a.gridy = 4;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(label, a);
        
        final JTextField output = new JTextField();
        a.gridx = 0;
        a.gridy = 5;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(output, a);

        
        JButton button = new JButton("Continue");
        a.gridx = 0;
        a.gridy = 7;
        a.insets = new Insets(10,5,10,5);
        answerPane.add(button, a);
        
        button.addActionListener(new ActionListener()
		{

			public void actionPerformed(ActionEvent arg0) 
			{
		    	javax.swing.SwingUtilities.invokeLater(new Runnable() 
		        {
		            public void run() 
		            {
		            	int partnersPublicKey = Integer.parseInt(otherPublicKey.getText());
		            	
		            	int sharedKey = (int)(Math.pow(partnersPublicKey, privateKey) % modulo);
		            	output.setText(encryptThree(messageToSend.getText(),sharedKey));
		            	
		            }
		        });
			}
		});
        
        answerFrame.pack();
        answerFrame.setVisible(true);
	}
	
	public static void receiveBox()
	{
		JFrame answerFrame = new JFrame("Answer");
		
		
		GridBagConstraints a = new GridBagConstraints();
		
		answerFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        answerFrame.setLocation((int) (screenSize.getWidth()/2),
        		(int) (screenSize.getHeight()/2));
        
       Container answerPane = answerFrame.getContentPane();
       answerPane.setLayout(new GridBagLayout());
       
        if (shouldFill) 
        {
        	//natural height, maximum width
        	//c.fill = GridBagConstraints.HORIZONTAL;
        	a.ipadx = 100;
        	a.ipady = 10;
        }
        
        if (shouldWeightX) 
        {
        	a.weightx = 0.5;
        }
        
        JLabel label = new JLabel("Partner's Public Key: ");
        a.fill = GridBagConstraints.HORIZONTAL;
        a.gridx = 0;
        a.gridy = 0;
        a.insets = new Insets(5,5,5,0);
        answerPane.add(label, a);
        
        final JTextField otherPublicKey = new JTextField();
        a.gridx = 0;
        a.gridy = 1;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(otherPublicKey,a);
        
        label = new JLabel("Encrypted Message: ");
        a.gridx = 0;
        a.gridy = 2;
        a.insets = new Insets(5,5,5,0);
        answerPane.add(label,a);
        
        final JTextField receivedMessage = new JTextField();
        a.gridx = 0;
        a.gridy = 3;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(receivedMessage, a);
        
        label = new JLabel("Decrypted Message: ");
        a.gridx = 0;
        a.gridy = 4;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(label, a);
        
        final JTextField output = new JTextField();
        a.gridx = 0;
        a.gridy = 5;
        a.insets = new Insets(5,5,5,5);
        answerPane.add(output, a);
        
        JButton button = new JButton("Continue");
        a.gridx = 0;
        a.gridy = 7;
        a.insets = new Insets(10,5,10,5);
        answerPane.add(button, a);
        
        button.addActionListener(new ActionListener()
		{

			public void actionPerformed(ActionEvent arg0) 
			{
		    	javax.swing.SwingUtilities.invokeLater(new Runnable() 
		        {
		            public void run() 
		            {
		            	int partnersPublicKey = Integer.parseInt(otherPublicKey.getText());
		            	
		            	int sharedKey = (int)(Math.pow(partnersPublicKey, privateKey) % modulo);
		            	
		            	output.setText(decryptThree(receivedMessage.getText(),sharedKey));
		            	
		            }
		        });
			}
		});
        
        answerFrame.pack();
        answerFrame.setVisible(true);
	}

	static void changeStateBool()
	{
		if(stateBool)
		{
			stateBool = false;
		}
		else if(!stateBool)
		{
			stateBool = true;
		}
		else
			stateBool = true;
	}
	
	public static int publicKey(int generator, int modulo, int privateNumber)
	{
		return (int)((Math.pow(generator, privateNumber)) % modulo);		
	}
    
    public static void addComponentsToPane(Container pane) 
    {	
        if (RIGHT_TO_LEFT) 
        {
            pane.setComponentOrientation(ComponentOrientation.RIGHT_TO_LEFT);
        }
        
        JButton button;
        final JTextField fieldOne;
        final JTextField fieldTwo;
        
        JLabel label;
        
        pane.setLayout(new GridBagLayout());
        GridBagConstraints c = new GridBagConstraints();
        if (shouldFill) 
        {
        	c.ipadx = 280;
        	c.ipady = 10;
        }
        
        
        if (shouldWeightX) 
        {
        	c.weightx = 0.5;
        }
        	
        	
        label = new JLabel("Generator");
        c.fill = GridBagConstraints.HORIZONTAL;
        c.insets = new Insets(10,10,0,0);
        c.gridx = 0;
        c.gridy = 0;
        pane.add(label, c);
        
        fieldOne = new JTextField("");
        c.fill = GridBagConstraints.HORIZONTAL;
        c.gridx = 0;
        c.gridy = 1;
        c.insets = new Insets(0,10,0,10);
        pane.add(fieldOne, c);
        
        label = new JLabel("Modulo");
        c.fill = GridBagConstraints.HORIZONTAL;
        c.gridx = 0;
        c.gridy = 2;
        pane.add(label, c);
        
        fieldTwo = new JTextField("");
        c.fill = GridBagConstraints.HORIZONTAL;
        c.gridx = 0;
        c.gridy = 3;
        c.insets = new Insets(0,10,20,10);
        pane.add(fieldTwo, c);
            
        button = new JButton("Calculate");
        c.gridx = 0;
        c.gridy = 8;
        c.insets = new Insets(0,10,10,10);
        pane.add(button, c);

		
        button.addActionListener(new ActionListener()
		{

			public void actionPerformed(ActionEvent arg0) 
			{
		    	javax.swing.SwingUtilities.invokeLater(new Runnable() 
		        {
		            public void run() 
		            {
		            	setModulo(Integer.parseInt(fieldTwo.getText()));
		                publicKeyBox(Integer.parseInt(fieldOne.getText()), privateKey);
		                
		            }
		        });
			}
		});
    }
    
    private static void createAndShowGUI() 
    {
        //Create and set up the window.
        
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocation((int) (screenSize.getWidth()/6),
        		(int) (screenSize.getHeight()/3));
        
        frame.setTitle("Encrypter");
        
        //Set up the content pane.
        addComponentsToPane(frame.getContentPane());
 
        //Display the window.
        frame.pack();
        frame.setVisible(true);
    }
    
    int getModulo()
    {
    	return modulo;
    }
    
    static void setModulo(int par)
    {
    	modulo = par;

		do{
			privateKey = ((int)(Math.random()*99 + 1)) % modulo;
		}while((privateKey==(modulo-1)) || (privateKey==0));
    }
    
    public int[] primeRoots(int theNum)
	{
		if (!isPrime(theNum))
		{
			System.out.println("Sorry, the number must be prime.");
			//return -1;//
			return new int[1];
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
		
		int c=0;
		while(output[c]!=0)
			c++;
		
		int[] output2 = new int[c];

		System.arraycopy(output, 0, output2, 0, c);
				
		return output2;//[new Random().nextInt(c)];
	}
	
	int randomPrimeRoot(int theNum)
	{
		
		int[] output = primeRoots(theNum);
		return output[new Random().nextInt(output.length)];
	}

	public boolean isPrime(int x)
	{
		if(x%2==0)
			return false;
		for(int c=3; c*2<=x; c+=2)
			if(x%c==0)
				return false;
		
		return true;
	}
	
	public static int[] stringToInt(String s)
	{
		int len = s.length();
		
		int[] output = new int[len];
		
		for(int c=0; c<len; c++)
			output[c]=(int)s.charAt(c);
		
		return output;
	}

	public static String intToString(int[] x)
	{
		int len = x.length;
		
		String output = "";
		
		for(int c=0; c<len; c++)
			output += (char)x[c];
		
		return output;
	}
 
	public static String encryptThree(String input, int sharedKey)
	{
		int[] clearText = stringToInt(input);
		
		int[] cypherText = new int[clearText.length];
		int mod = 256;
		int gen = 152;
		
		int x = sharedKey % mod;
		
		while(x==0 || x==gen-1)
			x = (x+1) % mod;
		
		int length = clearText.length;
		
		for(int c=0; c<length; c++)
		{
			/*Stage Two:* x = (int)(Math.pow(gen, x+c) % mod);/*This just makes x constantly change in crazy ways hopefully*/
			
			cypherText[c] = (((int)Math.pow(gen, x)%mod)*clearText[c]) % mod;

		}
		
		return intToString(cypherText);
	}

	public static String decryptThree(String input, int sharedKey)
	{
		int[] cypherText = stringToInt(input);
		
		int[] clearText = new int[cypherText.length];
		int mod = 256;
		int gen = 152;
		
		int x = sharedKey % mod;
		while(x==0 || x==gen-1)
			x = (x+1) % mod;
		int length = cypherText.length;
		
		for(int c=0; c<length; c++)
		{
			/*Stage Two:* x = (int)(Math.pow(gen, x+c) % mod);/*This just makes x constantly change in crazy ways hopefully*/
			
			int z = ((int)Math.pow(gen, mod-1-x))%mod;
			
			clearText[c] = (cypherText[c] * z)%mod;
		}
		
		return intToString(clearText);
	}	
	
    public static void main(String[] args) 
    {
        //Schedule a job for the event-dispatching thread:
        //creating and showing this application's GUI.
    	javax.swing.SwingUtilities.invokeLater(new Runnable() 
        {
            public void run() 
            {
                createAndShowGUI();
            }
        });
    }
}