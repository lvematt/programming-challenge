
const string1 = process.argv[2];
const string2 = process.argv[3];

console.log(isAnagram(string1, string2));


function isAnagram(string1, string2) {
	if(!string1 || !string2) return false;
	const check = new Array(26);
	checkString(string1, check, 1);
	checkString(string2, check, -1);

	let result = true;
	for(let i=0; i<26; i++) {
		if(check[i]) result = false;
	}
	return result;
}

function checkString(string, check, step) {
	for(let i=0; i<string.length; i++) {
		const code = string.charCodeAt(i);
		let index = code - 'a'.charCodeAt(0);
		if (index < 0 || index >= 26) {
			index = code - 'A'.charCodeAt(0);
		}
		if (index >= 0 && index < 26) {
			check[index] = check[index] !== undefined ? check[index] + step : step;
		}
	};
}