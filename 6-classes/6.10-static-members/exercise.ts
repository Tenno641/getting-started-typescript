// Exercise 1: Change the class below to use a static field `pi`
// and a static method `calculateArea` that accepts a radius.

class Circle {
  static pi: number = 3.14;

  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  static calculateArea(radius: number): number {
    return Circle.pi * radius * radius;
  }
}

// Exercise 2: Create a class `Counter` with a private static field `count`
// that tracks of the number of instances created.
// Include a `getCount` method that returns the current count.

class Counter {
  private static count: number = 0;
  
  constructor() {
    Counter.count++;
  }
  
  static getCount() {
    return Counter.count;
  }
}
