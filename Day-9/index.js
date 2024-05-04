// Q. given an array, find two numbers whose addtion is target.
var array = [1, 2, 3, 4, 5, 6];
var target = 5;

// var count = 0;

console.log("the two numbers whose addition is target(means 5)")
for(var i = 0; i<array.length; i++){
    // for(var j = 0; j<array.length; j++){ // count => 36
    for(var j = i + 1; j<array.length; j++){ // count => 15
        // console.log("target");
        // count++;
        // console.log(array[i])
        // console.log(array[i], "+", array[j], "=", array[i] + array[j]);
        if(array[i] + array[j] === target){
            console.log(array[i], array[j])
        }
    }
}
// console.log("count", count)