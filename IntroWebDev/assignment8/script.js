var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Frank Herbert',
       title: 'Dune',
       readingStatus: true
   },
  {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

// 1. Display All Books in UPPERCASE

for (var i = 0; i < library.length; i++) {
    var book = library[i];
    console.log("TITLE: " + book.title.toUpperCase() + " | AUTHOR: " + book.author.toUpperCase() + " | READING STATUS: " + (book.readingStatus ? "READ" : "NOT READ"));
}

// 2. Add a New Book to the Library

// Create a new book object
var newBook = {
    title: prompt("Enter the title of the book:"),
    author: prompt("Enter the author of the book:"),
};
var readingStatusInput = prompt("Have you read this book? (yes/no):");
newBook.readingStatus = (readingStatusInput.toLowerCase() === "yes") ? true : false;

// Add the new book to the library array
library.push(newBook);

//test output the updated library array
// console.log("Updated Library:");
// for (var i = 0; i < library.length; i++) {
//     var book = library[i];
//     console.log("TITLE: " + book.title.toUpperCase() + " | AUTHOR: " + book.author.toUpperCase() + " | READING STATUS: " + (book.readingStatus ? "READ" : "NOT READ"));
// }



// 3. Filter Books by Reading Status

// Ask the user via prompt()whether they want to see:
// All books
// Only books they have read
// Only books they have not read

var filterOption = prompt("What would you like to see? (all/read/unread):").toLowerCase();

for (var i = 0; i < library.length; i++) {
    var book = library[i];
    if (filterOption === "all" || 
        (filterOption === "read" && book.readingStatus) ||
        (filterOption === "unread" && !book.readingStatus)) {
        console.log("TITLE: " + book.title + " | AUTHOR: " + book.author+ " | READING STATUS: " + (book.readingStatus ? "READ" : "NOT READ"));
    }
}


// Display the results accordingly using a loop and conditional statements.

// 4. Search for a Book

// Use a prompt() to ask the user for a book title.

var searchTitle = prompt("Enter the title of the book you want to search for:").toLowerCase();

// If the title exists in the library, display its details in uppercase.
// If it does not exist, print "Book not found in library."

var found = false;
for (var i = 0; i < library.length; i++) {
    var book = library[i];
    if (book.title.toLowerCase() === searchTitle) {
        console.log("TITLE: " + book.title.toUpperCase() + " | AUTHOR: " + book.author.toUpperCase() + " | READING STATUS: " + (book.readingStatus ? "READ" : "NOT READ"));
        found = true;
        break;
    }
}
if (!found) {
    console.log("Book not found in library.");
}

// 5. Display Summary Statistics

// Using library array, use a loop to count and display:
// Total number of books in the library
// Number of books read
// Number of books unread

// Example:
// TOTAL BOOKS: 4 READ: 3 UNREAD: 1


var totalBooks = library.length;
var readBooks = 0;
var unreadBooks = 0;

for (var i = 0; i < library.length; i++) {
    if (library[i].readingStatus) {
        readBooks++;
    } else {
        unreadBooks++;
    }
}

console.log("TOTAL BOOKS: " + totalBooks + " | READ: " + readBooks + " | UNREAD: " + unreadBooks);