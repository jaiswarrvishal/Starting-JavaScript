// Array;

// var myArray = [1, 2, 3, 4, 5, 6, 7];
// myArray[0] // 1
//myArray[5] // 6
// myArray[2] // 3

// Object

// var myObject = { key1 : value1 , key2 : value2 , key3 : value3}

var Details = {
    name: "Shamiksha",
    age: 13,
    location: "Mussoory",
    isGirl: true,
    travelPlace: [
      "Buddha Point",
      "Gun Point",
      "Waterfall",
      "LBSNA",
      ["one", "two", "three"],
    ],
    placeCost: { BuddhaPoint: 150, LBSNA: 1500 },
  };
  
// console.log(Details.location) //Mussoory'
// console.log(Details.travelPlace) 
//output => [
//     'Buddha Point',
//     'Gun Point',
//     'Waterfall',
//     'LBSNA',
//     [ 'one', 'two', 'three' ]
//   ]

// console.log(Details.travelPlace[0]) // Buddha Point
// console.log(Details.travelPlace[4]) //[ 'one', 'two', 'three' ]
// let sub = (Details.travelPlace[4]) 
// console.log(sub[2]) // three
// OR 
// console.log((Details.travelPlace[4][2])) // three

  
//   const subArray = Details.travelPlace[4];
//   console.log(subArray[2]);
  
//   for(var i = 0; i < subArray.length; i++){
//       if(subArray[i] === "one"){
//           console.log(i)
//       }
//   }
  

//other way we can also access the value of Object =>
  console.log(Details["name"])
  console.log(Details["age"])
  console.log(Details["travelPlace"].length)
  
//   const keys = Object.keys(Details);
//   console.log(keys);
//   const values = Object.values(Details);
//   console.log(values);
  
  
//   for (let key in Details) {
//       console.log(key, Details[key]);
//     }

// Q. Write a function that takes two numbers as arguments and returns their sum.
let number1 = 1;
let number2 = 20;
function sum(number1, number2){
    console.log(number1 + number2);
}
sum(number1, number2)

// Q. Write a function that takes a string as an argument and returns the string in uppercase.
function upperCase(text){
    return text.toUpperCase();
}
const message = "Hello dost!";
const result = upperCase(message);
console.log(result);



for(let num = 5; num > 0; num--){
    console.log(num);
}
