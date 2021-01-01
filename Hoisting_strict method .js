// Hoisiting
/**
 * Moves the declarations of variable and function defination
 * moves aautomatically to top of the scope.
 * Whenever javascript code is read by the browser it creatas
 * a Global execution context
 * It works i two phases Whe we declare the variable it moves that 
 * decleartion to the top of their scope
 * In older javascipr it is allowed to call the variable without 
 * decleartion of that variable.
 * 
 * console.log(username);
    var username ="saurav";

    Here we have call the variable before it declartions
    after we declare the variable it will declare he variable at hte 
    top of that scope.

 * it will look like something that
 * var username; / This wil appear at the time of execution
 * console.log(username);
 * var username = "saurav"
 * 
 * 
 * 
 */

 // Strict method in javascript
 /*
 - For using the strict mmode we have to use the keyword "use strict";
 or 'use strict';
 I can be enable in function defination also
 Make it easier to write a clener and secure code.
change bad syntax into real error.
*/
'use strict';
var userName = "saurav";
var userName = "kumar";
console.log(userName);