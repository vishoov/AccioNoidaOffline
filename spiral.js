const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let mat = [];
  let n;
  let m;
  let lineNumber = 0;
  function constructMatrix(a) {
      mat.push(a.split(' ').map(Number));
      n = mat[0][0];
      m = mat[0][1];
      lineNumber++;
      if(lineNumber===n+1){
          spirallyTraverse(mat.splice(1));
          readline.close()
      }
  }
  readline.on('line', constructMatrix);
  function spirallyTraverse(mat) {
    
      // Write your code here
      let result = [];
      let left =0;
      let right = mat[0].length-1;
      let top = 0;
      let bottom = mat.length-1;
  
      while(top<=bottom && left<=right){
  
          //left to right row
          for(let i=left; i<=right; i++){
              result.push(mat[top][i])
          }
          top++;
  
          //top to bottom column
          for(let i = top; i<=bottom; i++){
              result.push(mat[i][right])
          }
          right--;
  
          if(top<=bottom){
          //right to left row 
          for(let i=right; i>=left; i--){
              result.push(mat[bottom][i])
          }
          bottom--;
          }
  
  
  
          //bottom to top column
          if(left<=right){
          for(let i=bottom; i>=top; i--){
              result.push(mat[i][left])
          }
          left++;
          }
      }
  
      console.log(result.join(" "))
      
  }