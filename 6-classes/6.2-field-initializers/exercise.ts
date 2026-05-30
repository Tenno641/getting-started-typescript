// Exercise: Class Field Initializers in TypeScript

// Question 1:
// Create a class `Car` with a field `year` that is initialized to 2026 and `make`
// that is initialized to "Toyota".
// Provide a method `getInfo` that returns a string in the format "Year: 2026, Make: Toyota".

class Car {
    year: number;
    make: string;
    
    constructor(year: number = 2026, make: string = "Toyota") {
        this.make = make;
        this.year = year;
    }
    
    getInfo(): string {
        return `year: ${this.year}, Make: ${this.make}`;
    }
}

const car: Car = new Car();
console.log(car.getInfo());
