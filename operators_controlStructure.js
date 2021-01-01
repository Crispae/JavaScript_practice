/*  Builtin boolean operators in JavaScript
    -   ==      equal to (It only compares the value not value type)
    -   ===     equal value and equal type (strict equal and type operator,
                it will compare the value as well)
    -   !=      not equal (It will compare only value)
    -   !==     not equal value or not equal type (It will compare the type as well)
    -   > greater than
    -   < less than
    -   >= greater than or equal to
    -   <= greater than or equal to
*/
 // conditional statments
 // Where we have to take decision on the basis of condition
 // if - specify a block of code to be exectuted,if specified Condition is true
 /* 
  syntax --> if(condtion is true) {

    do something;
  } 
  */

  let x = 10;
  let y =10;

  if (x>y){

    console.log(`x is smaller`);
  }
   console.log("outside the if")

// if else --> Specify a block of code to be executed, 
//if specified condition is false
/*
 if(condition is true){
    do something
 } else {
     do other thing
 }
*/
 if (x>y){
     console.log("x is greater")
    } else{
        console.log("y is greater")
    }
  // if else if
  /*
    if(condition){
        do something;
    } else if(condition2){
        do some other thing;
    }else {
        do some other thing;
    }
*/
if(x>y){
    console.log("x is greater");
}else if(y>x){
    console.log("Y is greater")
}else{
    console.log("They are equal")
} 


// Logical Operators in javascript
/*  - AND --> represented by &&
            Return true only when all the condition 
            is true
        syntax = if(condition1) && (condition2){
            do something;
        }

    - OR --> represented by ||
           Return True if any of argument is true
           else,return false

        syntax = if(condition1) || (condition2){
            do something;
        }
    - NOT --> represented by !
        Return the inverse vale
        !true == false
        !false== true


*/
// and opreator
let m =10;
let n = 20;
 console.log((m<n) && (m>5)); //true
// OR opretor
 console.log((n>m) || (n==78)); //true
 // NOT operator
 console.log(!(m===n)); // this will invert the result

// Ternary operator 
/*
Shortcut for if-else statement.
condition opertor result cannot be assigned to any variable
SYNTAX: let <name> = condition? Value1: value2;
In this we will provide condtion and if condition is true Value1
will be assigned otherwise value2 will be assigned to the variable
*/
 let age = 5;
 let canDrive = (age>18)?"can drive":"not eligible to drive";
 console.log(canDrive);

let greeting =(username) => {
     let name = (username)? username:"Anonymous";
     return (`how are you ,${name}`)
 }
 console.log(greeting());

// Switch Statement in Javascript
/*
It is mainly used in place of nested if and else
It is a type of coditional statment
perform different actions based on different condition
Alternative for long,nested if/else statements
break statement is used to get out of wsitch loop

SYNTAX -->>>
        switch(expression) {
            case x:
                // code block
                break;
                case y:
                    //code block
                    break;
                default:
                    //code block
                }
expression is evaluted only one time

*/
let operator = "Mull";
let num1 = 50;
let num2 = 10;
let result;

switch(operator){
case "ADD":
    result = num1 + num2;
    break;
case "Sub":
    result = num1-num2;
    break;
case "Mul":
    result = num1*num2;
    break;
case "divide":
    result = num1/num2;
default:
    console.log("Enter a valid operator")
}

console.log(`We are outside the switch statement`);
console.log(`The result  of ${operator} is: ${result}`);


// Loops in javascript 
 /*
- execute one code multiple times
- loop is of four type
 /// For loop
    - Execute code of a certain amount of time
    Syntax-
        for(intilization;condition;statement to be executed every time){
            // code block to be executed
        }
for(let i =0;i<5;i++)
{
console.log(`the number is`+i);
}

/// For-of loop
    - Execute for every element of array
    Syntax -
        for (variable of iterable)
        {
            //code block to be ececuted
        }
/// For-in loop
    - Execute for every key in object
    syntax = for(variable in object){
        //code to be executed
    }
/// While loop
    - Execute code as long as a condition
    is true
*/
// for loop
for(let i = 0; i<100;i++)
{
    console.log(`the number is `+i);
}

// for-of loop

let qw = ["saurav","gaurav","rahul","golu"];

console.log(qw);
for (let i of qw){
    console.log(i)
}
console.log(typeof(qw));

// for in loop
let obj = {
    1:"A",
    2:"B",
    3:"c",
    4:"d"
}

for (i in obj){
    console.log(`The value of key ${i} is ${obj[i]}`)
}

console.log(typeof(obj));
// iMPORTANT POINT TO BE NOTED IS ARRAY AS WELL AS FUNCTION
// IS OBJECR EVERYTHING IS OBJECT IN jAVASCRIPT

// while
let v =0;
while (v<10)
{
    console.log(v);
v = v+1;
}

// do-while loop
/*
- At least one time the llop will be executed even if the condition
    is false
 Do while loop is as while type loop 
,In this the code which is wriiten in the loop is to executed 
atleat one time after that the condition is evaluted

SYNTAX :
     do{
         //code block to be executed
     }
     while(condition);
*/
let k =0;
do {
    console.log(k);
    k++;
}
while (k<5);
console.log(`We are out of the loop`)

// Break and continue keyword in javascript
/*
Break and continue are javascript keyword which is used to control
the execution of loop
Break = It will stop the execution of loop entirely
         It is coming outsued of the whole loop
Continue = It terminates the execution of  the current
        iteration of the loop or skip the current iteration
         and  continue the other iteration
*/
//break
for (let i = 0; i<10;i++){
    console.log(i);
    if (i===6){
        break;
    }
}
console.log("we are outside of the loop")

//continue
for (i =0 ;i<10;i++){
    if(i===6){
        continue;
    }
    console.log(i) // It will skip the 6 number and continue to loop

}// Nesting  in javascript
for(let i =0;i<10;i++){
    for(let j =0;j<10;j++){
        console.log(`i=${i} , j=${j}`)
    }
}
 // Labelled statement 
 /* 
 - Prefixing a statement with an identifier which you can refer to
 - Can we used with break and continue statements.
 - In labeled statements,use colon(:) after name of the loop
 - We can control outer loop in nested loop also
 Syntax loop1: for(condtions){
        loop2 : for(condtions){
            //do somehting
            break loop1(Here we can but any loop, it will bring us 
            out of that loop)
            continue can also be used
        }
        }
 */
/// Error handling in JavaScript
/*
-Some errors can't be avoid
        - User input Errors
        - Network Errors
        - Throw and catch errros to fail gracefully or recover if possible

Syntax Try and catch
 try{
     //Block of code to be tested for errors
}
catch(err){// err is an object whcih define error
    Block of to handle error
}
finally{
    Block of code to be execued regardless of try/catch results
}

err --> will contain all the details of the error

//  Some errors which are not in hand of programmmer might diffuclt to takle
we end user do dame input error anything  else do for that a concept of guessing the
error of the end user and create a custom error for the smooth functioning of
the programm.

Syntax to create a custom error are
 throw Error("Staemnt of the error")
*/

try{
    console.log(`start of try block`)
    console.log(`try block is ended`)
    hgjhg;
}
catch(err)
{
    console.log(err)
} 
finally
{
    console.log(`Finally block will execut
    regardless of try/err`)
}
multi = (a,b) => {
    if(typeof(a) == "number" && typeof(b)=="number"){
        return a*b;
    }
    else{
        throw Error("Enter a valid number");
    }
    
}
try
{
    result = multi(hgjh,gjj);
    console.log(result);
}
catch(err)
{  
    console.log(err)
}
finally
{
    console.log("final result")
}

