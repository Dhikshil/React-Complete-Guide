// import apiKey from "./util.js";
// import { apiKey, abc as con} from "./util.js";
// import * as util from"./util.js";


// console.log(apiKey)
// console.log(con)

// console.log(util.apiKey)
// console.log(util.default)
// console.log(util.abc)

// let can be used to create new block-scoped variables
// var can be used to create new function-scoped variables
// const can be used to create new unchangeable variables

// "+" can be used to add numbers but also conatenate strings
// ===  checks for equality with type aswell as value returning bool
// == this is different as it is more loose 

if (10 === 10) {// condition goes here
    console.log("10 does equal to 10");// What happens if condition is met
}

// functions create code which can be used later and multiple times, sub-routines
function adder(numOne, numTwo = 10) {// function initalised and is taking in parameters
    // default values can be kept in these parameters
    console.log(numOne +" plus "+ numTwo + " =",String(numOne+numTwo));
    return numOne + numTwo;
}

const sum = adder(1, 2);
console.log("The sum is", String(sum))

/*
Exercise: Working with Functions
Your task is to write a new function that should be named combine and have the following characteristics:

Accept three input values

Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

Return the calculated result
*/

function combine(a, b, c) {
    return a * b / c
}


// Arrow  functions aka. anonymous functions cqn be used 

(userName, message) => {
    console.log("hellow");
    return userName + message;
}

// If only taking one parameter, you can ommit the parenthesis
// If no other logic is used but a return statement, the {} can be ommitted

// Creating objects
/*
Normal inefficent code
const maxName = "max"
const maxAge = 32
*/

// code using objects:
// objects also store functions known as methods
const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello! My name is,", this.name);
    }
};

// Access a property of the object using user.name or user.age

const greeting1 = user.greet()

// Classes can be used to create blueprints of objects
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello! My name is,", this.name);
    }
}