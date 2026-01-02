// Number => A Datatype is JavaScript used to represent both integers and floating point numbers.

// Declaration as a primitive datatype:-

const Score = 400 // integer
const temperature = 36.5 // floating point number

console.log(Score) // output: 400
console.log(temperature) // output: 36.5

// Declaration as an Object ("new" keyword):-

const Balance = new Number(100)
console.log(Balance) // output: [Number: 100]

// Properties and Methods of Number datatype:-

console.log(Balance.toString().length) // output: 3 (here toString() method converts the number to a string and length property gives the length of that string)

console.log(Balance.toFixed(2)) // output: 100.00 (here toFixed() method formats the number to 2 decimal places)

const anotherNumber = 23.8966

console.log(anotherNumber.toPrecision(3)) // output: 23.9 (here toPrecision() method formats the number to 3 significant digits)

const hundreds = 1000000

console.log(hundreds.toLocaleString()) // output: 1,000,000 (here toLocaleString() method formats the number with commas as thousands separators)

console.log(hundreds.toLocaleString('en-IN')) // output: 10,00,000 (here toLocaleString() method formats the number according to Indian numbering system)

// Math Object in JavaScript:-

console.log(Math) // output: object [math] { } (here Math is a built-in object in JavaScript that provides various mathematical constants and functions)

// constants :-

console.log(Math.PI) // output: 3.141592653589793 (here PI is a mathematical constant representing the ratio of a circle's circumference to its diameter)

console.log(Math.E) // output: 2.718281828459045 (here E is a mathematical constant representing Euler's number) 

// Methods :-

console.log(Math.abs(-4)) // output: 4 (here abs() method returns the absolute value of a number)

console.log(Math.round(4.6)) // output: 5 (here round() method rounds the number to the nearest integer)

console.log(Math.ceil(4.2)) // output: 5 (here ceil() method rounds the number up to the next largest integer)

console.log(Math.floor(4.9)) // output: 4 (here floor() method rounds the number down to the next smallest integer)

console.log(Math.min(4, 3, 6, 8)) // output: 3 (here min() method returns the smallest of the given numbers)

console.log(Math.max(4, 3, 6, 8)) // output: 8 (here max() method returns the largest of the given numbers)

console.log(Math.random()) // output: a random number between 0 (inclusive) and 1 (exclusive) (here random() method returns a pseudo-random number)

console.log(Math.random() * 10) // output: a random number between 0 and 10 (here we multiplied the random number by 10 to get a number in the range of 0 to 10), here the upper limit is exclusive

console.log((Math.random() * 10) + 1) // output: a random number between 1 and 11 (here we added 1 to the random number to get a number in the range of 1 to 11), here the upper limit is exclusive

console.log(Math.floor((Math.random() * 10) + 1)) // output: a random integer between 1 and 10 (here we used floor() method to round down the random number to get an integer in the range of 1 to 10), here both limits are inclusive

// You can change the range of random numbers by changing the multiplier and the addition value accordingly.

// For example, to get a random integer between 10 and 20 (both inclusive):

let min = 10
let max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min)) // output: a random integer between 10 and 20

// Here, (max - min + 1) gives the range of numbers (which is 11 in this case), and adding min shifts the range to start from 10.


