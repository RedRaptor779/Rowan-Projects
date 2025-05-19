//This calorie calculations for  walking and running are
//implemented as Function Objects.  These can be assigned
//to this.exercise at runtime.
var walking = function(){
    this.calculate = function (weight, distance, time){
	return 0.3 * weight * distance;
    }
};
//requires weight in lbs, and distance in miles
var running  = function(){
    this.calculate = function (weight, distance, time){
    return 0.63 * weight * distance;
    }
};


// requires weight in kgs, and time in mins
var swimming = function(){
    this.calculate = function (weight, distance, time){
       return time * ((6 * (weight / 2.2) * 3.5) / 200);
    }
};


// b) create an Exercise class definition with a constructor that accepts a single parameter (see simpleObjects.js for an example). This parameter will be a String. Note this is separate from the exercise objects placed in this file

class Exercise {
    constructor(exercise) {
        this.exercise = exercise;
        if (exercise == "walking") {
            this.activity = new walking();
        } 
        else if (exercise == "running") { 
            this.activity = new running();
        } 
        else if (exercise == "swimming") {
            this.activity = new swimming();
        }
        else {
            throw new Error("Invalid exercise type");
        }
        this.type = exercise;
    }

    calculate(weight, distance, time) {
        if (this.type === "swimming") {
            return this.activity.calculate(weight, distance, time); // Pass time for swimming
        } else {
        return this.activity.calculate(weight, distance, time); // Pass distance for walking and running
        }
    }
}

module.exports = Exercise;


// The Exercise class will have 2 instance properties. One will be named activity and will reference one of the exercise function objects. For Example:

//   this.activity = new walking();  

// The other will be named type and will hold the name of the activity. Inside the constructor, 
// check the string parameter's value. If it is "walking" create an instance of walking exercise object and assign it 
// to the activity instance property, if it is "running" create and assign an instance of the running exercise object, 
// else throw an error. Finally, create an instance property named type 
// (if you haven't already done so ) and set its value to be the value of the parameter.

// Up to this point, you are basically just moving the logic from tracker constructor to the Exercise constructor

// Add a function named calculate to the Exercise class. The function accepts "weight" and "distance" parameters. 
// It will pass these values to the object's activity's calculate function and returns the value.


