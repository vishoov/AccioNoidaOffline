

class Student{
    constructor(name, age, grade){
        this.name = name
        this.age = age
        this.grade = grade
    }

    introduce(){
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old`)
    }

    getGrade(){
        const grade = this.grade;

        if(grade>90){
            console.log("A")
        }else if(grade<90 && grade > 80){
            console.log("B")
        }else{
            console.log("Back bencher")
        }
    }
}


const jai = new Student("Jai", 22, 95)
jai.introduce();