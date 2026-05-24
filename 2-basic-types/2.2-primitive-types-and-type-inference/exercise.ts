// Exercise: Declare variables with different primitive types in TypeScript

// 1. Declare a variable named `planet` of type string and assign it the value "Earth".
let planet: string = "Earth";

// 2. Declare a variable named `isRaining` of type boolean and assign it the value false.
let isRaining = false;

// 3. Declare a const named `pi` of type number and assign it the value 3.14.
const pi: number = 3.14;

// 4. Assign a value of the wrong type to one of variables above. What happens?
isRaining = "abc" // string is not assignable to type boolean

// 5. Remove the explicit type annotations above, then hover over each variable's name. Does anything change?
// we still see the error
