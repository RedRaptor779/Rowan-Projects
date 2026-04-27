// Create a javascript function

function myFunction() {
    console.log("Hello World");
}

// Call the function

myFunction();

// alert function

function alertFunction() {
    alert("Hello World");
}

alertFunction();

function helloSpeech() {
    console.log('Rowan is a wonderful university!');
    console.log('I am learning so much!');
}

helloSpeech();


// Create a function that takes in a parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Rowan University");
greet("John");

// function to display age

function displayAge(age) {
    console.log("Age: " + age);
}

displayAge(20);

/*

impement a function to log out a persons name and age
implemet a function to calculate area (width * length)
implement a saving calculation function (amount * months)

*/

// 1
function displayPerson(name, age) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}

// 2
function calculateArea(width, length) {
    return width * length;
}

// 3
function calculateSavings(amount, months) {
    return amount * months;
}

displayPerson("John", 30);

let area = calculateArea(5, 10);
console.log("Area: " + area);

let savings = calculateSavings(100, 12);
console.log("Savings: " + savings);

/* 

1 - creat a function to log out the sum of 3 numbers 
2 - log out the name, major, id of the student

*/

// 1
function sumOfThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

let sum = sumOfThreeNumbers(5, 10, 15);
console.log("Sum: " + sum);

// 2
function displayStudentInfo(name, major, id) {
    console.log("Name: " + name);
    console.log("Major: " + major);
    console.log("ID: " + id);
}

displayStudentInfo("Alice", "Computer Science", "12345");

// return keyword 

function calcSavings(amount, months) {
    console.log(amount * months);
    let result = amount * months;
    return result;
}

let totalSavings = calcSavings(100, 12);
console.log("Total Savings: " + totalSavings);

// create a function to check if a number is even or odd and return a boolean value

function isEven(num) {
    return num % 2 === 0; // === operator checks for both value and type, will return a boolean value based on the calculation
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false   

// determine if a bank can lend money to someone

let savingsAccount = 120000;
let isDebtFree = true;

function willMortgageBeApproved(savings, debtFree) {
    //check if customer savings is greater than 100,000
    //and they are debt free
    if (savings > 100000 && debtFree) {
        return true;
    } else {
        return false;
    }
}

let mortgageApproval = willMortgageBeApproved(savingsAccount, isDebtFree);
console.log("Mortgage Approval: " + mortgageApproval);

// NOTE: there are 2 ways to declare functions in js. 
// 1 - function declaration (function keyword followed by the name of the function and parentheses)
// 2 - function expression (assigning a function to a variable)

// function declaration
function greet2() {
    console.log("Hello!");
}

// function expression
let greetExpression = function() {
    console.log("Hello from the function expression!");
};

greet2();
greetExpression();

// Method 3 of defining a function is using an arrow function (ES6 syntax)

let greetArrow = () => {
    console.log("Hello from the arrow function!");
};

greetArrow();

// function declaration - use when you need hoisting 
// (ability to call the function before it is defined in the code)

// function expression - use when you want to assign a function to a variable or 
// pass it as an argument to another function. Avoid hoisting

// arrow function - use for shorter syntax and when you want to preserve the value of 
// 'this' (keyword used to refer to the object that owns the function) in the function 

//ARRAYS

// create an array of cities

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
console.log(cities);

// access elements in the array

console.log(cities[0]);
console.log(cities[2]);


console.log(cities.length); // length of the array

//push method - adds an element to the end of the array

cities.push("Philadelphia");
console.log(cities);

// pop method - removes the last element of the array. And also returns the removed element

let removedCity = cities.pop();
console.log(cities);
console.log("Removed City: " + removedCity);

//concat method - combines two or more arrays and returns a new array

let moreCities = ["San Antonio", "San Diego"];
let allCities = cities.concat(moreCities);
console.log(allCities);

// indexOf method - returns the index of the first occurrence of a specified value in the array, or -1 if it is not found

console.log(allCities.indexOf("Chicago"));
console.log(allCities.indexOf("Miami")); // -1 because Miami is not in the array

// print array method - prints the elements of the array in a string format

printArray(allCities);

function findMaxNumber (array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let numbers = [5, 10, 15, 20, 25];
let maxNumber = findMaxNumber(numbers);
console.log("Max Number: " + maxNumber);
