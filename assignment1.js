const prompt = require("prompt-sync")();
const studentMarks = prompt("Enter students marks:");

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }

// let arr = [];
studentMarks >0 && studentMarks <=100;

function getGrade(studentMarks) {
    if (studentMarks >79) {
        console.log(A); 
    } else if (studentMarks >=60 && studentMarks <=79){
        console.log(B);
    } else if(studentMarks >=49 && studentMarks <=59 ) {
        console.log(C);
    } else if(studentMarks>=40 && studentMarks <=49){
        console.log(D);
    } else {
        console.log(E);
    }
}