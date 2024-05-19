//Promise

// Step-1:
// function getData(){

// }
// getData();

// Step-2:
// return new Promise((resolve, reject)=>{  //resolve, reject -> arguments

// });

// Step-3:
// setTimeout(()=>{

// }, 4000);

// Step-4:
// const result = true  //backend APIs call -> false => bcz we don't know whether true  or false
// if(result){
//     resolve("Data successfully received");
// } else {
//     reject("Failed")
// }

// Step-5:
// .then() => for success scenerio
// .catch() => for failure scenerio

// .then(()=>{
//     console.log(response, "response");
// });
// .catch(()=>{
//     console.log(error, "error");
// });


//lets merge all steps
function getData(){
    return new Promise((resolve, reject)=>{  //resolve, reject -> arguments
        setTimeout(()=>{
            const result = false  //backend APIs call -> false => bcz we don't know whether true  or false
            if(result){
                    resolve("Data successfully received");
            } else {
                    reject("Failed")
                    }
        }, 4000);
    });
}
getData()
.then((response)=>{
    console.log(response, "response");
})
.catch((error)=>{
    console.log(error, "error");
});

