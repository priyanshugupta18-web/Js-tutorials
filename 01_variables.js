const accountId = 144739
let accountEmail = "priyanshuguptawebdev@gmail.com"
var accountPassword = "Priyanshugupta@1234"
accountCity = "Chanpatia"
/* accountState;// leaving a variable undefined is not good, you should either assign some value to it or leave it undefined, otherwise compiler will throw an error.*/

// accountId = 2764348 //accountId can not be overwritten as it is already declared as constant 
console.log(accountId)

/*variables can be overwritten as you can see below (obviously, that's why they are called variables), in javascript, we can define variables in three ways:-
1. Using var
2. using let
3. Don't write anything the compiler will understand automarically

Using var is the worst which can be done, because javascript is not very sound language in context of syntax, in case of var the issue is that, the variables defined using var are not scope specific, hence it is mostly suggested to do not incorporate it in your code. whereas in case of let, there is no such issue therefore, you can use it freely. No comments on the third option.

The conclusion is that you should always try to use let in your code for the best practices.*/

accountEmail = "pg7297603@gmail.com"
accountPassword = "Priyanshu@181818"
accountCity = "Jammu"

console.table([accountEmail, accountPassword, accountCity])

