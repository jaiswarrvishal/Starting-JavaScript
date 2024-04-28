//switch case=>


var gender = "female";
    switch (gender){
        case "other":
        console.log("the gender is other");
        break;

        case "male":
        console.log("the gender is male");
        break;
        
        case "female":
        console.log("the gender is female");
        break;

        default:
        console.log("define your gender.")
    }


// && || Operators

// && Logical Operator : T && T => T rest F(atleast one False)
// || Logical Operator : F || F => F rest T(atleast one True)

var first = 10;
var second = 20;
var third = 30;

console.log(first > second);
console.log(first > third);
console.log(second > third);

console.log(30 > 20 && 20 > 10 && 3 > 10); //true && true && true ->
// if all values are true then only && operator will return true
// if even one value found false then && operator will return false

console.log(3 < 2 || 3 < 1 || 2 < 1); // true || true || true 
// if even one true found then || operator will return true 
// when all conditions are false then only it'll return false

