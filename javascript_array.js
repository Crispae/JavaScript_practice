/*  Javascript Arrsy
 - List od data
 - A special kind of variable which can hold more than one type
   of value at a time.
 - The "new" operator lets developers create an instanceof a
   user-defined object type or of one of the built-in object
    types that has a constructor function.

   // Creating a array.
    - let <array-name> = [element1,element2,......]
    - let <array-name> = newArray(ele1,ele2,...)
*/
let car = ["maruti","honda","bmw"];
let newCar = new Array("maruti","honda","audi");
let caar = new Array(3);
console.log(caar);// return an empty array.
console.log(car);
console.log(newCar);

// Accessing the array element
//  - By refering index number
//  - Array always start with 0 index
//  - <array-name>[index-position]
//  - <array-name>.length // return len of array

console.log(car[2]);
console.log(car.length); // length is a property not a function

// Reassigning value to array
car[0] = "Audi";
console.log(car);// at index position vale will be changed

// Adding elements to array
car[3] = "wagnor"
console.log(car); // at index postion 3 new element will be added

/*  ///////Javascript methods of array 
    - toString() --> Converts array to a string with
        values seprated by comma

    - join() --> joins all element of arrays into a string
            - can provide seprator
            - Behaves like tostring()

    - push() --> Adds a new element to end of an array
            <array-name>.push(Value to add);
            Always add at the end of an array

    - pop() --> Removes an element from end of array
        -let x = fruits.pop();
        - Always add at the end of array

    - shift() --> remove an element from front of an array
         - They operate at the first element of an array

    - unshift() --> Add an element to the front of an array
         -They add an element to the front of an array

    - concat() --> It can join two or more array
            - Does not change the existing array
            - Return a new array
            - Push do changes to the orignal array



        
*/

// toString()
let fruits = ["saurav","gaurav","rahul"]
console.log(fruits.toString());// return comma seprated string of elements in list

// join()
 console.log(fruits.join("$"));

// push()
fruits.push("golu");
console.log(fruits);

// pop()
 let lastElement = fruits.pop();
 console.log(lastElement);
 console.log(fruits); // The last element is removed

// shift()
firstElement = fruits.shift();
console.log(firstElement);
console.log(fruits);

// unshift()
fruits.unshift("Himesh");
console.log(fruits);

// concat()
let arr1 = [1,2,3,4];
let arr2 = ["a","b","c","d"];
console.log(arr1.concat(arr2)); // It will return a new array with concatenation
console.log(arr1) // Original array will be return as it is


/* /// JavaScripts Objects//////
    - Collection of different types of data and method
    - Great to group data together
        object         properties         Methods
        -car           -name                -break
                       -model               -accelarate
                       -make                -start
                       -color               -stop
                       -Weight

    objects ar variables that can contain many values.
    objects contain key:value pair
    key will remain constant value can change.

*/   
    let person = { firstName:"saurav",
                    Age:21,
                    IsAdmin:true,
                    "like movies":true // multiple word key is assign using double quotes
                }

console.log(person); // dictionary like result
console.log(typeof(person));// object
console.log(person.Age);
console.log(person["like movies"]); // multiple word key is access using [] brackets