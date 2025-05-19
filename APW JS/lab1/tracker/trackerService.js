/*trackerService.js

Provides basic Activity Tracker Functionality
Activities:  Walk/Run
Input:  Distance (miles)
        Weight (lbs)
        Time (hours)
Output: Calories Burned

 Formula Sources:

 https://lovandy.com/wellness/physical/calories-burned-by-walking.html AND
 https://lovandy.com/wellness/physical/calories-burned-running.html
*/

//requires weight in kbls
//
function calcWalkCal(weight, distance){
    return 0.3 * weight * distance;
}
//requires weight in lbs, and distance in miles
function calcRunCal(weight, distance){
    return 0.63 * weight * distance;
}
//speed is whatever units the user wants to use
function calcSpeed(distance, time){
    return distance/time;
}

exports.calcWalkCal = calcWalkCal;
exports.calcRunCal = calcRunCal;
exports.calcSpeed = calcSpeed;
