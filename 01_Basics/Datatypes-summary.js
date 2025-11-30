// Two types of Data:-
// 1. Primitive Datatypes:-
//    7 primitive Datatypes: string, Number, Null, Undefined, Bigint, Boolean,Symbol

// 2. (Reference) Non-Primitive Datatypes:-
//    Array, Objects, Functions

// Note:- The classification of Datatypes is done on the basis of their storage and accessibility.

//JavaScript is a dynamically typed language
// This means that you do not need to explicitly define the data type of a variable when you declare it. The type is determined at runtime, and a single variable can hold values of different types throughout its existence.

// Application of Symbol:-
//    const id = Symbol('Priyanshu')
//    const anotherId = Symbol('Priyanshu')
//    console.log(id === anotherId) // output: False

// Explaination: Here, when we converted the same string to a symbol twice, we got two different outputs, reason being two different symbols are generated for the same string, and that's why the symbols are used.

// Bigint:-
// const bigNumber = 436841398n // by default any practiclly countable number is stored in number datatype (as JS is dynamically typed language) but if we want to store some number in bigint, then we will have to write n at the n=end of the number as I did above.

// console.log(typeof bigNumber) // output: bigint

// Array:-

// const Cars = ["Lamborgini", "Ferrari", "Mustang", "Bentlay"] 
// Array in Java Script is very similar to list in Python, I don't know what is the extent of similarity among them, but atleast the syntax of definition is same for both of them.

// Object:-

// MyObj = { "Rajat":"Car", "Anirudhh": "Games", "Priyanshu":"Web Development" }
// Objects in Java Script is quite similar to Dictionary in Python, I don't know what is the extent of similarity among them, but atleast the syntax of definition is same for both of them.

// Functions:-

// const print = function(){
//     console.log("Hello World !")
// }

// Note:-
//when we use typeof function to check the datatype stored in a particular constant or variable, then in case of null we will get the output as object whereas in case of non-primitive datatypes like Array or objects, we get the output as object and in case of functions we get the output as functional objects.



