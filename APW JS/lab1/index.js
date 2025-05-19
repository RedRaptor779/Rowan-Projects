var tracker = require("./tracker/trackerService.js");
//^			            	^   
// local reference    	relative path to the trackerService.js file

var activities = [ {activity: "walking", weight: 150, distance: 3, time: 45}, { activity: "running", weight: 200 , distance: 4, time: 40}, {activity: "running", weight: 175, distance: 5, time: 45}, {activity: "running", weight: 140, distance: 10, time: 240} ]


let int = 1;
activities.forEach(function(act) {
    console.log("Activity: " + int);
    console.log("Activity: " + act.activity);
    console.log("Weight: " + act.weight);
    console.log("Speed: " + tracker.calcSpeed(act.distance, act.time / 60) + " mph");

    if (act.activity === "walking") {
        console.log("Calories Burned: " + tracker.calcWalkCal(act.weight, act.distance));
    } else {
        console.log("Calories Burned: " + tracker.calcRunCal(act.weight, act.distance));
    }

    console.log("***************************");
    int++;
});

