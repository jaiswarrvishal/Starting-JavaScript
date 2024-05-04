// var fact = 1;

//     for(var i=1; i<=5; i++){
//         fact *= i;
//     }

// console.log(fact)

// let one = [2, 4, 5, 10, 11, 1];
// let two = ["one", "two", "three"]
// console.log(one);
// console.log(one.length);
// console.log(one[0]);
// for(let i = 0; i < two.length; i++){
//     if(two[i].length > 4){
//         console.log(two[i]);
//     }
// }


// //for(let i = 10; i > 0; i--){
//     let sum = 0;
//     for(let i = 1; i <= 10; i++){
//      sum += i;
// }
// console.log(sum);

// let array = [2, 3, 1, 5, 4, 6]
// for(let j = array.length - 1; j >= 0; j--){
//     console.log(array[j])
// }

let pair = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 10;
for(let i = 0; i <= pair.length; i++){
    for(let j = i + 1; j <= pair.length; j++){
        if(pair[i] + pair[j] === sum){
            console.log(pair[i], pair[j]);
        }
    }
}


