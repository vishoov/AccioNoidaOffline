class BankAccount{

    #balance=0

    constructor(name, account, phone){
        this.name = name
        this.account = account
        this.phone = phone
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited ${amount}`)
        }else{
            console.log("Amount must be greater than zero")
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log(`Withdrawn ${amount}`)
        }else{
            console.log("You dont have sufficient amount to withdraw")
        }
    }

    getBalance(){
        return this.#balance
    }
}

const shiva = new BankAccount('shiva', '3064060476', "4964964964");
shiva.deposit(100)
console.log(shiva.getBalance())
shiva.withdraw(1000)
