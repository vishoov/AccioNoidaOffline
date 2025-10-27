function createCar(name){
    return {
        name :name
    }
}

class Car{
    //constructor = it runs when we creaye a new car instance
    constructor(model, year, manufacturer){
        this.model = model,
        this.year = year,
        this.manufacturer = manufacturer
    }
}

const audi = new Car("Q8", 2025, "Audi");
console.log(audi)

console.log(createCar("Maruti"))

class Person{
    constructor(inputValue){
        this.name = inputValue;
    }

    sayHello(){
        console.log(`Hello my name is ${this.name}`)
    }
}
//this keyword refers to the object that is currently being executed or that is calling the function. 
// this = "the current object that the class is working on "
const himanshu = new Person("himanshu singh");
const jai = new Person ("jai");
const akarsh = new Person("akarsh")
console.log(himanshu)
console.log(jai)
console.log(akarsh)

himanshu.sayHello()

jai.sayHello()