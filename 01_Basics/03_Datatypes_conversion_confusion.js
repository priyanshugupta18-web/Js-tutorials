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

//=============operations=============//

// simple example of an operation:-
// let value = 3
// let negValue = -value
// console.log(negValue)

// Arithematic operations:-
// console.log(2+2) // 2 plus 2
// console.log(2-2) // 2 minus 2
// console.log(2*2) // 2 multiplied by 2
// console.log(2**3) // 2 to the power 3 ('**' used for power)
// console.log(2/5) // 2 divided by 5
// console.log(2 % 5) // 2 modulus 5(modulus operator is used for finding remainder.)

// Note: In the above case the numbers over which the operations are being performed are called operands and the signs which are which are symbolising a particular operation being performed are called Operators.

// let str1 = "Hello, "
// let str2 = "Priyanshu Gupta"

// let str3 = str1 + str2
// console.log(str3)
// In the above, We saw simple concatenation of two strings.

// Performing operations between operands of different datatypes:-

// console.log(1 + "2") // output: firstly 1 will be converted into string and then they will concatinate and result will be 12.

// console.log("1" + 2) // output; firstly 2 will be converted to the string and then they will concatinate and result will be 12.

// console.log("1" + 2 + 2) // output: Here, since 1 is a string which is comming at the first position that's why both the 2 will be converted to string and then they will concatinate and the result will be 122.

// console.log(1 + 2 + "2") // Here, since 2 is a string which is comming at the last position that's why 1 and 2 will be arithematically added to each other and then the result be converted to string which will further contcatinate with 2 to give the final output: 32.

// Note: See operator precedence is one thing but we should always remember as a professional that are codes are going to be reviewed multiple times, so we should keep it clean and readable for other by applying brackets.

// Operations on some other Datatypes:-

// console.log(+true) // output: 1
// console.log(+false) // output: 0

// console.log(+"") // output: 0
// console.log(+"Priyanshu") // output: 1

// Pre-increment and post-increment operators:-
// Pre-increment Operator:-
// It basically increases the value of a constant or a variable by 1 before it's utilisation/ usage.
// for example:-
//let num = 5
//console.log(++num) // output: 6 (first increased by 1, then printed)

//Post-increament operator:-
//It basically utilises the constant or variable and then increases its value by 1.
// for example:-
//let num = 5
//console.log(num++) // output: 5 (first utilised and then increased by 1)
//console.log(num) // output: 6 (shows that the value was increased by 1 after printing).
