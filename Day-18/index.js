//map()
const flower = [2, 4, 6, 8];
const flw = flower.map((ele) => ele + 3);
console.log(flw);

function squareArray(arr) {
    return arr.map(number => number * number);
  }
  
  var numbers = [1, 2, 3, 4, 5];
  var squared = squareArray(numbers);
  console.log(squared); 