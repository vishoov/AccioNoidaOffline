//higher order functions 
function counter() {
    let count = 0;
    
    return function () {
      count++;
      return count;
    };
  }
  let c = counter();
  console.log(c())
//   console.log(c());

//higher order function -> a function that returns another function or takes a function as an argument
//you can write a function inside a function but it is not a higher order function unless you return that function or take a function as an argument
//if you are writing a function 

  //counter() 


  //Lexical Scope -> the scope of a variable is determined by its position in the source code and nested functions have access to variables declared in their outer scope

// function outerFunction(){
//     let variable = 0;
//     console.log("Outer Function", variable);
// }


// outerFunction();