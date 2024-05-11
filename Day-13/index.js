// const array = [1, 2, 3, 4];
// const output = array.map((ele) => ele * 2);

// console.log(output);



// const array = [1, 2, 3, 4, 5];
// array.forEach((ele) => console.log(ele));



// const array = [1, 2, 3, 4, 5];
// // 1 3 6 10 15
// const sum = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(sum);





// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // const combinedArray = array2.concat(array1);
// const combinedArray = array1.concat(array2);
// console.log(combinedArray);

// const one = ["a", "b", "c"];
// const two = ["d", "e"]
// const array = one.concat(two); //[ 'a', 'b', 'c', 'd', 'e' ]
// const array = two.concat(one); //[ 'd', 'e', 'a', 'b', 'c' ]
// console.log(array)


// const numbers = [1, 2, 3, 4, 5, 6];
// const output = numbers.find((number) => number > 3); //4 (here 3 is lesser than 4/5/6-> but in find()it will give only 1st element)
// const output = numbers.find((number) => number > 8);  //undefined
// const output = numbers.find((number) => number > 10); //undefined
// const output = numbers.find((number) => number > 2); // 3
 
// console.log(output);



// const num = [2, 4, 6, 7 ,8 , 10];
// const number = num.findIndex((ele) => ele > 4);
// console.log(number);  //index-> 2 it will give only one index value
// const number = num.findIndex((ele) => ele > 11); //-1
// const number = num.findIndex((ele) => ele > 12); //-1
// const number = num.findIndex((ele) => ele > 10); // -1
// const number = num.findIndex((ele) => ele > 9); //index -> 5
// console.log(number);


// const number = [5, 6, 7, 8, 9];
// // const index = number.findIndex((value) => value > 4); //0
// const index = number.findIndex((value) => value > 8);  //4 -> index
// const index = number.findIndex((value) => value > 9); //-1 -> index
// console.log(index);





// const data = [1, 2, 3, 4, "cat", "dog"];

// // const isExist = data.includes("abc"); //false
// const isExist = data.includes(2); //true
// console.log(isExist);

// const arr = [10, "soni", "peo", 14];
// console.log(arr.includes(10)); //true
// const isExist = arr.includes("peo"); ///true
// const isExist = arr.includes("sangla");  //false
// console.log(isExist)


//map()
// const flower = [2, 4, 6, 8];
// const flw = flower.map((ele) => ele + 3);
// console.log(flw);

//sum of array
// let array = [1,3,5,7];
// function addition(arr) {
//     let sum = 0;
//     for(i = 0; i <= arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(addition(array))
//1. Problem: Sum of Array Elements
// Write a function to find the sum of all elements in an array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let array = [1, 2, 3, 4, 5];
console.log(sumArray(array)); //output-> 15



