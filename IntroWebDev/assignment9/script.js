// (5%) Getting an Element by its ID – Use getElementById() to access and manipulate a specific element.

// document.getElementById("htxt").style.color = "DarkRed"; 


let submissionsList = [];

function submitForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const submittedName = nameInput.value.trim();

    if (!submittedName) {
      document.getElementById("status").innerText = "Please enter a name.";
      return;
    }

    submissionsList.push(submittedName);

    // (5%) Dynamically Adding Items to a List (UL or OL) – Use JavaScript to add new list items to an unordered or ordered list.
    const submissionItem = document.createElement("li");
    // (5%) Incorporating classList Methods – Demonstrate classList.add(), classList.remove(), and classList.toggle() to modify element classes.
    submissionItem.classList.add("submission-item");
    submissionItem.classList.toggle("recent-submission");
    submissionItem.textContent = submittedName;
    // (5%) Creating an Element & Using Append Child – Dynamically create and insert new HTML elements into the document.
    document.getElementById("submissions").appendChild(submissionItem);

    document.getElementById("status").innerText = "Submitted! Submit another?";
    // (5%) Making Content Appear & Disappear – Dynamically show or hide elements using JavaScript.
    document.getElementById("contactForm").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", submitForm);

// (10%) Button with OnClick Event – Include at least one button that triggers a function when clicked.

document.getElementById("submitBtn").onclick = submitForm;

// (5%) Changing an Element’s Color Property – Dynamically modify the color of an element using JavaScript.
// (5%) Changing an Element’s Color Based on User Click – Change color interactively in response to user input or clicks.
// (10%) Query Selector All – Use querySelectorAll() to access and manipulate multiple elements simultaneously.

document.querySelectorAll(".nl").forEach((element) => {
  element.addEventListener("click", () => {
    element.style.color = "DarkRed";
  });
});

// (10%) Query Selector – Use querySelector() to select and modify a single matching element.

document.querySelector("h3").style.color = "DarkRed";

// (10%) getElementsByTagName – Demonstrate selecting elements based on their HTML tag (e.g., <p>, <div>).

document.getElementsByTagName("h2")[0].style.textDecoration = "underline";
document.getElementsByTagName("h2")[1].style.textDecoration = "underline";

// (10%) Adding Event Listeners – Implement addEventListener() to handle user interactions (e.g., clicks, key presses, or mouse movements).
// Enter on a form field triggers the form submit event above.

// (10%) getElementsByClassName – Demonstrate selecting and modifying elements by their class name.
document.getElementsByClassName("nl")[0].style.fontSize = "20px";
document.getElementsByClassName("nl")[1].style.fontSize = "20px";
document.getElementsByClassName("nl")[2].style.fontSize = "20px";
document.getElementsByClassName("nl")[3].style.fontSize = "20px";





// (5%) Demonstrating Mouseover Events – Add interactivity by changing styles or content when the user hovers over an element. 

document.getElementById("status").addEventListener("mouseover", () => {
  document.getElementById("status").style.color = "DarkRed";
});

document.getElementById("status").addEventListener("mouseout", () => {
  document.getElementById("status").style.color = "red";
});

document.getElementById("status").addEventListener("click", () => {
  document.getElementById("contactForm").style.display = "block";
  document.getElementById("status").innerText = "";
});
