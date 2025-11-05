// 1 Завдання
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
// Write a function calculating circumference of a Circle.

function circleCircumference(circle) {
  return +(2 * Math.PI * circle.radius).toFixed(6);
}

// 2 Завдання
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
// If the length of the key is equal to 5, then push the key to your array. 
// Separately, if the length of the value is equal to 5, then push the value to your array.
// At the end, return your array.

function giveMeFive(obj) {
  const resultOfArray = [];
  for (let key in obj) {
    if (key.length === 5) resultOfArray.push(key);
    if (obj[key].length === 5) resultOfArray.push(obj[key]);
    }
    return resultOfArray;
}

// 3 Завдання
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
// The function buildFun will return an array of functions.
// The single parameter accepted by buildFun is the number of elements N of the array returned.

function buildFun(n) {
  const resultOfArray = [];
    for (let i = 0; i < n; i++) {
        resultOfArray.push(function (){
        return i;
        })
    }  
    return resultOfArray;
}

// 4 Завдання
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
// Define the following classes that inherit from Animal.
class Shark extends Animal {
  constructor(name,age,status) {
    super(name, age, 0, "shark", status);
  }
}
class Cat extends Animal {
  constructor (name,age,status) {
    super(name, age, 4, "cat", status);
  }
  introduce () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() { return `Hello ${this.master}`; }
}