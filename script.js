const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
	let currarr = [];
	let currsum = 0;

	for(let i = 0; i < arr.length; i++) {
		let val = arr[i];


		if(currsum + val <= n) {
			currarr.push(val);
			currsum += val;
		}
		else {
			if(currarr.length > 0) {
				result.push(currarr);
			}
			currarr = [val];
			currsum = val;
		}
	}

	if(currarr.length > 0) {
		result.push(currarr);
	}

	return result;
};

 const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
