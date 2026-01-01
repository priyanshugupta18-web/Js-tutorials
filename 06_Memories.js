//There are two types of memories:-

//1. Stack: Used for storing primitive datatypes, in case of stack we get the copy of the variable defined.

//2. Heap: Used for storing non-primitive datatypes, in case of heap we get the reference of the variable defined.

//Let us understand the Stack and Heap and the difference between them with the help of examples:-

//Stack Example:-
let myYoutubeName = "priyanshu.com"
let anotherYoutubeName = myYoutubeName // here anotherYoutubeName will get the copy of myYoutubeName as string is a primitive datatype and is stored in stack memory.
anotherYoutubeName = "codeminded.com" // here we changed the value of anotherYoutubeName, but myYoutubeName will remain unchanged as both the variables are stored in stack memory and anotherYoutubeName has its own copy of myYoutubeName.
console.log(myYoutubeName) // output: priyanshu.com
console.log(anotherYoutubeName) // output: codeminded.com

//Heap Example:-

let userOne = {
    email: "user@gmai.com",
    upi: "user@upi"
}

let userTwo = userOne // here userTwo will get the reference of userOne as object is a non-primitive datatype and is stored in heap memory.

userTwo.email = "priyanshu@google.com"

console.log(userOne.email) // output:priyanshu@google.com
console.log(userTwo.email) // output:priyanshu@google.com

//Explanation: Here, when we changed the email property of userTwo, it also changed the email property of userOne because both userOne and userTwo are referencing the same object in heap memory.

//Refer to the Diagram which is drawn in my Notebook for better understanding.

