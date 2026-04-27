// (10%) Using loops, log out numbers 1 to 10 in the browser console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// (10%) Using loops, log out every second number from 2 to 10.

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// (10%) Using loops, log out every second number backwards from 10 to 2.

for (let i = 10; i >= 2; i -= 2) {
    console.log(i);
}

// (10%) Using loops, log out numbers 1 to 10 and display whether each number is even or odd.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// (30%) Using loops and the built-in prompt() function, print out all the characters of a string, each on a separate line within the browser console.

let userInput = prompt("Please enter a word or phrase:");
for (let i = 0; i < userInput.length; i++) {
    console.log(userInput[i]);
}

// (30%) Using loops and the built-in prompt() function, print out all the characters of a string backwards, each on a separate line within the browser console.

let userInput2 = prompt("Please enter a word or phrase (Part2):");
for (let i = userInput2.length - 1; i >= 0; i--) {
    console.log(userInput2[i]);
}

// //Example: Using prompt() to display each character on a new line
// let userInput = prompt("Please enter a word or phrase:");