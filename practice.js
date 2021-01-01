const { type } = require("os");

var Name = "saurav";
console.log(Name);

var Name = "gaurav"; // It is the property of var that it can be redeclared within the same 
// scope while let will throw error. // This is called redeclared
console.log(Name);

let name = "test";
console.log(name);
name = "something else"; // In the case of let it cannot be redeclared by using let // This is called updated
// it will throw following error "SyntaxError: Identifier 'name' has already been declared"
console.log(name);

// Every const declaration, therefore, must be initialized at the time of declaration.


let greeting = "say Hi";
let times = 4;

   if (times > 3) {
        var hello = "say Hello instead"; // if a variable is defined within scope with var that variable
        // is accessible utside f block scope also
        // but in case of of let if defined within block scope is not accesible outside block scope 
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
   //must like  var, let declarations are hoisted to the top. Unlike var which is initialized
   // as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get 
   //a Reference Error
   


   let actor = "Amitabh";

   function movie() {

    let $actor1 = "Abhisek"
    console.log($actor1)
    console.log(actor)

}
 movie();
console.log(actor);




/// Delcaring javascript variable best convention
/*
-->>> Javascript is case-sensitive
-->>> only letter and digits are allowed
-->>> start with "_" and "$"
-->>> Best practice is  to use CamelCase to assign the variable "userName"
-->>> Always use white spaces before and after using operator in javascript.
-->>> It is recommended to use semicolon although it is not mandatory.
-->>> "****** NOT ALLOWED*********"
    - Starting with digit is not allowed
    - No special character should be used except "_" and "$".
    - No keywords of javascript should be used
    
*/
// we can also declare multiple variable at one time and then assign
// a value to later not at that instant 

let happy,nothappy;
happy = "not";
nothappy = "true"


/********* Data Types in javascript**************
 * primitive datatype and non- primitive data-type
 * primitive data type is inmutable means once it  value is assigned it cannot be changed and 
 * they are stored as value.
 * Example of primitive data-type: boolea,undefiend,null,string(Text),number
 * Non-primitive data type are mutable and they are stored as reference or address.
 * Example of non-primitive datatype are object,Array,Function
 * Nmmber data type in javaScript is Always decimal even we see it
 * as a number but it is still a decimal.
 */

 // boolean
  let x =5;
  let y =5;
  let z =6;
  
  console.log(x===y);
  console.log(x===z);

  // undefined
  // A variable defined without a value

  let mu;
  console.log(typeof(mu))

  // null
  // supposed to be something but does'nt exist
  // it retrn oject type
  let firstName = " saurav";
  let middleName = null;
  console.log(middleName);
  console.log(typeof(middleName));

  /*******NUMBER DATATYPE */
//  Number,Infinity,NaN
/*
    - Number data type is primitive one
    - In integers there are no decimal 
    - In flating point tehy consist of decimal
    -Number data type take point integers and floats

 Operation on numbers data type
  - +,-,*,/,%
  -modulus is used to find out the remainder
*/

let num1 = 15;
let num2 = 6;
//let result = num1 + num2;
//let result = num1 - num2;
//let result = num1*num2;
//let result = num1/num2;
//let result = num1%num2;

/** Special numeric value 
 * Infinity (It represent the greatest number) num/0
 * -Infinity num/-0
 *  Number data ype is valid only in the range from 2^53-1 to -2^53-1
 * Nan - Not a number
 * mathematical operation which are not defined comes under Nan data type
 * if string is divided by number the result will be unexpected will reurn
 * Nan dataype Example: "Hi"-2 --> return NaN 
 * But in case of + it will not return Nan data type instead it will 
 * concatenate the string and number
 * Javascript is safe with operation as it will not reuturn error instead
 * it will return a dataype
 * 
 * ***** BigInt Datatype(New datatype)
 * It is rarely used it is used for handling very big number
 * It is bascially used to handle the numerical value which is beyond
 *  number datatype
 *  ///////// How to create BigInt////
 *  - By appending 'n' to the end of the integrs
 *  - By calling a Function BigInt()
 * 
 * Differnce between bigint and number
 *  - math library function doestnot work on bigint object
 *  - bigint and number can't  be add or some other opeartion together
 * 
 *  //TypeError: Cannot mix BigInt and other types, use explicit conversions
 * Be careful coercing values back and forth, however, as
 * the precision of a BigInt may be lost when it is coerced to a Number.
 * Bigint takes only whole number so its precision might get lost.
 * 
*/ 
 //let result = num1/0;
//let result = num1/-0
let result = "hi" - num1;
let num3 = 10;
console.log(typeof(num3)); // bigint
let n = BigInt(100000000000000000000000000000000);
//console.log(num3+n)
console.log(typeof(n)); // bigint
console.log(result);
console.log(typeof(result));

/*  ***** Javascript strings***********
 - It is a primitive Datatype
 - stores a series of characters
 - cab be only text inside single quote('') or double quote ("")
 - using back ticks(``) it is called template literals it is introduced in ES6
   javascript it is a conveninent to plug javascript value to strings 

 - Multiline strings can we written with all these methods
    - We can use + operator at the end of line to conacatenate strings
    - We can write different lines seprately which is mostly not used to for multistring.
    - We can use escape character to introduce multiline string which we escape"/" it will
      escape the line break immediately.
    - If we are using back ticks for our string declearation it will we vey convient
     for multiline string notation as it will not reqire any extra character just write
      the strings.
    - we cannot mix single quote and double quote back ticks will we good
    -\n will provide new line
*/
 let college = "Delhi university"
let string1 = 'saurav' + ',\n kumar is a good boy';
 console.log(string1);
let string2 = "saurav";
let string3 = `Saurav
hey evey body \n how are you all ${college}`;// By using dollar sign before curly braces 
// we can append any variable value within the string.
console.log(string3);



