//JQuery code
/*
 Id = #name 
 class = .name
 element = type <br/>, <p>, <div>
*/

// $('my-button').click(function() {
//     console.log("Button was clicked");
// });

$('#button').click(function() {
    console.log("Button was clicked");

    //lets grab paragraph and change text
    $('p').text("The best university in america is Rowan University");
});

// class selector
$('.darth-vader-button').click(function() {
    console.log("Darth Vader button was clicked");
    $('.darth-vader-text').text("Darth Vader's boss is Emperor Palpatine");
});
// id selector
$('#luke-button').click(function() {
    console.log("Luke button was clicked");
    $('.luke-text').text("Luke's best friend is Han Solo");
});

// changing colors of elements using jquery

$('#color-button').click(function() {
    console.log("The button was clicked");
    // first get a reference to the para (ptag)
    $('.the-text').css("color", "red");
});

// wires all the buttons to the same function
$('button').click(function() {
    // $('p').css("color", "blue");
    // $('p').css("font-size", "30px");
    // $('p').css("background-color", "yellow");

    // shorthand for above code using json object
    $('p').css({
        "color": "blue",
        "font-size": "30px",
        "background-color": "yellow"
    });
});