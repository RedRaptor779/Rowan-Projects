// objects - create an object in js
//JSON (JavaScript {serializable} Object Notation) - a format for storing and transporting data

let student = {
    name: "John",
    age: 20,
    email: "john@example.com", 
    major: "Computer Science",
    courses: ["Math", "Science", "History"],
    isSenior: true, 
    //METHODS OF AN OBJECT

    displayName: function() {
        console.log("Student Name: " + this.name);
    }
}

// Testing methods of an object
student.displayName(); // Student Name: John

// note that we can display all the contents of the objects

console.log(student);

// access properties of the object using dot notation
console.log(student.name); // John
console.log(student.age); // 20

// overwrite the attributes of the object 

student.age = 21;
console.log(student.age); // 21
student["email"] = "john.new@example.com"; // we can also use bracket notation to access and modify properties
console.log(student.email); // john.new@example.com

// create an array of objects
let students = [
    {
        name: "Alice",
        age: 22,
        major: "Biology"
    },
    {
        name: "Bob",
        age: 19,
        major: "Mathematics"
    },
    {
        name: "Charlie",
        age: 21,
        major: "Physics"
    }
];

// access properties of objects in the array
console.log(students[0].name); // Alice
console.log(students[1].major); // Mathematics
console.log(students[2].age); // 21

// iterate through the array of objects

students.forEach( (param) => {
    console.log(param.name + " is majoring in " + param.major);
});

// the math object (random)
let randomNum = Math.random(); // generates a random number between 0 and 1 EX: 0.34557464447656394
console.log(randomNum);
let randomDice = Math.round(Math.random() * 5) + 1; // generates a random number between 1 and 6 EX: 3
console.log(randomDice);

// Floor and ceiling
let myNum = Math.random();
console.log("Original number: " + myNum);
console.log("Rounded down: " + Math.floor(myNum)); // rounds down to the nearest integer
console.log("Rounded up: " + Math.ceil(myNum)); // rounds up to the nearest integer

// String methods
let country = "United States of America";
let upperCaseText = country.toUpperCase(); // converts the string to uppercase
let lowerCaseText = country.toLowerCase(); // converts the string to lowercase
console.log(upperCaseText + " " + lowerCaseText); // UNITED STATES OF AMERICA united states of america

//Common string methods
console.log(country.includes('a')) // true - checks if the string contains a specific substring
console.log(country.includes("Canada")) // false - checks if the string contains a specific substring

// Real world example 

let userPassword = "password123";

// check if password contains 9 characters
// and check to see if it contains the word "password"

if (userPassword.length >= 9 && !userPassword.toLowerCase().includes("password")) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}

// Template strings
// Recall example: 
let studentNew = "Lara Croft";
let school = "University of Adventure";
console.log(studentNew + " is attending " + school); // Lara Croft is attending University of Adventure

// using template strings
console.log(`${studentNew} is attending ${school}`); // Lara Croft is attending University of Adventure

let newTempString = `The ${studentNew} is attending ${school}`; // notice the back ticks instead of quotes
console.log(newTempString); // The Lara Croft is attending University of Adventure

// Map Method - allows us to iterate over vaules and return a new array with the results of the function we provide

let stockPrices = [100, 200, 300, 400, 500];

// lets add 10% to each stock price
let updatedStockPrices = stockPrices.map( (price) => {
    return price * 1.10; // increase each price by 10%
});

console.log(updatedStockPrices); // [110, 220, 330, 440, 550]

let citiesArray = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// requirement: make every city in the array uppercase
let upperCaseCities = citiesArray.map( (city) => {
    return city.toUpperCase();
});

console.log(upperCaseCities); // ["NEW YORK", "LOS ANGELES", "CHICAGO", "HOUSTON", "PHOENIX"]

// filter method - allows us to iterate over values and return a new array with only the values that meet a certain condition

let grades = [65, 70, 85, 90, 55, 80];

// requirement: filter out all grades that are below 70
let passingGrades = grades.filter( (grade) => {
    return grade >= 70; // only include grades that are 70 or above
});

// REDUCE METHOD 
// this returns a number not an array

let grades2 = [65, 70, 85, 90, 55, 80];
let bestStudents = grades2.reduce( (total, grade) => {
    if (grade >= 85) {
        total++;
    }
    return total;
}, 0); // the 0 is the initial value of total

console.log(bestStudents); // 2 (85, 90 are the best students)

// FIND METHOD 
let student2 = grades2.find( (grade) => {
    return grade >= 85; // returns the first grade that is 85 or above
});

console.log(student2); // 85 (the first grade that is 85 or above)

// FOR EACH METHOD 
grades2.forEach( (grade) => {
    console.log(grade); // prints each grade in the array
});

// alternative method of writing a CALLBACK FUNCTION (not best practice)
grades2.forEach( function(grade) {
    console.log(grade); // prints each grade in the array
});