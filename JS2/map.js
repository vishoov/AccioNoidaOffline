const map1 = new Map();

console.log(map1); 

const map2 = new Map(
    [
        ["apples", 500],
        ["mangoes", 200],
        ["bananas", 300],
    ]
)

map2.set("apples", 600);


//Methods 

//1. .set(key, value)

map2.set("apples", 800);  
console.log(map2); //add or update a key-value pair in the map 

//2. get(key) -> returns the value associated with the key

console.log(map2.get("apples")); 

//3. has(key) -> boolean output

console.log(map2.has("pineapples"))

//4. delete(key) -> removes the key-value pair associated with the key

console.log(map2.delete("kiwi")); 
console.log(map2);

//5. clear() -> removes all key-value pairs from the map

// map2.clear();
// console.log(map2);

//6. size -> returns the number of key-value pairs in the map

console.log(map2.size); 


// map2 -> { 'apples' => 800, 'mangoes' => 200, 'bananas' => 300 }

//traversing map as a whole
for(const [key, value] of map2){
        console.log(value, key)
}


//only want to traverse keys
for(const k of map2.keys()){
    // console.log(map2.get(k))

}


//only want to traverse the values
for(const v of map2.values()){
    console.log(v)
}

//entries 
for(const e of map2.entries()){
    console.log(e)
}

// Rules
//referece types are compared by identity, not by value 
//const a = {}, const b = {}


//NaN equals NaN inside a map

const map4 = new Map(
    [
        [NaN, "Not a Number"],
        [NaN, "Another Not a Number"],
    ]
)

console.log(map4)


// console.log(NaN === NaN)


// Property             Map                 Plain Object
//Key Types          Any value           String or Symbol
//                  including objects
//                  and functions

//Order             insertion order         not guaranteed
//                  is preserved always


//size              property exists             doesnt exist

//iteration         directly iterable              object.keys or for...in


//use               collections, counting,          structured data 
//                      tracking


let arr = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,4,4,44,4,4,4,5,5,5,5,5,55,6,6,6,6,6,7,7,7,7];

function countFreq(arr){
    const freq = new Map();

    for(let i=0; i<arr.length; i++){
        freq.set(arr[i], (freq.get(arr[i])||0)+1)
    }
    return freq;
}

console.log(countFreq(arr))