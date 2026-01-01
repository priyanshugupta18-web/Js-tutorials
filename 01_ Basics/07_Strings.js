//anything written inside double quotes("") or single quotes('') is called a string in JavaScript

//let myName = "Priyanshu"
//let myChannel = 'priyanshu.com'

// String Concatenation:-

let firstName = "Priyanshu"
let secondName = "Gupta"
let fullName = firstName + " " + secondName // here we concatenated firstName and secondName with a space in between them.
console.log(fullName)// output: Priyanshu Gupta

// String interpolation (template literals):-

let greetins = `Welcome ${fullName} to the world of JavaScript
, Hope you will soon become a full-stack developer` // here we used backticks(``) to define a string and used ${} to insert variables inside the string. using backticks also allows us to write multi-line strings easily.
console.log(greetins)
// output: Welcome Priyanshu Gupta to the world of JavaScript
// , Hope you will soon become a full-stack developer

// Declaration of String as an Object ("new" keyword):-

const gameName = new String('Hiteshhc')

console.log(gameName[0])//output: H
console.log(gameName.__proto__) //output:

console.log(gameName.length) // output: 8
console.log(gameName.toUpperCase()) // output: HITESHHC
console.log(gameName.charAt(2)) // output: t
console.log(gameName.indexOf('t')) // output: 2

const newString = gameName.substring(0,4) // here we extracted a substring from gameName starting from index 0 to index 4 (4 is not included). we cannot use negative indexing in substring method.
console.log(newString) // output: Hite

const anotherString = gameName.slice(0,4) // here we extracted a substring from gameName starting from index 0 to index 4 (4 is not included)
console.log(anotherString) // output: Hite

const yetAnotherString = "   Hello World !    "
console.log(yetAnotherString.trim()) // output: Hello World ! (here trim() method removes the extra spaces from the start and end of the string)

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // output: https://hitesh.com/hitesh-choudhary (here replace() method replaces the first occurrence of '%20' with '-')

console.log(url.includes('hitesh')) // output: true (here includes() method checks if the string contains the substring 'hitesh' or not)

const newGameName = new String("Hitesh-hc")
console.log(newGameName.split('-')) // output: [ 'Hitesh', 'hc' ] (here split() method splits the string into an array of substrings based on the separator '-')

