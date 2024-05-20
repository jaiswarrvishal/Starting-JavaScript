//map()
// const flower = [2, 4, 6, 8];
// const flw = flower.map((ele) => ele + 3);
// console.log(flw);

// Q. 1=> Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.
// input: [1, 2, 3, 4, 5]

// function squareArray(arr) {
//     return arr.map(number => number * number);
//   }
  
//   var numbers = [1, 2, 3, 4, 5];
//   console.log(squareArray(numbers)); 
  // var squared = squareArray(numbers);
  // console.log(squared); 

  
//using loop
// function squareArray(arr) {
//   const squaredNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     squaredNumbers.push(arr[i] * arr[i]);
//   }
//   return squaredNumbers;
// }

// const numbers = [1, 2, 3, 4, 5];
// const squared = squareArray(numbers);
// console.log(squared); // Output: [1, 4, 9, 16, 25]

// Q.2 => Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).
//  function isPalindrome(name){
//       var str="";
//       for(var i=name.length-1;i>=0;i--){
//           str+=name[i];
//           // console.log(name[i])
//       }
//       if(name===str){
//           console.log("True")
//       }
//       else{
//           console.log("False")
//       }
//   }
//   isPalindrome("madam")

  // other way instead
//   function isPalindrome(name) {
//     let str = "";
//     for (let i = name.length - 1; i >= 0; i--) {
//         str += name[i];
//     }
//     return name === str;
// }

// console.log(isPalindrome("madam")); // True
// console.log(isPalindrome("hehe"));

// other method =>
//   function isPalindrome(name) {
//     const reversed = name.split('').reverse().join('');
//     return name === reversed;
// }
// console.log(isPalindrome("jahaj")); // True
// console.log(isPalindrome("mama")); // False


// Q.3 => Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// array1=[1,2,3,4];
// array2=[3,4,5,6];

// array3=[]

// function common(array1,array2){
//     for(var i=0;i<array1.length;i++){
//         for(var j=0;j<array2.length;j++){
//             // console.log(array1[i],array2[j])
//             if(array1[i]===array2[j]){
//                 array3.push(array1[i])
//             }
//         }
//     }
//     return array3
// }

// const array4=common(array1,array2);
// console.log(array4)


//instead this we can do 
//array.filter(function(currentValue, index, arr), thisValue)
// function findIntersection(arr1, arr2) {
//   // Use filter and includes method
//   return arr1.filter(value => arr2.includes(value));
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// const intersection = findIntersection(array1, array2);
// console.log(intersection); // Output: [3, 4]


// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.
// Input: {name: "Alice", age: 25}, "name"

// function getValue(obj, key, defaultValue = undefined) {
//   // Check if the key exists in the object
//   if (key in obj) {
//       return obj[key];
//   } else {
//       return defaultValue;
//   }
// }

// const person = { name: "Alice", age: 25 };
// const key1 = "name";
// const key2 = "address";

// console.log(getValue(person, key1)); // Output: "Alice"
// console.log(getValue(person, key2)); // Output: null (default value)




// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.
// Input: 12345

// function getDigits(number) {
//   // Convert the number to a string to easily access each digit
//   const numberString = number.toString();
  
//   // Create an empty array to store the digits
//   const digitsArray = [];
  
  // Loop through each character in the string
//   for (let i = 0; i < numberString.length; i++) {
//       // Convert the character back to a number and add it to the array
//       digitsArray.push(Number(numberString[i]));
//   }
  
//   // Return the array of digits
//   return digitsArray;
// }
// const inputNumber = 12345;
// const digits = getDigits(inputNumber);

// console.log(digits); // Output: [1, 2, 3, 4, 5]



// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").
// Input: "hello"

// function dupChar(inputString) {
//   let dupString = ""; // Start with an empty string

//   // Loop through each character in the input string
//   for (let i = 0; i < inputString.length; i++) {
//       // Add each character twice to the new string
//       dupString += inputString[i] + inputString[i];
//   }

//   return dupString; // Return the new string with duplicated characters
// }

// const input = "hello";
// const output = dupChar(input);

// console.log(output); // Output: "hheelllloo"



// Question 7:
// Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.
// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name"

var obj = [{name:"Alice"},{name:"Bob"},{name:"Charlie"}];
function getKeyValue(){
    for (let key in obj) {
        console.log(obj[key]);
      }
}
getKeyValue(obj);


// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.
// Input: "This is a sample sentence."



// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.
// Input: [10, 2, 14, 5, 7]

array=[10, 2, 14, 5, 7];
function secondSmall(array){
    array.sort((a,b)=>a-b);
    return array[1];
}

console.log(secondSmall(array));



// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".
// Input: new Date(2024, 4, 15)


