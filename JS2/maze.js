class Solution {
    solve(input) {
      let [N, M] = input.split(" ").map(Number);
  
      let visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
  
      const directions = [
        [-1, 0],  // up
        [1, 0],   // down
        [0, -1],  // left
        [0, 1],   // right
        [-1, -1], // up-left
        [-1, 1],  // up-right
        [1, -1],  // down-left
        [1, 1],   // down-right
      ];
  
      function dfs(i, j) {
        // Base case: reached destination
        if (i === N && j === M) {
          return 1;
        }
  
        visited[i][j] = true;
        let totalPaths = 0;
  
        for (let [dx, dy] of directions) {
          let ni = i + dx;
          let nj = j + dy;
  
          if (ni >= 1 && ni <= N && nj >= 1 && nj <= M && !visited[ni][nj]) {
            totalPaths += dfs(ni, nj);
          }
        }
  
        visited[i][j] = false; // backtrack
        return totalPaths;
      }
  
      let result = dfs(1, 1);
      console.log(result);
    }
  }
  


  function printMazePathsWithJumps(sr, sc, dr, dc, str) {
    // Write your code here
    if (sr === dr && sc === dc) {
      console.log(str);
      return;
    }
    for (let i = 1; i <= dc - sc; i++)
      printMazePathsWithJumps(sr, sc + i, dr, dc, str + "h" + i);
    for (let i = 1; i <= dr - sr; i++)
      printMazePathsWithJumps(sr + i, sc, dr, dc, str + "v" + i);
    for (let i = 1; i <= dr - sr && i <= dc - sc; i++)
      printMazePathsWithJumps(sr + i, sc + i, dr, dc, str + "d" + i);
  }