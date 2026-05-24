// Exercise: Understanding the `any` type in TypeScript

// 1. Declare a variable with the `any` type and assign it a string value.

let variable: any = "String Value";

// 2. Reassign the variable to a number.
variable = 2;

// 3. Reassign the variable to an object with a name property that's set to "TS".
const object = { property: "TS" }

variable = object;

// 4. Create a function that accepts a parameter of type `any` and logs its type and value.
function log(value: any) {
    console.log(`type: ${typeof(value)} - Value ${value}`);
}

// 5. Call the function with different types of arguments (string, number, object, array).
log(object);
log("Name");
log(12);
log([1, 2, 4]);

// 6. Explain why using `any` can be both useful and potentially problematic in TypeScript.
// useful in case the logic not restricted or limited to specific logic.
// problematic as allowin all the types causes unclear errors, runtime crashes, not showin any intent. 