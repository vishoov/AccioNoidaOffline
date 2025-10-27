//Encapsulation -> this means bundling the data and methods together while hiding internal details. 
// its like a capsule that protects the medicine inside 


// ATM System Bank Account System 

class BankAccount{
//Private property (encapsulated data)
    #balance
    #pin
    constructor(name, pin){
        this.name = name;
        this.#pin = pin;
        this.account = this.#getAccountNumber();
        this.#balance = 0;
    }
    //private method to generate a unique account number 

    #validatePin(inputPin){
        return this.#pin === inputPin
    }

    #getAccountNumber(){
        return Math.floor(Math.random()*500000);
    }

    deposit(money){
        this.#balance += money;
    }

    withdraw(pin, amount){

        if(!this.#validatePin(pin)){
            console.log("Invalid Pin");
            return false;
        }

        
        if(amount>0 && amount<=this.#balance){
            this.#balance -= amount;
            console.log(`You account debited with ${amount}`)
        }else{
            console.log("This amount cannot be withdrawn")
        }
    
    }

    showBalance(){
        console.log(`You account has : ₹ ${this.#balance}`)
    }
}

const Ajay = new BankAccount("Ajay Pratap Singh", 1234);
console.log(Ajay)

Ajay.deposit(1000000000)
Ajay.showBalance()
Ajay.withdraw(1234, 65000)
Ajay.showBalance()