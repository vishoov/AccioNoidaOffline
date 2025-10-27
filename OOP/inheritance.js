
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
