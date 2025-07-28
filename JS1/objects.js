// // const original = { name: 'Alice', age: 30 };
// // const clone = { ...original };

// // // console.log(clone); // { name: 'Alice', age: 30 }


// // clone.name="Bob";
// // console.log(original); // { name: 'Alice', age: 30 }
// // console.log(clone); // { name: 'Bob', age: 30 }



// //whenever you need to create a copy of an object, dont use the
// // assignment operator, because this will create a reference to the original object
// const original = { name: 'Alice', age: 30 };
// // const clone = original 

// // clone.name = "Bob";
// // console.log(original); 



// //To clone an object, use the spread operator or Object.assign
// // const clone = { ...original };


// // const original = { name: 'Alice', age: 30 };

// const clone = Object.assign({}, original);
// clone.name ="Narendar"
// console.log(clone); // { name: 'Alice', age: 30 }


// //DEEP COPY

// const object = {
//     name:"Alice",
//     age: 30,
//     address: {
//         city: 'Wonderland',
//         zip: '12345'
//     },
//     function: function() {
//         console.log("Hello from Alice");
//     }
// }

// // const deepCopy = JSON.parse(JSON.stringify(object))

// // console.log(deepCopy); // { name: 'Alice', age: 30, address: { city: 'Wonderland', zip: '12345' } }

// deepCopy.address.city = "New City";
// console.log(deepCopy)


// const ogobject = {
//     name: "Alice",
//     age: 30,
//     address: {
//         city: 'Wonderland',
//         zip: '12345'
//     },
//     birthDate: new Date('1990-01-01'),
//     sayHello: function() {
//         console.log("Hello from Alice");
//     }
// }


// const clonedObject = {...ogobject};
// console.log(clonedObject); // { name: 'Alice', age: 30, address: { city: 'Wonderland', zip: '12345' }, birthDate: 1990-01-01T00:00:00.000Z, sayHello: [Function: sayHello] }

// delete clonedObject.sayHello

// console.log(clonedObject); // { name: 'Alice', age: 30, address: { city: 'Wonderland', zip: '12345' }, birthDate: 1990-01-01T00:00:00.000Z }



// //using structuredClone
// // const struct= structuredClone(ogobject);
// // console.log(struct); 


// //whenever using StructuredClone, it will create a deep copy of the object
// //but it will throw error if the object contains functions, symbols, or certain types of objects like Map, Set, etc., bigInt, null, date.
// const deeplynestedobject = {
//     name: "Alice",
//     age: 30,
//     address: {
//         city: 'Wonderland',
//         zip: '12345',
//         coordinates: {
//             lat: 12.34,
//             long: 56.78, 
//             height:{
//                 value: 100,
//                 unit: 'cm',
//                 temperature: {
//                     value: 25,
//                     unit: 'Celsius',
//                     details: {
//                         description: "Normal temperature",
//                         timestamp: new Date('2023-01-01T00:00:00Z')
//                     }
//                 }
//             }
//         }
//     },
//     birthDate: new Date('1990-01-01'),
//     sayHello: function() {
//         console.log("Hello from Alice");
//     }

// }


// // const clonednest = { ...deeplynestedobject};
// const clonednest = JSON.parse(JSON.stringify(deeplynestedobject));
// console.log(clonednest)

function deepCopy(object, obj={}){
if(object==null || typeof object !== 'object'){
    return object;
}

if(object instanceof Date){
    return new Date(object.getTime());
}

if(obj instanceof RegExp){ // Issue: Checking 'obj' instead of 'object'
    return new RegExp(object.source, object.flags);
}


//Array -> for extracting elements

const clone = Array.isArray(object)?[]:{};
for(const key in object){
    if(object.hasOwnProperty(key)){
        clone[key] = deepCopy(object[key], clone);
    }

    
    
}
return clone;
}


const object1 = {
    name: "Alice",
    age: 30,
    address: {
        city: 'Wonderland',
        zip: '12345'
    },
    birthDate: new Date('1990-01-01'),
    sayHello: function() {
        console.log("Hello from Alice");
    }
}

console.log(deepCopy(object1))







// https://stackoverflow.com/questions/61421873/object-copy-using-spread-syntax-actually-shallow-or-deep