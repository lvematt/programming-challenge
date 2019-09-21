


function generateRndomList(length) {
	const m =[];
	if (length <= 0) return m;
	for (let i=0; i<Math.floor(length); i++) {
		const randomNum = Math.floor(Math.random() * 99) + 1;
		m.push(randomNum);
	}
	return m;
}

function merge(list, tempList, left, center, rightEnd) {
	const leftEnd = center - 1;
	let right = center;
	let length = rightEnd - left + 1;
	let tmpIndex = left;

	while(left <= leftEnd && right <= rightEnd){
		if (list[left]-list[right] <= 0){
			tempList[tmpIndex++] = list[left++];
		} else {
			tempList[tmpIndex++] = list[right++];
		}
	}

	// Copy rest of first half
	while(left <= leftEnd) {
		tempList[tmpIndex++] = list[left++];
	}

	// Copy rest of right half
	while(right <= rightEnd) {
		tempList[tmpIndex++] = list[right++];
	}

	// Copy sorted tempList back to original List
	for(let i = 0; i < length; i++) {
		list[rightEnd] = tempList[rightEnd];
		rightEnd--;
	}
}

function mergeSort(list, tempList, left, right) {
	if (left < right) {
		const center = Math.floor((left + right) / 2);
		mergeSort(list, tempList, left, center);
		mergeSort(list, tempList, center + 1, right);
		merge(list, tempList, left, center + 1, right);
	}
}


function sortList(list) {
	if (list && list.length < 1) {
		return list;
	}
	console.log('original list:');
	console.log(list.join(','));

	const temp = new Array(list.length);
	mergeSort(list, temp, 0, list.length - 1);

	console.log('sorted list:');
	console.log(list.join(','));
}

sortList(generateRndomList(100));




