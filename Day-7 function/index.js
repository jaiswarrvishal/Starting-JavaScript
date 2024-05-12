
//Tradition function -> to store multiple lines of code
//Arrow function

// let num1 = 10;
// let num = 20;
// function add(){
    // return num1 + num;
    // return num1 - num;
    // return num1 * num;
    // return num1 % num;
    // return num1 / num;
// }
// console.log(add());

// Scenerio 1
// function addition(){
//     var number = 11;
//     var number1 = 12;
//     console.log("hii")
//     return number + number1;
// }

// const res = addition();
// console.log(res)  //output=> hii 23

// Scenerio 2
// function addition(){
//     var number = 11;
//     var number1 = 12;
//     return number + number1;
//     console.log("hii")  
// }

// const res = addition();
// console.log(res)   // output=> 23 (bcz after "return" there will not execute another value)


// function mul(){
//     let num = 11;
//     let num1 = 12;
//     return num * num1;
// }
// let res = mul()
// console.log(res)
// // console.log(mul());

// function add(one, two){
//     return one + two;
// }
// let final = add(11, 12)
// console.log(final)

//lets see few more examples=>
// function increaseNumberOfProduct(){
//     var product = 1000;
//     return product + product;
// }
// const price = increaseNumberOfProduct();
// console.log(price);


// function addi(firstValue, secondValue){
//     return firstValue + secondValue;
// }
// console.log(addi(20, 29));

// function addi(num, num1){
//     return num + num1;
// }
// console.log(addi(21, 29));

//Q. check number Even or Odd
// function evenOrOdd(number){
//     if(number % 2 === 0){
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// // let number = 90;
// evenOrOdd(9)


// function evenOdd(){
//     if(num % 2 === 0){
//         console.log("Even")
//     } else{
//         console.log("Odd")
//     }
// }
// let num = 14;
// evenOdd();


// Question: Write a JavaScript program to find the sum of all numbers from 1 to 100 using a for loop
// var sum = 0;
// for(var num = 1; num <= 100; num++){
//     sum = sum + num;
// }
// console.log(sum)

// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// for(let i = 10; i > 0; i--){
//     console.log(i)
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 1){
//         console.log(i)
//     }
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// Question: Write a JavaScript program to print even numbers between 1 and 20 using a for loop
// for(var number = 1; number <= 20; number++){
//     if(number % 2 ===0){
//         console.log(number);
//     }
// }

// OR
// for(var number = 2; number <= 20; number += 2){
//         console.log(number);
// }

// Question: Write a JavaScript program to find the factorial of a number using a for loop.

// let fact = 1;
// // for(let i = 1; i <= 5; i++){
//     for(let i = 1; i <= 6; i++){
//     fact *= i;
// }
// console.log(fact); //6! = 720 | 5!=120

// function fact(n){
//     let res = 1;
//     for(let i = 1; i <= n; i++){
//         res *= i;
//     }
//     return res;
// }
// console.log(fact(4)); //4! = 4x3x2x1 = 24


// OR
// function factorial(n){
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log("Factorial of 5", factorial(5));

// Question: Write a JavaScript program to generate a multiplication table for a given number using a for loop
// function multiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }
// multiplicationTable(5);


//Array 
// [data, data1, data2, data3]
// var students = ["thor", "thorfinn", "thorgill"];
// console.log(students); 
// console.log(students.length); //3
// console.log(students[0]); //thor
// console.log(students[students.lenght-1]);  // undefined(bcz index will start from 0,1,2=> here the length is 3 and we trying to minus)


//loops=> for/while
// for(starting; ending; sequence){
//     code;
// }

//Q. Print number from 1 to 10, by using loop
// for (var number = 1; number <= 10; number++){
//     console.log(number);
// }

// // 1st Iteration :
// var number = 1;
// number <= 5, 1 <= 5, true;
// console.log(number);  1
// number++; 1 => 2

// 2nd Iteration :
// number = 2
// number <= 5; 2 <= 5;  true
// console.log(number ) 2
// number++; 2 => 3

// 3rd Iteration

// number = 3
// number <= 5 ; 3 <= 5; true
// console.log(number)  3
// number++; 3 => 4

// 4 th Iteration

// number = 4
// number <= 5 ; 4 <= 5 ; true
// console.log(number)  4
// number++. 4 -> 5

// 5th iteration

// number = 5
// number <=  5; 5 <= 5; true
// console.log(numberm) 5
// number++; 5 -> 6

// 6 th iteration

// number = 6
// number <= 5 ; 6 <= 5 : false

// stop


// Q Print number from 10 to 60 with gap of 4
// for(var number = 10; number <= 60; number = number+4){
//     console.log(number);
// }

// number = number+4 => number += 4 [both are same]


// Q . Print number from 33 to 76 with gap of 3 but number also must be even
// for(var number = 33; number <= 76; number += 3){
//     if(number % 2 === 0){
//        // console.log("Even");
//         console.log(number);
//     } 
// }


// Whats the addition of number from 23 to 89 with gap of 2 and number must be odd.
// eg . 1+2=3,
//     3+3=6,
//     6+4=10,...
// var count = 0;
// for(var i = 23; i <= 89; i += 2){
//     if(i % 2 === 1){
//         // console.log(i);
//         count += i;
//     }
// }
// console.log(count);


// var numb = 0;
// for(var i = 10; i <= 30; i += 2){
//     if(i % 2 === 1){
//         // console.log(i)
//         numb += i;
//     }
// } 
// console.log(numb);  //0

var number = 0;
for (var i = 10; i <= 30; i += 2) {
    number += i;
}
console.log(number); //220


// Q. print multiplication of 1 to 5 (this means => 5!=> 5x4x3x2x1=120)
// var factorial;
// for(var i = 1; i <= 5; i++){
// //for(var factorial = 1; i <= 5; i++){

//     if(factorial == undefined){
//         factorial = i;
//     } else {
//         factorial = factorial * i;
//     }
// }
// console.log(factorial);

// 5!=5*4*3*2*1
// let res = 1;
// for(let i = 1; i <= 5; i++){
//     res = res * i;
// }
// console.log(res);


