const students = [
    {"name": "John", "id": 123, "marks": 98},
    {"name": "Baba", "id": 101, "marks": 23},
    {"name": "yaga", "id": 200, "marks": 45},
    {"name": "Wick", "id": 115, "marks": 75}
  ];

  
  function StudentRecords(students){
    let totalMarks = 0

    students.forEach(student=>{
        let marks = student.marks

        if(marks<50){
            marks+=15
        }
        
        if(marks>50){
            totalMarks+=marks;
        }


    })
    return totalMarks;
  }

  console.log(StudentRecords(students))