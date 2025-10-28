//Abstraction is for hiding complex functionalities inside the system

//whenever we have to implement any hidden logic inside our system, we can use abstracted methods

// _method -> this will abstract the method meaning that this method will not be publically accessible 

class Netflix{
    #devices

    constructor(){
        this.#devices=[]
    }

    login(deviceName){
        console.log("Logging in");

        if(!this._validateDeviceLimit()){
            console.log("You cannot login")
            return false
        }

        this.#devices.push(deviceName)
        console.log("Logged in successfully")
    }

    _validateDeviceLimit(){
        if(this.#devices.length>=4){
            return false
        }else{
            return true
        }
    }
}

const TV = new Netflix()

TV.login("TV")
TV.login("TV")
TV.login("TV")
TV.login("TV")
TV.login("TV")