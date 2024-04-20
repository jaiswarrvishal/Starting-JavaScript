//the topics we coverd:
// Datatypes => string/number/boolean/undefined
// predefined data => console.log()/typeof()
// Variables => var/let/cosnt
//Difference between => (var/let/cosnt)/scope/hoisting
//Conditional Statement => 1. if else & 2. switch
// syntax:=>
// if(condition){
//     statement 1
// } else {
//     statement 2
// }

var age = 10;
// console.log(age>18);

// if (age > 18) {
//     console.log("Your age is valid for DL.");
//   } else {
//     console.log("Your age is Not valid for Driving License.");
//   }

// if else-if
// syntax:=>
// if(condition 1){
//     statement 1
// } else if(Conditiion 2){
//     statement 2
// else {
//     statement 3
// }

// var age = 19;
// if (age > 18) {
//     console.log("Your age is valid for DL.");
//   } else if (age == 18) {
//     console.log("you are allowed for DL.");
//   }
//   else if (age == 10) {
//     console.log("Your age is 10.");
//   }  else {
//     console.log("Your age is Not valid for Driving License.");
//   }
   
//Comparision Operator
// value 1 > value 2
// value 1 < value 2
// value 1 >= value 2
// value 1 <= value 2
// value 1 != value 2
// = --> to assign value to variable
// == --> to compare only Datas
// === --> to compare with data and datatype

// var value1 = 20;
// var value2 = 20;
// console.log(value1 == value2);

var value1 = 11;
var value2 = '11';
console.log(value1 == value2);
console.log(value1 === value2);

console.log(20 > 30);
console.log(20 < 30);
console.log(30 <= 30);
console.log(30 >= 30);
console.log(30 != 30);


// Q. Given an number find out the number is even or odd. 
// if number is even then print "Even" and if number is odd then print "Odd"
// var number = 345; Use if else conditional statement 
var number = 345;
if(number % 2 === 0){
    console.log("even");
} else{
    console.log("odd");
}



