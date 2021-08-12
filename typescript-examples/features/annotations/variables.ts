// annotation => :Type
let apples: number = 5;
// apples = "test";
// inference example: let apples = 5; typescript finds the type
// inference works when declaring and initializing a variable at the same line
// for example: let apple; apple = 5; inferene not working, apple is type of any

let speed: string = "fast";
// speed = 5;

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];

let myNumbers: number[] = [1, 2, 3, 4];

let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => console.log(i);

// When to use annotations
// 1) A function that returns the 'any' type

// Bad practice
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);

// coordinates.sdfsdfsdfsf;

// Fix
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// coordinates.fsdfsfsfsfs

// 2) When we declare a variable and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) When we have a variable whose type cannot be infered correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
