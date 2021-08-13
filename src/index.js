module.exports = function reverse (n) {
  let reverseNum = '';
	while(n > 0){
		let oneNum = n % 10;
		reverseNum += String(oneNum);
		n = Math.floor(n / 10);
	}
	return +reverseNum;	
}
