function swapCase(str) {
    let swapped = ''; // Initialize an empty string to store the swapped case result
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}

function insertDashes(num) {

    let result = ''; // Initialize an empty string to store the result with dashes
    for (let i = 0; i < num.length; i++) { 
        result += num[i];

        if (i < num.length - 1) { // Check if there is a next digit
            const currentDigit = Number(num[i]);
            const nextDigit = Number(num[i + 1]);

            if (currentDigit % 2 === 0 && nextDigit % 2 === 0) { // 2 even numbers in a row
                result += '-';
            }
        }
    }

    return result;
}

function last(arr, n) {
    if (n === undefined) { // If n is not provided, return the last element of the array be defaulkt
        return arr[arr.length - 1];
    }
    else {
        return arr.slice(-n);
    }
}

// Test cases
console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'
console.log(insertDashes('025468')); // Output: '0-254-6-8'
console.log(last([7, 9, 0, -2])); // Output: -2
console.log(last([7, 9, 0, -2], 3)); // Output: [9, 0, -2]
console.log(last([7, 9, 0, -2], 6)); // Output: [7, 9, 0, -2]

/*

1. (30%) Swap the case of each character in a string
Write a JavaScript function which accepts a string as input and swaps the case of each character.

Example:
Input: 'The Quick Brown Fox'
Output: 'tHE qUICK bROWN fOX'

2. (30%) Insert dashes between two even numbers
Write a JavaScript function which accepts a number as input and inserts dashes (-) between each two even numbers.

Example:
Input: 025468
Output: 0-254-6-8

3. (40%) Get the last element(s) of an array
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

Test Data:

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
Expected Output:

-2
[9, 0, -2]
[7, 9, 0, -2]

*/