module.exports = function reverse (n) {
 let reverseNum = '';
	if (num < 0) {
		num = Math.abs(num);
	}
	while(num > 0){
		let oneNum = num % 10;
		reverseNum += String(oneNum);
		num = Math.floor(num / 10);
	}
	return +reverseNum;	
}
