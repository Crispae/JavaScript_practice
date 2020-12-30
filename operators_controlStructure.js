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