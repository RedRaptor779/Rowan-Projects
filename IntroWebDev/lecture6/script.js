// lets create a JS Statement

// alert('Hello world!'); // this sends a pop-up alert to the browser

console.log('Hello world from the console!')
console.log('This is another string of text');

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// alternatively we can do this 
console.log(1, 2, 3, 4, 5);

// Variables
// we can declare variables using hte VAR keyword

var number = 10; //assignment operator
console.log('The value of our variable is ' + number);//concat

var myName = 'Michael'; //Note: you can use double quotes ("") as well
console.log(myName);

var myAge = 21;
console.log(myAge);


var accountSavings2 = 100;
console.log(accountSavings2);

accountSavings2 = 500;
console.log(accountSavings2);


var firstName = 'Lara';
var lastName = 'Croft';
console.log(firstName + ' ' + lastName);

// NOTE: Variable names cannot start with a number
var _x = 10;
var $y = 20;
// these are very common, but it is not best practice or recommended 

// var, let, and const (other ways to declare a variable)

var x = 25;
console.log(x);
x = 15;
console.log(x);

// LET Keyword
let savings = 100;
console.log("Savings: " + savings); //Implicit conversion from integer to a string

// CONST keyword
// when you declare it, it cannot be re-assigned 
const firstName2 = 'Lara'
console.log(firstName2);
// firstName2 = 'Cloud'; - throws an error: Uncaught TypeError: Assignment to constant variable.


// 5 Primitve Types
// Strings, numbers, booleans, null, and undefined

// STRINGS  
console.log("Hello world");
let string1 = "John";
let string2 = "Jane";
console.log(string1, string2);
//String concat 
let fullName = string1 + ' ' + string2;
console.log(fullName);

//Note: Strings have properties
// This tells us how many characters there are in a string
console.log("The length of the string is : " + fullName.length);

var longString = "This is a very long string";
console.log(longString.length);

// We can also get the characters in a string
// Lets return the initals in John Jane

console.log(string1[0]); // display the first character in string1
console.log(string2[0]);

// Example: in first name, return the last character
console.log(string1[3]);
string1 = "Lara";
console.log(string1[string1.length-1]);

// Abbreviate the city into initals:
var myCity = "New York";
console.log(myCity[0] + myCity[4]); // The easy way

// NUMBERS
// operators: +, -, *, /, ** (power to), % (Modulous)

//Addition
console.log(2+2);
var myResult = (2+2);
console.log(myResult);

//Subtraction
console.log(2-2);

//Multiplication
console.log(2*2);

//Division 
console.log(10/5);

//Power 
console.log (4**4); //equates to 4^4, in words "4 to the power of 4"

//Modulo (mod)
console.log(8%2); // does 8 divide evenly into 2? >> yes, so there is a remainder of 0. ==0
console.log(4%3); // does 4 divide evenly into 3? >> no, there is a remainder of one. ==1
console.log(23%7) // does 23 divde evenly into 7? >> no, there is a remainder of two. ==2

//Increment Operator(++)
var myNum = 10;
console.log(myNum); //10
myNum++; //increment by 1
console.log(myNum); //11

//Decrement Operator (--)
console.log(myNum); //11
myNum--;
console.log(myNum); //10

// Shorthand Notations
let accountSavings = 0; //initalize 
console.log(accountSavings);
accountSavings = accountSavings + 100; //expression
console.log(accountSavings);

accountSavings+=500; // accountSavings = accountSaving + 500
console.log(accountSavings);

/*
addition +=
subtraction -=
multiplication *=
division /=
modulus %=
*/

//Order of operations 
let result = 2 + (5 * 10) - 1 - (5 + 10);

// boolean (true false)
/*
    ==, loose equality (comparison operator)
    ===, strict equality (consider both the VALUE and the DATATYPE)
*/

console.log(5 == 5); //true
console.log(5 == '5'); //true

console.log(5 === 5); //true
console.log(5 === '5'); //false

/*
    Type of method
    note: we can pass in a variable where we want to check data type value
*/

var isTrue = 'true';
console.log(typeof(isTrue)); //returns string

let age = 23;
console.log(typeof(age)); // number

console.log(age > 21); //returns true

//NULL vs Undefined 

var employeeName = 'Lara';
console.log(employeeName);
//Say we have other details for this employee
var cellNumber = null; //where we explicitly state that a variable has no value
console.log(cellNumber);

var spouse;
console.log(spouse); // returns undefined. 

// NULL = where we are explicitly stating that a variable has no value
// undefined = some inconsistent state or not defined variable 

// Comparison Operators
/*
    > greaterthan
    >= greaterthan equal to
    < lessthan
    <= lessthan equal to

    == equality operator (loos equality)
    != not equal to
    === strictly equal to 
    !== strictly not equal to
*/

var num = 23;
console.log(num === '23'); //false
console.log(num !== '23'); //true

// IF STATEMENTS   
// Checking if a condition is true or false

let isBrazilian = true;

if (isBrazilian){
    console.log("The person is from Brasil");
}
else{
    console.log("The person is not from Brasil");
}

//Example 2

let grade = 71;

if (grade >= 85){
    console.log("Your grade is A");
}
else if (grade >=70){
    console.log("Your grade is B");
}
else {
    console.log ("you fail");
}


// Switch statement

let dayOfWeek = "Monday";

switch(dayOfWeek) {
    case 'Monday':
        console.log("the day of the week is monday")
    case 'Tuesday':
        console.log("The day of the week is Tuesday")
    case "Wednesday":
        console.log("The day of the week is wednesday");
    case "Thursday":
        console.log("the day of the week is thursday");
    default:
        console.log("please select a valid day of the week");
        break;
}

// without breaks it will output all following cases. With breaks it will not

//Logical Operations
/*
    And && -> both conditions must be true
    or || -> either condition can be true
    not ! -> negate the condition
*/

let age5 = 29;
let hasPaid = true;

if (age5 > 21 && hasPaid){
    console.log("You are allowed to attend, have a great time")
}
else {
    console.log ("You are not allowed to attend this event")
}

console.log(!hasPaid); // returns false 


// LOOPS

// For loop
//for(initalization; somecondition; alternating counter)

//log out numbers 1-10 on our console
for (let counter = 1; counter <= 10; counter++){
    console.log(counter);
}

//log out the numbers backwards
for (let i=20; i >=1; i--){
    console.log(i);
}

// While loop
let q = 1;
while (q<=10){
    console.log(q);
    q++;
}

var p = 10;
while (p >= 1){
    console.log(p);

    if (p == 1) {
        console.log("we have liftoff");
    }

    p--;
}





console.clear(); //comment this out to see the previous stuff

//Guessing game

let userGuess = 0;
let correctNumber = 3;

while (userGuess != correctNumber){ //keep the game running until the player wins
    userGuess = prompt('Guess a number between 1 and 5');

    //check if the user guess matches the correct number configured
    if (userGuess == correctNumber){
        alert ('Congrats you won!');
    }
    else {
        alert ("Incorrect guess, please try again");
    }
}


console.clear();

// const calculatorDisplay = document.querySelector('h1');
// const inputBtns = document.querySelectorAll('button');

// // add javascript event listeners for numbers, operators, decimal
// inputBtns.forEach ((ib) => {

//     if (ib.classList.length === 0) {
//         ib.addEventListener('click', ()=> {
//             console.log('button pressed....')
//         });
//     }
//     else if (ib.classList.contains('operator'){
//         //wire up an event listener for each button 
//         ib.addEventListener('click', ()=>{
//             console.log('TBD continued....')
//         })
        

//     }
// });