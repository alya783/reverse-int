module.exports = function reverse (n) {
 let reverseNum = '';
	if (n < 0) {
		n = Math.abs(n);
	}
	while(n > 0){
		let number = n % 10;
		reverseNum += String(number);
		n = Math.floor(n / 10);
	}
	return +reverseNum;	
}
