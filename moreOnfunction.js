// difference between funcion and method

// Direct execution
 function testFunction(){
     console.log("This is just for test");
 }
testFunction();

 // Indirect execution
 /*
    -   Here document is a global variable which give access to html
        document
    - getElementById is a method in document object
    - Method is nothing but a function in terms of object
    - property in javaScript is a varible in terms of object 
 */ 
// let tesBtn = document.getElementById('test-button')
// tesBtn.addEventListener('click',testFunction); 

// creating a method

/* 
    - In this we have created an object person 
     like python it doesn't need any instance creation the 
     istance will be automaticlly created
*/
let person = {name :"saurav",
age: "21",
greet :function test(){

    return "Helllo saurav"
}}
console.log(person.greet());
console.log(typeof(person.greet)); // It is a type of function which we called a method in terms of object

// Function expression in javaScript
/* 
    -   Storing the value of function in a variable is calle d
        function expression
        When we assign a function to variable so calling a
        Global execution will not store function as variable
        ,inplace of that it store the variable in in global execution
    -While function expression hoisting is not done
    -Another advantage of function expression is that we don,t need
    any function name as we are not storing the function declration
    in the name of function as we are storing in the name of variable
    we are assigning it.

    - The function which don,t have name are called ananymous function
    - These type of function are mainly used in the case of indirect
    function. 
*/
let testfunction = function(){
    console.log("This is a type expression of function");
}

testfunction();

// Rest operator in JavaScipt
/* 
-It is a kind of magic operator(...) which collect all remaining
    elements into an array
-It allows us to represent an idefinite number of arguments as 
an array
*/  

function sumAll(a,b,c) {
    return a+b+c;
}
console.log(sumAll(2,4,7));// 13
// Here are function take sonly thtree parameters 
// If we want to take multiple parameters we will use array to
// take our arguments
function arrAdd(...arr){
    let sum =0;
    for(let i of arr){
        sum = sum +i;
    }
    return sum;
}
//console.log(arrAdd([1,2,3,4,56]));// Here we take multiple arguments
// Here we have an limitation that is we have to pass
// our parameter as any always to overcome that we have to use
// operator in this
console.log(arrAdd(1,2,3,4,5,6));
/* 
    - Things which have to keep in mind while using this
     this is always used at the end of parameters while giving 
     to function as the definaton of rest operator is the rest of 
     element
     -It was used in ES5
     -It can we used in arrow function also
     Before the introduction of rest operator we use 
     argument method do this kind of things
     */
// Closure Function in JavaScript
/* 
- Control what is and isn,t scope in a particlar function.
- What variables are shared between sibling function
- Coding in javaScript without Knowing Closures is like a
Speaking a language without nderstanding of its grammar rule

What is Closure?
Combination of function bundles together with reference
to its surrounding  state

Suppose we have created a function  and in this we have
declared some variable and define a new function within
the function so the variable defined in the outer function
can be accesssed through the inner function
Becase that variable lie in the lexial scope of
the inner function.
-it give
*/

// Lexical Scope
/* 
Location where a variabke is declared to determine  where
that variable will be availabel

*/
function outer(){
    let name ="saurav";
    function displayName(){
        return name;
    }
    return displayName;
}
let b = outer()
console.log(b());
/* 
How to se a closure?
To use a closure,define a fnction inside another
function  and expose it.
It is used for object privicy

*/
// Example
function makeAdder(x){
    return function(y){
        return x+ y ;
    }
}
let add5 = makeAdder(5)
console.log(add5(8));

/* 
    - call back function in javascript
    -synchrounus nad asynchrounus execution
    -Function is a object
    we can pass function as an object in different function
    this is called as callback function
    -The function that is passe in a function is called high order function
    -The functon in which we pass callback function is calle dis call as
    high order function
    -It is passed as a parammeter so no parthesisi is used
    -Js runs code sequentically in top-down order this i called
    synchronus
    -callback function also work wit anonymous function
*/ 
function  suum(num1,num2){
    return num1+num2
}
function calculate(num1,num2,suum){
    return suum(num1,num2);
    }
let res = calculate(2,3,suum);
console.log(res);

setTimeout(function(){
    console.log(`This is message`);
},3000)

setTimeout(()=> {console.log("thsi is messgae")},300)

// splice method in javascript array
/* 
    - Splice() changes the content of an array by removing or 
    adding new elemnets
    Syntax:
    arr.splice(index to start, number of elemnts to be deleted, items to add
        )
    -It changs the orginal aary
    - Splice method retuen the the element which has beeen deleted
*/
 let fruits = ["Banana","orange","Apple","Mango"];
 let du = fruits.splice(2,1,"Lemon","kiwi");
 console.log(fruits);
 console.log(du);

 //
 /* 
 Slice in array
 it return the select elment in a array
 It create a copy of array
 selecting range for an array
  syntax = array.slice(staring index,ending index)
startinhg array define start
eneding indicate end pasotion but it doesnot itself
It doesnot change the orginal array
 */

let frui = ["Banna","tomatao","papaya","apple"];
console.log(frui.slice());
console.log(frui.slice(-1,-3));
//console.log(frui.slice(-1,-3));
/* 
concat in javascript
- it join two or more arrays
-Does not change the existing array
-Return the new array
syntax = oldarray.concat(val1,val2...)
*/
let num001 = [1,2,3];
let num002 = [4,5,6];
let num003 = [7,8,9];
let resultarray = num001.concat(num002,num003);
console.log(resultarray);
console.log(num001);