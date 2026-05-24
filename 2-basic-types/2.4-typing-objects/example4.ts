// Use index signature [key: string] to allow any other properties
interface UserWithAnyProperties {
  id: number;
  name: string;
  [key: string]: any;
  [key: number]: any; // index signature
}

const user: UserWithAnyProperties = {
  id: 5,
  name: "Cory",
  day: "sun",
  night: "moon",
  1: "first",
  "Greeting": "Good Day!"
};

console.log(user.day);
console.log(user.night);
console.log(user.Greeting);
console.log(user["Greeting"]);
console.log(user[1]);