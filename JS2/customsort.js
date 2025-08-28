// array.sort(compareFunction)

function compareFunction(a, b){
    //if a>b -> returns positive number
    //if a<b -> returns negative number
    //if a==b -> returns 0
}
//a comes before b

//return value focus 
//Negative Value -> a comes before b
//Positive Value -> b comes before a
//Zero -> no change

let numbers = [5, 2, 9, 1, 5, 6];


//ascending order
numbers.sort((a,b)=>a-b);

//descending order
numbers.sort((a,b)=>b-a);


//String

const fruits = ["Banana", "orange", "Apple", "Mango"];

//names.sort(); //ascending order

//descending order
console.log(fruits.sort((a,b)=>b.localeCompare(a)));
// console.log("Bapple".localeCompare("Banana"));

//ascending order
// console.log(fruits.sort((a,b)=>a.localeCompare(b)));
// fruits.sort();

//OBJECTS PROPERTY SORTING

const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
]


//sort by age ascendng
people.sort((a,b)=>a.age-b.age);

//sort by name 
people.sort((a,b)=>a.name.localeCompare(b.name));

//sort people by length of their names 
people.sort((a,b)=>a.name.length-b.name.length);


//boolean sorting
const bools = [true, false, true, false, true];

//trues first
bools.sort((a,b)=>b-a);

//falses first
bools.sort((a,b)=>a-b);



// ----------Questions--------------

const products = [
    { name: "iPhone 14", price: 79900, rating: 4.5, category: "Electronics", inStock: true },
    { name: "Samsung TV", price: 45000, rating: 4.2, category: "Electronics", inStock: false },
    { name: "Nike Shoes", price: 8999, rating: 4.7, category: "Fashion", inStock: true },
    { name: "Adidas T-shirt", price: 2499, rating: 4.0, category: "Fashion", inStock: true },
    { name: "MacBook Pro", price: 199900, rating: 4.8, category: "Electronics", inStock: true }
  ];

function customSort(products){
    //write your code here 
    return products.sort(
        (a,b)=>{

            if(a.inStock!==b.inStock){
                return b.inStock - a.inStock
            }

            if(a.rating!==b.rating){
                return b.rating-a.rating;
            }

            return a.price-b.price;
        }
    )
}

// console.log(customSort(products));


// Case Study: A school needs to generate merit lists and class rankings.


const students = [
    { name: "Arjun", grade: "A", marks: 92, attendance: 95, subject: "Math" },
    { name: "Priya", grade: "A", marks: 88, attendance: 98, subject: "Science" },
    { name: "Rohit", grade: "B", marks: 78, attendance: 85, subject: "Math" },
    { name: "Kavya", grade: "A", marks: 92, attendance: 90, subject: "Math" },
    { name: "Amit", grade: "C", marks: 65, attendance: 80, subject: "Science" }
  ];

  // Sort by: Grade → Marks (desc) → Attendance (desc)
  
  function sortStudents(students){
    return students.sort((a, b)=>{
        //grade compare
        // if(a.grade!==b.grade){
        //     return a.grade.localeCompare(b.grade)
        // }
        //char code compare
        // if(a.grade!==b.grade){
        //     return a.grade.charCodeAt(0)-b.grade.charCodeAt(0)
        // }

        //direct compare

        // if(a.grade!==b.grade){
        //     return a.grade>b.grade ? 1 : -1
        // }

        //map
        const gradeMap = { "A":1, "B":2, "C":3, "D":4, "E":5, "F":6 }
        if(a.grade!==b.grade){
            return gradeMap[a.grade]-gradeMap[b.grade]
        }

        //marks compare
        if(a.marks!==b.marks){  
            return b.marks-a.marks
        }

        //attendance compare
        return b.attendance-a.attendance
    })
  }

  //error handling 
  //if there is a piece of code which can throw error -> try catch

  function riskyFunction(){
    try{
    // const object = null;
    // console.log(object?.name);
        const data = [123];

        if(typeof data !== 'string'){
            throw new Error("Data is not a string, please fix this")
        }
    }
    catch(err){
        console.log("Error handled")
        console.log(err.message)
    }
    finally{
        console.log("This will always run")
    }
  }

  riskyFunction();

  //Built -in error types

  //SyntaxError 
  //ReferenceError
  //TypeError
  //RangeError 
  //URIError -> URI= Uniform Resource Identifier