// Exercise: Typing Objects in TypeScript

// Question 1: Create an object literal representing a book with the following properties:
// - title: string
// - author: string
// - pages: number

const book = {
    title: "Book Title",
    author: "Book Author",
    pages: 252
}

// Question 2: If you try adding another property to the object literal book object, does TypeScript allow it?
// Absloutely not!

// Question 3: Define an interface `Car` with the following properties:
// - make: string
// - model: string
// - year: number
// Then, create an object that conforms to this interface.

interface Car {
    make: string,
    model: string,
    year: string
}

const car1: Car = {
    make: "Make",
    model: "Model",
    year: "Year",
}

// Question 4: Define a type alias called `Car2` with the same shape as `Car`.
// Then, create an object that conforms to this type alias.
type Car2 = {
    make: string,
    model: string,
    year: string
};

const car2: Car2 = {
    make: "Make2",
    model: "Model2",
    year: "Year2",
}

// Question 5: Create an interface called `Car3` with the same shape as `Car`,
// but allow any additional properties to be added.

interface Car3 {
    make: string,
    model: string,
    year: string
    [key: string]: string // index singature
}

const car3: Car3 = {
    make: "Make3",
    model: "Model3",
    year: "Year3",
    Engine: "Engine",
    // "Engine": "Engine" works too!
}