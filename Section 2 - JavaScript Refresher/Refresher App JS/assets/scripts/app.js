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

/*

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
/*

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
/*
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



const user1 = new User("Maxwell", 35);
user1.greet();

*/
/*
const hobbies =  ["sports", "cooking", "reading"];
console.log(hobbies[0]);

// arr.push(val) is used to add a new item to the end of the array
hobbies.push("working");
console.log(hobbies)


// arr.findIndex takes in a function, we can use the arrow
// function and here it will loop each item looking for 
// the item we need and if found will return True 
// to the findIndex function which will return to us the
// index of the item.
// If the item is not found, false is returned and the 
// find index function does nothing.
const index = hobbies.findIndex((item) => {
    return item === "sports";
})

// shortened code of the function above:
const index2 = hobbies.findIndex((item) =>  item === "apple")

// Returns -1 if item is not found
console.log(index2);

// arr.map takes in a function and can use the arrow function
// to transform every item in the array and change it
// .map() in react is used to loop through every item and
// return JSX code which displays the list
const editedHobbies = hobbies.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
});

console.log(editedHobbies)

// We can also use maps to create objects using the items in the list
// The parenthesis before the curly brackets signifies to JS that this 
// will be an object not a function.
const objectHobbies = hobbies.map((item) => ({text: item}));

console.log(objectHobbies)
*/

/*
Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

In the newly returned array, every object must have a val key and the input array's number as a value.

For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

Answer:
function transformToObjects(numberArray) {
    const newNumberArray = numberArray.map((number) => ({val: number}))
    return newNumberArray
}

*/

