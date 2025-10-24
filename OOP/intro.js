const arr = new Array();
arr.push(2);
arr.push(4)
arr.push(9)

console.log(arr.length)

// OOP organizes code as objects that bundle data (properties) and behaviour (methods). 
// In javascriptm OOP is implemented using objects, classes and prototypes. 


//Why do we need OOPS?
// 1. Organize or bundle the data and functionalitis 
// 2. Reuse code
// 3. Create secure interfaces 
// 4. model real-world entities and relationship 

//vehicle
//4 subcategories
//1-1 object each 


//class -> entity that helps us in defining a data format
//prototype is a hidden link used for property delegation 
// instance -> it is the object that is created using the class
// this -> this is the reciever of the call, it is 
// class Vehicle {
    
// }

function createVehicle(name){
    return {
        name, 
        sound(){
            console.log(`Sound made by ${this.name}`)
        }
    }
}

class Vehicle {
    constructor(name){
        this.name = name
    }
    sound(){
        console.log(`Sound made by ${this.name}`)
    }
}

const alto = new Vehicle("alto");
alto.sound()

const fortuner = createVehicle('Fortuner')
fortuner.sound();

const audi = createVehicle('Audi')
audi.sound();


class FoodItem {
    constructor(name, category, price, calories, ingredients){
        this.name = name;
        this.category= category
        this.price = price
        this.calories=calories
        this.ingredients = ingredients
    }

    getDetails(){
        console.log(`${this.name}, ${this.category}, ${this.price}, ${this.calories}, ${this.ingredients}`)
    }
}

const pizza= new FoodItem("pizza", "italian", 100, 1000, "cheese, flour, veggies")


pizza.getDetails();
console.log(pizza)


// Encapsulation -> internal data, that is hidden 

function createCounter(){
    let value =0; //private

    return {
        increase(){
            value++;
        },

        get(){
            return value;
        }
    }
}

const c = createCounter()

c.increase();
c.increase();
console.log(c.get())


class Counter{
    #value =0; //private

    increase(){
        this.#value++;
    }

    //read-only method for value
    get status(){
        return this.#value;
    }
}

const count = new Counter;
count.increase();
console.log(count.status)