
//tTradition function -> to store multiple lines of code
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
// console.log(res)   // output=> 23 (bcz after return there will not execute another value)


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
for(var number = 33; number <= 76; number += 3){
    if(number % 2 === 0){
       // console.log("Even");
        console.log(number);
    } 
}


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

// Q. print and multiplication of 1 to 5
var finalCount;
for(var i = 1; i <= 5; i++){
    if(finalCount == undefined){
        finalCount = i;
    } else {
        finalCount = finalCount * i;
    }
}
console.log(finalCount);

