// Exercise: Understanding TypeScript's Global Keyword

// Question 1:
// Declare a global variable named `cart` of type string[] and assign it to an empty array.
declare global {
    let cart2: string[];
}

// Question 2:
// Create a global function named `log` that takes a message of type string and returns void.
declare global {
    function log(value: any): void
}

// Question 3:
// Create a global constant named `GLOBAL_CONSTANT` of type number and assign it the value 42.
declare global {
    const GLOBAL_CONSTANT2: number;
}

const GLOBAL_CONSTANT2 = 42;

console.log(GLOBAL_CONSTANT2)

// Question 4:
// Extend the global `Window` interface to include a method `customAlert`
// that takes a string and returns void.
// Then implement the `customAlert` method to call alert with the provided message.
declare global {
    interface Window {
        customGlobalAlert(message: string): void;
    }
}

global.window.customGlobalAlert = function(message: string): void {
    console.log(message);
}

global.window.customAlert("Message");