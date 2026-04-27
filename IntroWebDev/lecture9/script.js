/*

DOM 
1 - get the element you want to change
2 - change the element

*/

document.getElementById("city-text").innerHTML = "Los Angeles";

// we can also get a reference to this paragraph element

const cityParagraph = document.getElementById("city-text");
console.log(cityParagraph); //display the refernce
cityParagraph.innerHTML = "Chicago"; // change the text to Chicago

// change the style property using dom 
const newYork = document.getElementById("new-york");
console.log(newYork);
newYork.style.color = "blue";

document.getElementById("sao-paulo").style.color = "red";

// button

document.getElementById("change-city").onclick = function() {
    console.log("Button was clicked");
    document.getElementById("city-text").innerHTML = "San Francisco";
    document.getElementById("city-text").style.color = "green";
}

// query selector

const firstParagraph = document.querySelector("p");
console.log(firstParagraph);
firstParagraph.style.fontSize = "30px";

// query selector all

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
allParagraphs.forEach(function(paragraph) {
    paragraph.style.fontFamily = "Arial";
});

// get elements by class name

let myButton = document.getElementById("change-south-american-cities");
console.log(myButton);

myButton.onclick = () => {
    console.log("Button was clicked");
    let southAmericaParagraphs = document.getElementsByClassName("south-american-city");
    console.log(southAmericaParagraphs);

    // iterate through the collection and change the text color to purple
    for (let i = 0; i < southAmericaParagraphs.length; i++) {
        southAmericaParagraphs[i].style.color = "purple";
    }
}

// get elemts by tag name

let headings = document.getElementsByTagName("h2");
console.log(headings);
headings[0].style.textDecoration = "underline"; // change the first heading to have an underline

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "lightgray";
}


let button3 = document.getElementById("hscities");
let citylist2 = document.getElementById("city-list2");
let isDisplaying = true;

// wire up the button to a click event
button3.onclick = function() {
    citylist2.style.display = isDisplaying ? "none" : "block";
    isDisplaying = !isDisplaying; // toggle the value of isDisplaying
};


// add new city

let addCityButton = document.getElementById("add-city");
let cityInput = document.getElementById("city-input");

addCityButton.onclick = function() {
    let newCity = cityInput.value; // get the value from the input field
    if (newCity) { // check if the input is not empty
        let newListItem = document.createElement("li"); // create a new list item element
        newListItem.textContent = newCity; // set the text of the list item to the new city
        citylist2.appendChild(newListItem); // add the new list item to the city list
        cityInput.value = ""; // clear the input field
    }
}

