// get the canvas element from the html document using DOM (Document Object Model) and store it in a variable called canvas
const canvas = document.getElementById('gameCanvas');

// need to set the drawing context wheterher 2d or 3d. We will be using 2d context for this game
const ctx = canvas.getContext('2d');

// set some game variables
// keep track of the score
let score = 0;

// Create a player object (This will be the basket or "catcher")
// this is json (JavaScript Object Notation) format - a way to represent data in a structured way using key-value pairs
let player = {
    x: 170, // starting x position of the player
    y: 450, // starting y position of the player
    width: 60, // width of the player
    height: 20, // height of the player
    speed: 6 // speed at which the player moves
}

// Keyboard input handling 
// create an empty object to keep track of which keys are currently pressed

let keys = {}; 

// when a key is pressed...
document.addEventListener('keydown', function(event) {
    // store the key as true (it is currently being held down by user)
    keys[event.key] = true;
});
//when a key is released...
document.addEventListener('keyup', function(event) {
    // store the key as false (it is no longer being held down by user)
    keys[event.key] = false;
});

// Draw function to draw the players and the falling squares on the canvas
function draw() {

    // clear the canvas before drawing the new frame (to prevent trails)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the player (basket) as a rectangle
    ctx.fillStyle = 'lime'; // set the color of the player to green
    ctx.fillRect(player.x, player.y, player.width, player.height); // draw the rectangle at the player's position with the player's dimensions
}

//update functions (game logic)
function update() {

    // move the player based on keyboard input
    if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed; // move left
    }
    if (keys['ArrowRight'] && player.x + player.width < canvas.width) {
        player.x += player.speed; // move right
    }
}
// IMPLEMENT THE GAME LOOP

function gameLoop() {
    update();//update the game logic
    draw(); // call the draw function to render the game objects on the canvas
    requestAnimationFrame(gameLoop); // call the gameLoop function again on the next frame to create a continuous loop at ~60fps
}

// start the game loop
gameLoop();