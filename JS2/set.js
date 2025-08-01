const arr = [1,2,2,2,3,3,3,4,4,5,5];

const set = new Set(arr);
console.log(set)


const arr2 = ["john", "doe", "john", "jane"];
const set2 = new Set(arr2);
console.log(set2)


const string = "fooooooooooooooooood";
const set3 = new Set(string);
console.log(set3);

//METHODS

// 1.   .add
const mySet = new Set();
mySet.add("red")
mySet.add("green")
mySet.add("green")
mySet.add("green")
mySet.add("green")
mySet.add("green")
mySet.add("green")
mySet.add("blue");

console.log(mySet)

const chaining = new Set().add("green").add("blue")
console.log(chaining)

//2. .has -> boolean output 
console.log(mySet.has("neela"))

//3. .delete()

mySet.delete('blue');
console.log(mySet)

//4. size

console.log(mySet.size)

//5. clear()

// mySet.clear();
// console.log(mySet)

//Iteration of set

//for...of 
//for(let i=0; i<arr.size(); i++){
    // arr[i]
// }
//arr[i]==color

for(const color of mySet){
    console.log(color)
}

let object = {
    name: "John",
    age: 30
}

mySet.forEach(color=>console.log(color))


for(const value of mySet.values()){
    console.log(value);
}


// arr[i]=color

//let arr = [1,2,3,4,4,4,5,6,9,6,4,3]


let arr4=[1,2,3,4,5];
let arr3=[4,5,6,7,8];

function commonElements(arr1, arr){
    const set = new Set(arr);
    return arr1.filter(item=>set.has(item))
}

console.log(commonElements(arr4, arr3));