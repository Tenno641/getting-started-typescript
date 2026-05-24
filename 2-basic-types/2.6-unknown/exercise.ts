// Exercise: Working with the `unknown` type in TypeScript

// 1. Declare a variable of type `unknown` and assign a value to it.
let value: unknown = "unknownValue";

// 2. Write a function `isString` that takes an argument of type `unknown`
// and returns true if the argument is a string.
function isString(value: unknown) {
    return typeof(value) === "string"; 
}

// 3. Call the isString function above to check if the `unknownValue` is a string,
// and if so, log its length to the console.
if (isString(value)){
    console.log(value.length)
}
