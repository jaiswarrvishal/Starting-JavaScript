//BinarySearch=>

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 10;

function binarySearch(array, target){
    var left = 0; //2nd iter-> 5 |3rd iter-> 8 | 4th->9 
    var right = array.length - 1; //10-1->9 | 9 | 9 | 9
    while(left <= right){  //0<=9->true | 5<=9->true | 8<=9->T | 9<=9->T
        var midIndex = Math.floor((left + right)/2); //Math.floor(4.5)->4 | 7 | 8 | 9
        console.log(midIndex, "midIndex", array[midIndex]) //4 5 | 7 8 | 8 9 | 9 10
            if(array[midIndex] === target){  //5=10->false | 8=10->F | 9=10->F | 10=10->T
                return midIndex;  // 9
            } else if(array[midIndex] < target){ //5<10->true | 8<10->T | 9<10->T | 10<10->F
                console.log(array[midIndex], target, "element is lesser than target"); //5, 10, element is lesser than target | 8 10 | 9 10
                left = midIndex + 1; //4+1->5 | 7+1->8 | 8+1->9 | 
            } else if(array[midIndex] > target){ 
                console.log(array[midIndex], target, "element is greater than targte");
                right = midIndex - 1;
            }
        }
    }

let result = binarySearch(numbers, target);
console.log(result);
