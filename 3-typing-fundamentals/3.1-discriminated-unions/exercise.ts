// Define a Vehicle type using discriminated union.
// The type should have two possible shapes: car or truck.
// The car shape should have a numberOfDoors property.
// The truck shape should have a payloadCapacity property
// Write a function `describeVehicle` that accepts a Vehicle and returns a string describing the vehicle.
// The function should return "A car with X doors." for car shapes,
// "A truck with a payload capacity of Y." for truck shapes

interface Car {
    kind: "Car";
    numberOfDoors: number;
}

interface Truck {
    kind: "Truck";
    payloadCapacity: number;
}

type Vehicle = Car | Truck;

function describeVehicle(vehicle: Vehicle) {
    switch (vehicle.kind) {
        case "Car":
            return `A car with ${vehicle.numberOfDoors} doors`;
        case "Truck":
            return `A truck with payload capacity of ${vehicle.payloadCapacity}`;
    }
}



// Test cases
const car: Vehicle = { kind: "Car", numberOfDoors: 4 };
const truck: Vehicle = { kind: "Truck", payloadCapacity: 2000 };

console.log(describeVehicle(car)); // Should print the description of the car
console.log(describeVehicle(truck)); // Should print the description of the truck
