// let array = [1, 2, 3, 4, 5, 6];
// let target = 6;

// function findTarget(array, target){
// for(let i = 0; i < array.length - 1; i++){
//         // console.log(array[i])
//     for(let j = i+1; j < array.length; j++){
//         // console.log(array[j])
//         if(array[i] + array[j] === target){
//             console.log(array[i], array[j])
//         }
//         // j++;
//     }
//     // i++;
// }
// }
// findTarget(array, target);
//1 5 = 1+5=>6
//2 4 = 2+4=>6



// let array = [5, 6, 7, 8, 9, 4, 5, 7, 6, 3, 8, 2, 4, 5, 9];

// let target = 10;

// Find 3 numbers from array whose addition is target .
// let result = [];
// function findThreePair(array, target){
//     for(let i = 0; i < array.length-2; i++){
//         for(let j = i + 1; j < array.length-1; j++){
//             for(let k = i + 2; k < array.length; k++){
//                 if(array[i] + array[j] + array[k] === target){
//                     result.push([array[i], array[j], array[k]])
//                     // console.log(array[i], array[j], array[k])
//                 }
//             }
//         }
//     }
//     return result;
// }
// console.log(findThreePair(array, target));

// 5 + 6 + 7,  5 + 6 + 8 , 5 + 6 + 9 , 5 + 6 + 4 , ... , 5 + 6 + 9
// 5 + 7 + 8, 5 + 7 + 9, 5 + 7 + 4 , ... , 5 + 7 + 9
// 5 + 8 +

// 5 6 7


//push - pop | unshift - shift
// let array = [1, 4, 2, 9, 10];
// array.push(3); // push always "add" at the "end" 
// console.log(array) 

// array.pop(); // always "delete last" value
// console.log(array);

// array.unshift(3, 5); // always "add" at the "starting"
// array.unshift(6)
// console.log(array)

// array.shift(); //always "delete first" value
// console.log(array)


//splice
let array = ["a", "b", "c", "d", "e"];
// array.splice(1,1);
// console.log(array) // ["a", "c", "d", "e"] => (1,1) =>first 1 ->index | second 1 ->delete

// array.splice(1, 1, "F");
// console.log(array) // [ 'a', 'F', 'c', 'd', 'e' ] => (1,1) =>first 1 ->index | second 1 ->delete | F ->placed at 1st index


// array.splice(0, 1, "F");
// console.log(array) // [ 'a', 'F', 'c', 'd', 'e' ] => (0, 1) => 0 ->index | 1 ->delete | F ->placed at 0th index

// array.splice(3, 1, "F");
// console.log(array) //["a", "b", "c", "F", "e"] => (3, 1) => 3 ->index | second 1 ->delete | F ->placed at 3rd index

// array.splice(-2, 1, "F");
// console.log(array) //  [ 'a', 'b', 'c', 'F', 'e' ]

array.splice(-4, 1, "F");
console.log(array)  //[ 'a', 'F', 'c', 'd', 'e' ]


const todo = ["Do assignment", "Eat lunch", "Go home"];
// todo.splice(1, 1);
// console.log(todo);

todo.splice(1, 0, "hi");
console.log(todo);

const array3 = [1, 2, "hii", "hello"];
console.log(array3.toString());


const animal = ["The", "Thor", "Lio", "Ele"];
animal.sort();
console.log(animal);

const array1 = [1, 3, 4, 2, 10];
array1.sort();
console.log(array1);

const arra = [1, 3, 4, 2, 10];
arra.sort((a, b) => a - b);
arra.sort((a, b) => b - a);
console.log(arra);


// function(){}

// const Myfunction = (message) => {
//   console.log(message);
// };
// Myfunction("Hii");

// function MyFunction() {
// }
// MyFunction();

// const MyFunciton = () => {
// };
// MyFunciton();