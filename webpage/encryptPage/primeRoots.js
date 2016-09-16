function roots(form) {
	var theNum = parseInt(form.inputbox.value);

	if (isNaN(theNum)) {
		alert("Please try again: enter a number.");
		return;
	}
	
	if (aintPrime(theNum)) {
		form.resultbox.value = "Sorry, the number must be prime.";
		return;
	}

	form.resultbox.value = "";
	
	var o = 1;
	var k;
	var roots = new Array();
	var z = 0;
	
	for (var r = 2; r < theNum; r++) {
		k = Math.pow(r, o);
		k %= theNum;
		while (k > 1) {
			o++;
			k *= r;
			k %= theNum;
		}
		if (o == (theNum - 1)) {
			//form.resultbox.value += (r + " ");
			//alert(r + " is a primitive root.");
			roots[z] = r;
			z++;
		}
		o = 1;
	}
	
	form.resultbox.value += (theNum + " has " + z + " primitive roots, and they are ");
	z--;
	
	for (var y = 0; y < z; y++) {
		form.resultbox.value += (roots[y] + ", ");
	}
	
	form.resultbox.value += ("and " + roots[z] + ".");
}

function aintPrime(possible) {
	for (var i = 2; i <= Math.sqrt(possible); i++) {
		if (Math.floor(possible / i) == (possible / i)) {
			return true;
		}
	}
	return false;
}