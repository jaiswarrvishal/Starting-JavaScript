// console.log(num);
// var num = 133; //undefined

// console.log(ber);
// let ber = 133; //cannot access "ber" b4 initializes

// console.log(number);
// const number = 133; //Cannot access 'number' before initialization

// wave();
// function wave(){
//     console.log("Hey!") // Position doesn't matter due to hoisting
// }

// console.log(greet());
// function greet(){
//     return "Hello!";
// }
// console.log(greet());  //output--> Hello!


// // Deff of block and global variable
// {
//     var num = 10;
//     console.log(num);  // 10
// }

// var num = 10;
// {
//     console.log(num); //10
// }

// var num = 10;
// {
     
// }
// console.log(num); //10


// {
//     var num = 10;  
// }
// console.log(num); //10

// {
//     var number = 20;
//     {
//     console.log(number) //20
//     }
// }

// var is a global variable

//let and const are block scope
    // {
    //     let number = 20;
    //     {
    //     console.log(number) //20
    //     }
    // }

    // {
        
    //     {
    //     console.log(number) //error
    //     }
    // }
    // let number = 20;

// 1. console.log("Hello");
    // Difference between var let const
    // 1. redeclare and reassign
    //          redeclare       reassign
    // var ->   possible        possible
    // let ->   not possible    possible
    // const->  not possible    not possible


// 2. Scope

// var - global scope
// let const - block scope

// 3. Hoisting
// var - hoisting applicable
// let const - hoisting not applicable

function greet() {
    console.log("Welcome");
    // return "Hi";
  }
  console.log(greet());
  
  {
    var place = "rome" //output--> rome
    var number = 20; 
  }
  console.log(place)
  
//   {
//     let number = 10; //output-->error : number is not defined(variable should be declared in same block)
//   }
//   console.log(number);
  
//    
let data = "fourty thousand";
{
    console.log(data)  //output--> fourty thousand
}

// {
//     console.log(datas)
    
//     {
//       let datas = "fourty thousand";//output--> error=> datas is not defined
//     }
// }

{
    let datas = "fourty thousand";
    {
    console.log(datas)  //output--> fourty thousand
    }
}

  
let firstNumber = 10;
{
  const secondNumber = 20;
  var thirdNumber = 30;
  console.log(firstNumber);
  {
    {
      console.log(thirdNumber);
      console.log(firstNumber);
    }
    console.log(secondNumber);
  }
}
console.log(thirdNumber);  //output--> 10 30 10 20 30



mynumber = 10;
console.log(mynumber); // bcz in case of "var" Hoisting is possible => output--> 10 ; global var...JS will take and put at the top of the code
var mynumber;



// mynumber = 10;
// console.log(mynumber);  //in "let and const-> Hoisting is not possible" => let/const output--> error; Cannot access 'mynumber' before initialization

// let mynumber;