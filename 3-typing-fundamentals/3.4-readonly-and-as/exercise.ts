// Exercise: Using TypeScript's readonly feature

// 1. Mark age and address as readonly in the Person interface below.
// Then note that the modifications in the `updatePerson` function are not allowed.

interface Address {
  street: string;
  city: string;
}

interface Person {
  firstName: string;
  lastName: string;
  readonly age: number;
  readonly address: Address;
}

function updatePerson(person: Person) {
  person.age = 30; // Modification is not allowed
  person.address = { street: "New Street", city: "New City" }; // modification is not allowed
  console.log(person);
}

// 2. Make the personConst below immutable by marking `as const`.
// Then note that you cannot mutate the properties of the object below.

const personConst = {
  firstName: "John",
  lastName: "Doe",
}

// Try to mutate person.age and person.address.
personConst.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.
