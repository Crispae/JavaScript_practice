 /*  ********  FUNCTION IN JAVASCRIPT********
    - A piece of code that perform a specific task
    - It allow us to use the concept of DRY in programming.
    - Building block of program.
    - They allow us to code without repetition.
    - code on demand means call many times.
    - Function is executed when it is called not when it is defined

    // Define a Function
    - For defining a function we use "function" keyword
    - After that we give name to function
    - Then in paranthesis we proide parameters or input to functiom
    - paranthesis is must even we don't have argument
    - then we use curly braces to define the work that is done by that function

*/



// Defining a function
function add(num1,num2){
    
    let result = num1 + num2;
    console.log(result);
}
// Calling a function
add(4,5); 
function showMessage(username){
    console.log(`Hello ${username}`);
}
showMessage("saurav")

/* ****** RETURN KEYWORD in javascript Function
    - Return is a javascript keyword
    - when the function ket a return statement it will stop
    the execution of function and will return the value that 
    function store at that time.
    - Return the value to the functin caller
    - Every function in javascript return undefined unless specified
      it is just like None return by python
    - return statement stops function execution
    - Let say we have two return statement in function the execution of 
      function will stop after it will encounter the first return statement
*/
function sub(x,y){
    let result = x - y;
    return result;
}
//const re = sub(12,8)
console.log(sub(12,8));

function test(){
    return true;
}
console.log(test()); // undefined

/*  *******Local and global variable in javascript 
    LOCAL VARIABLE
     - Variable defined inside function or block
     - visiblity remain to the block.

    GLOBAL VARIBALE
     - Variable defined outside function or block
     - It will visible throughout the program.

    Variable sadowing
     - Variable declared in certain scope has same name deifned on its
       outer scope.

*/
let number = 10;// This is a global variable. Doubt in this topic
console.log(`The global value outside the function: ${number}`);
function add(num1,num2){
    const result = num1 + num2;// num1 and num2 scope remain within the function.
     // shadow variable 
    //console.log(number);
    //return result;
}
const final = add(3,4);
console.log(final)

/*  /////////Javascript type conversion
    - Automatic data type conversion is present in javascript
    - we can explicitly pass a function which will do that conversion
*/

// Number to string
console.log(2 + null); // null will be automatically given 0
console.log("2" + null);// here concatenation of strings will takes place
console.log("5"+2);
let num = 1234567;
let data = num.toString();
console.log(typeof(data));// string
console.log(typeof(String(num)));// String

// Converting boolean into string
let a = true;
console.log(typeof(a));// boolean
console.log(typeof(a.toString())); // string
console.log(typeof(String(a))); //String

// Convertng String to Number
 // - Number()
 // - ParseInt()
 //  -ParseFlt()
 // + (urinary operator)

 let s = "1234";
 console.log(typeof(Number(s))); // number
 console.log(typeof(parseInt(s))); // number
 console.log(typeof(+s))// Number it a shortuct apply + before the sting conainer it will
  // convert it into nmber

  //Boolean to number
  let z = true;
  console.log(+z); // number
  console.log(typeof(+z)); // number

/*  /// ARROW Function in JavaScript/////
    - It come along with ES6 version of javaScript
    In arrow function function Keyword is removed
    - Everything after the arrow is assumed to be returned
    - let sum2 = (a,b) => a+b is also correct
    - Arrow function mainly useful when you create
      ananymous function
    */
// method1
let sum2 = (a,b) =>{return a+b;}
let soo = sum2(7,8);
console.log(soo);

// method2
let sum3 = (a,b) => a+b;
console.log(sum3(9,5));// 14 it will return a+b

//method 3 if we have only one argument/parameter
let greet = name => `hello ${name}`
console.log(greet("saurav"));

