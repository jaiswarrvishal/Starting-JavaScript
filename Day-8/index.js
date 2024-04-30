// var count;

// for (var i = 1; i <= 4; i++) {
//   if (count === undefined) {
//     count = i;
//   } else {
//     count += i;
//   }
// }
// console.log(count); //10

// 1st iteration :
// i = 1
// i <= 4 ; 1 <=  4 ; true
// 0 ; count +=  i;  count += 1 => 1
// i++; 1 -> 2

// cd filename ,  cd ..- change directory (folder)

// Datatypes
// String
// Number
// Boolean
// undefined
// console.log()
// typeof()
// Varibles
// Var
// let
// const
// Scope
// block
// hoisting

// Conditional Statement
// 1. if else
// 2. switch

// Logical Operators
// && ||

// Function;
// Arrow function
// Traditional function
// array
// loops - for
// ++ --

// Q. print 1 to 10 number using for loop
// for (var num = 1; num <= 10; num++){
//     console.log(num);
// }

// //Q. print 10 to 1 number using loop
// for(i = 10; i > 0; i--){
//     console.log(i);
// }


// Q. Print reversae number from given array, use for loop .
var array = [1, 2, 4, 45, 5, 6, 7];
// for(var i = 0; i < array.length; i++){
//     console.log(array[i]);  //output 1, 2, 4, 45, 5, 6, 7
// }

for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i])  //output 7, 6, 5, 45, 4, 2, 1
}

for(var i = 1; i <= 5; i++){ // this loop will only give the no. of times will gonna print the value(Hello!)
    console.log("Hello!");
}

// Q .  find addition of numbers from array who are odd
var array = [1, 2, 4, 5, 6, 76, 7, 4, 2];
var addOddNumber = 0;
for(var i = 0; i < array.length; i++){
    if(array[i] % 2 === 1){
        addOddNumber += array[i];
    }
}
console.log(addOddNumber);


// Q. Given an array find name of student whose lenght is more than 5.
var students = ["rahul", "rohit", "virat", "rishabh"];

// var name = "Thorfinn";
// console.log(name.length) //8

for(var i = 0; i < students.length; i++){
    if(students[i].length > 5){
        console.log(students[i]); // rishabh
    }
}

// for (var i = 0; i < students.length; i++) {
//     //   console.log("Hii");
//     //   console.log(students[i]);
//     if (students[i].length > 5) {
//       console.log(students[i]);
//     }
//   }

