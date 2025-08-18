const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question('',(N) => {
	readline.question('',(arr) => {
		readline.question('',(r) => {
			N = parseInt(N);
			arr = arr.split(' ').map(Number);
			r = parseInt(r);
			printCombination(N,arr,r);
		})
	})
})
	function helperFunction(arr, data, start, end, index, r){
		if(index === r){
			let result ="";
			for(let j=0; j<r; j++){
				result+=data[j]+" ";

			}
			console.log(result);
			return;

		}


		for(let i = start; i<=end; i++){
			data[index] = arr[i];
			helperFunction(arr, data, i+1, end, index+1, r);
		}

		}


function printCombination(N,arr,r) {

	let data = new Array(r);
	arr.sort((a,b)=>a-b);
	helperFunction(arr, data, 0, N-1, 0, r)
	
}