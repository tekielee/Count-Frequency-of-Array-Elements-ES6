function countFreq(array) {
	let n = array.length;
	let countMap = new Map();
	for(let i = 0; i < n; i++) {
		if(countMap.has(array[i]) === false) {
			countMap.set(array[i], 1);
		} else {
			countMap.set(array[i], countMap.get(array[i]) + 1);
		}
	}
	console.log(countMap);
}

let array = [10, 20, 20, 10, 10, 20, 5, 20];
countFreq(array);