console.log(age); //this will give "undefined" 
var age=20;
console.log(age);
age=30;
console.log(age);
age=28;

console.log(age, typeof(age));
//JS print hte value line by line

//1. Defference between: var,let, const
//2. Defference between: Scope
//3. Defference between: Hoisnting

//1. Defference between: var,let, const
var name = "vishal";
console.log(name, typeof(name)); 
 name = "vishal"; //possible-->re-assigned
var name = "vishal"; //possibe --> declared


let a =11;
console.log(a, typeof(a));
// a = 13; // possible-->re-assigned 
// let a = 12; // not possibe --> declared

const num = 100;
console.log(num, typeof(num));
console.log(typeof(num))
// num = 111; // not possible-->re-assigned
// const num =112; // not possibe --> declared

let number = 40;
let number1 = 5;
console.log(number + number1);
console.log(number - number1);
console.log(number * number1);
console.log(number / number1);
console.log(number % number1);

console.log(typeof(number))
