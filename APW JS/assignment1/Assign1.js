/* Assign1.js
Your First JavaScript Assignment.
Its the end of the first week of class and most of what we have 
covered so far has been almost a review (basic types and decision 
structures).  This assignment will test your understanding by 
asking you to fill in some simple procedures that I think you should
have a good understanding of by now.

All of these concepts should have been covered in an introductory
programming class (IOOP or CSNP or even ISP).  I'm choosing them 
because you should be pretty familiar with the kind of logic used
in these problems. If not, you should go review the concepts in your
preferred language before attempting these.

You may find yourself struggling with the nuances of the language and
thats OK for now.  */

//Problem 1  Simple Array Searching
/*Fill in the following function declaration.  The procedure you
provide should be able to find and return the index value of the given 
target in the array, if it exists, or null if it does not.

You do not have to make any assumptions about the argument types.
If arr does not hold items of target type, this should return null*/

function simpleSearch(target, arr){
    for (let i =0; i < arr.length; i++){
        if (arr[i] == target){
            return i;
        }
    }
    return null;
}
//Testing code, calls the function.  
console.log(simpleSearch(5, [1,2,3,4, 5]))//<-- Should print 4, if you fill in the function correctly.
console.log(simpleSearch("a", ["a","b", "c", "d","e"]))//<-- prints 0
console.log(simpleSearch(2, ["a","b", "c", "d","e"])) //<--  prints null

console.log("\n");


/*******Problem 2 ********
 *  Implement a switch statement that converts digits 0 through 9 
 * to their English names 'zero' through 'nine'. For credit, you MUST use a switch.
*/


var val = 0;

console.log(val);

switch (val){
    case 0:
        val = "zero";
        break;
    case 1:
        val = "one";
        break;
    case 2:
        val = "two";
        break;
    case 3:
        val = "three";
        break;
    case 4:
        val = "four";
        break;
    case 5:
        val = "five";
        break;
    case 6:
        val = "six";
        break;
    case 7:
        val = "seven";
        break;
    case 8:
        val = "eight";
        break;
    case 9:
        val = "nine";
        break;
}

console.log(val);

/*******Problem 3 ********
 * Complete problem 15 from Chapter 2 in Modern Javascript for the impatient.
 * You do not need to answer the second question (the re-writing part).
 * The text of the problem is given below for reference:
    
Consider the problem of finding the first position in which an 
array b occurs as a subsequence of an array a. Write two nested loops:

    let result = undefined
    for (let i = 0; i < a.length - b.length; i++) {
        for (let j = 0; j < b.length; j++) { 
            if (a[i + j] != b[j])
                ...
        }
    ... 
    }
Complete with labeled break and continue statements.

 */

console.log("\n");

let a = [1,2,3,4,5,6,7,8,9,10];
let b = [4,5,6];

let result = undefined
    outerLoop: for (let i = 0; i < a.length - b.length; i++) {
        for (let j = 0; j < b.length; j++) { 
            if (a[i + j] != b[j])
                continue outerLoop; // if not a match next iteration of outer loop
        }
        result = i;
        break;
    }

console.log(result); // should print 3