function makePalindrome(num) {
	const res = num + num.toString().split('').reverse().join('');
	return parseInt(res);
}

function largestPalindrome(n) {
	const upperBound = Math.pow(10, n) -1;
	const lowerBound = Math.floor(upperBound / 10);
	const maxNum = upperBound * upperBound;
	let firstHalf = Math.floor(maxNum/Math.pow(10, n));
	let found = false;
	let pal = 0;
	let num1;
	while(!found) {
		// make palindrome based on the left first half number
		const palindrome = makePalindrome(firstHalf);
		for(i = upperBound; i > lowerBound; i--) {
			if(palindrome / i > maxNum || i * i < palindrome) {
				break;
			}
			if(palindrome % i === 0){
				found = true;
				pal = palindrome;
				num1 = i;
				break;
			}
		}
		firstHalf -= 1;
	}

	// if is lower than 10, it means there's no palindrome found that are larger than 10
	// then 9 will be the palindrome
	if(pal < 10) {
		pal = 9;
	}
	console.log(`${pal} = ${num1} * ${pal/num1}`);
};

largestPalindrome(4);