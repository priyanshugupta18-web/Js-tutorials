//let score = "33"

//console.log(typeof score)
//console.log(typeof(score)) // both are basically one and the same thing, just syntax is different

// type conversion

// converting string to number:-
//let scoreInNumber = Number(score)
//console.log(typeof(scoreInNumber))// output: number

//score = "33abc"
//let scoreInNumber = Number(score)
//console.log(typeof(scoreInNumber))// output: number
//console.log(scoreInNumber)// output: NaN(not a number)
// here, when we try to convert a string to a number (but, the string contains some elements which cannot be converted to a number), then JavaScript doesnot impose any restriction in type of conversion, rather it converts the sreing into the number but the value stored in it is NaN.

// converting null type variable to a number:-
//score = null // stored null this time
//let scoreInNumber = Number(score)
//console.log(typeof(scoreInNumber))//output: number
//console.log(scoreInNumber) // output: 0
// here, when we typecasted null type variale into string and stored the output in another varibale and checked its type then we got that it was number but, when we printed the variable we got that 0 was stored in it.

// converting undefined variable to number:-
// when we take an undefined variable and try to typecast it into a number and store the output into an variable then when we check the type of the variable we get number but we check the value stored in it, then we get that NaN was stored in it.

// converting boolean variable to a number:-
// when we take a variable in which boolean(true or false) data was stored and try to typecast it into a number and store the output into an variable then when we check the type of the variable we get number but we check the value stored in it, then we get:-
// 1. 0 if the data stored was 'false',
// 2. 1 if the the data stored was 'true'.

// converting string type variable to a nummber:-
//when we take a variable in which string was stored (empty or non-empty) and try to typecast it into a number and store the output into an variable then when we check the type of the variable we get number but we check the value stored in it, then we get:-
//1. 0 if the string stored was empty,
//2. 1 if the string stored was not-empty.

// converting number into boolean:-
// let isLoggedIn = 1
// BooleanisLoggedIn = Boolean(isLoggedIn)
// console.log(typeof BooleanisLoggedIn) // output: boolean
// console.log(BooleanisLoggedIn) // output: true 
// Here, since we stored the value 1 in isLoggedIn, we got output 'true', if we had strored the value 0, we would have got output 'false'.

// converting a string into boolean:-
// if we try to convert a string into boolean and store it in some other variable then the output is 'true' if the string is non-empty and the output is 'false' if the string is empty.

// converting a number into string:-
//if we try to convert a number into string and store it in some other variable then we can do it in the following manner:-
// someNumber = 18
// stringNumber = String(someNumber)
// if we check the output we get:-
// console.log(typeof stingNumber) // output: String
// console.log(stringNumber) // output: 18 




