const readline = require('readline');
const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
 });

 let input = [];
 rl.on('line', (line) => {
 input.push(line);
 }).on('close', () => {
 
	let t = Number(input[0]);
	let index = 1;
 
	while(t > 0) {
		let n = Number(input[index]);
		// Write your code here
		let x = Math.floor(n/2)+1;
		//x tellsme how many parts i am going to solve the problem in
		let cnt = 1;
		//CNT WILL BE TELLING HOW MANY STARS I WHAVE TO PRINT IN EACH LINE
		//upper half
		for(let i=1; i<=x; i++){
			let line ="";

			for(let j=1; j<=x-i; j++){
				line+='  ';
			}

			for(let j=1; j<=cnt; j++){
				line+="* "
			}
			cnt+=2;
			//cnt=cnt+2;
			console.log(line)
		}
			cnt-=4;
		for(let i=1; i<x; i++){
			let line = '';

			for(let j=1; j<=i; j++){
				line+='  ';
			}

			for(let j=1; j<=cnt; j++){
				line+='* '
			}

			console.log(line);
			cnt-=2;
		}


		t--;
		index++;
	}
 });