
class Animal{
    constructor(name, age, species){
        this.name = name;
        this.age = age
        this.species = species
    }

    sound(){
        console.log(`${this.name} makes a sound`)
    }
}

//Inheritance allows a class to inherit properties and methods from another class, its like children inheriting traits from parents
const shiva = new Animal("Shiva", 20, "Homo Sapiens")
console.log(shiva)
shiva.sound();


//inheriting a subclass called human from animal
class Human extends Animal{
    constructor(name, lastName, age, education, address){
        super(name, age, "Human") // new Aminal(name, age, "Human")
        this.lastName = lastName
        this.education = education
        this.address = address
    }

    sound(){
        console.log(`${this.name}, says hi!`)
    }
}


const humanshiva = new Human("Shiva", "Nirwan", 20, "BCA", "NCR");
console.log(humanshiva)
humanshiva.sound()


class Dog extends Animal{
    constructor(name, age, breed, owner){
        //whenever we want to create properties coming from parents 
        super(name, age, "Dog")
        this.breed = breed;
        this.owner = owner
    }

    //sound method
    //override
    sound(){
        console.log(`${this.name} barks: Woof!`)
    }
}


const husky = new Dog("Snow", 10, "Husky", "ajay");
console.log(husky)



//vehicle 
//manufacturer
//year
//mode
class Vehicle{
    constructor(manufacturer, year, mode){
        this.manufacturer=manufacturer
        this.year=year
        this.mode=mode
    }

    move(){
        console.log("This vehicle moves!")
    }
}


//car
//mileage
//land
class Car extends Vehicle{
    constructor(manufacturer, year, mileage){
        super(manufacturer, year, "Land");
        this.mileage = mileage
    }

    move(){
        console.log(`this car moves on land`)
    }
}

//boat
//motor
//water
class Boat extends Vehicle{
    constructor(manufacturer, year, motor){
        super(manufacturer, year, "Water")
        this.motor = motor
    }

    
}


//airplane
//engine
//air

class Airplane extends Vehicle{
    constructor(manufacturer, year, engine){
        super(manufacturer, year, "Air");
        this.engine= engine
    }

    
}

const BMW = new Car("BMW", 2025, 10);

const Yacht = new Boat("Yacht", 2022, "good motor")

const Pushpak = new Airplane("Srilanka", 0, "Nuclear");


console.log(BMW);
console.log(Yacht)
console.log(Pushpak)

BMW.move();
// Yacht.drive();
Pushpak.move();


//Polymorphism refers to 'many forms' -> the same method name can behave differently in different classes 


// const number = 10

// number = 20 //-> override 


//BankAccount 
//type() -> 
class BankAccount{
    constructor(name){
        this.name = name
    }

    type(){
        console.log("This is a bank account")
    }
}

//savings
class Savings extends BankAccount{
    constructor(name){
        super(name)
    }

    type(){
        console.log("This is a savings account")
    }
}

// type()
//current


class Current extends BankAccount{
    constructor(name){
        super(name)
    }

    type(){
        console.log("This is a Current account")
    }
}

const acc = new BankAccount("HDFC");

const saving = new Savings("SBI");

const current = new Current("ICICI")

console.log(acc)
console.log(saving)
console.log(current)

acc.type()
saving.type()
current.type()