Author: Jake Levy  
Directory contains:

    README.md - this file

    tracker - a folder that contains a NPM module for use in your lab
    assignment.

This directory is the "starting point" set of files for the current lab; Intro to npm 
& NodeJS.  
  
If you missed today's lecture, look over the slides (if available, watch the  
lecture video), and  read Chapter 2: JavaScript Primer from your text to  
understand what we covered in class.  We want to get up to speed and be using  
Javascript to build cool stuff quickly.  
  
The first assignment is super simple and is just to help you "get your feet  
wet" with writing relatively simple javascript. Since its first time doing
homework in this class, these directions will guide you through the general
process of obtaining the files from git.  Future assignments will not describe
include such details.
  
*0) Before everything else, remember that its easier to keep things organized
from the start than it is to organize a bunch of random files later.  Make sure
you have folder somewhere in your local for Labs/class assignments.  This
folder should be your **Workspace**.  In VS Code you can select the **File**
Menu, then select **Open Workspace** and then navigate to and choose the
appropriate folder.*

In your VS_Code terminal:  
**1) Clone the Homework folder**  
*a) If you opened your HW folder as the workspace, then your terminal  
should already start in the correct directory location.  If not, navigate to  
the correct directory in your terminal using the **cd** command*
  
*b)  Once you are in the correct directory, you should run the following command*

     git clone 'https://github.com/ProfJake/lab1'

You should see some message like "Cloning into lab1..." then "done" when it is
done. 

*c) change directories into the lab1 folder.*  

    cd lab1
    
It will contain the tracker folder and a copy of these directions in a 
README.md file.  The tracker folder contains a file named trackerService.js
with the following functions in it:

     function calcWalkCal(weight, distance){  
       return 0.3 * weight * distance;  
     }  
     function calcRunCal(weight, distance){  
       return 0.63 * weight * distance;  
     }  
     function calcSpeed(distance, time){
       return distance/time;  
     }

These functions are going to be used in this lab.  Each calculates the approx.
calories burned by a specific activity (walking or running).  
  
Below these functions you will see the following lines

      exports.calcWalkCal = calcWalkCal;  
      exports.calcRunCal = calcRunCal;  
      exports.calcSpeed = calcSpeed;

As discussed in today's lecture, the exports object makes these functions
available in other files that import the trackerService.js file.

Your job is to import these functions and use them to perform some calculations
in a file named **index.js**.

**2) Inside the lab1 directory create a new file named index.js**.

*a) Right click on the folder in the VS_Code Navigator and select "New File". Name the file 'index.js'*

*b) import the trackerService.js file  using the require statement on the first line:*  

       var tracker = require("./tracker/trackerService.js");
	   ^				^   
    local reference    	relative path to the trackerService.js file
    
Now you can access any of the listed functions by typing tracker.calcWalkCal ( if you want to calculate the calories for walking, for example).

**3) Copy the following array of Object Literals into index.js, below
your require statements:**  

    var activities = [ {activity: "walking", weight: 150, distance: 3, time: 45}, { activity: "running", weight: 200 , distance: 4, time: 40}, {activity: "running", weight: 175, distance: 5, time: 45}, {activity: "running", weight: 140, distance: 10, time: 240} ]
    

**NOTE:**  This is an array of literal, anonymous, Objects. To access object
properties, you can use dot OR subscript notation.  Also remember that arrays
have a **length** property.  

Each literal is providing the following data:

    Activity Type
    Weight in pounds
    Distance in Miles
    Time in Minutes


**4) Use a loop  to walk through the array, using the functions provided by in
tracker module to process each item and print the data to the console in the following format:**  

    Activity: 1
    walking
    Weight: 150 lbs
    Speed: 4miles per hour
    Calories Burned: 135
    ***************************
    Activity: 2
    running
    Weight: 200 lbs
    Speed: 6miles per hour
    Calories Burned: 504
    ***************************
    ... Data continues for remaining objects...


Since tracker uses time in hours, you'll have to do some conversions.

 You will have to use your programming knowledge and skills to process the
 array, using basic JavaScript: control flow statements, equality checks, etc.
 Remember that to access items in an Array, you use array[index] notation
 To access Object properties you can use the standard dot-notation syntax


*Do not hardcode each activity printout into your driver. Do not re-type the functions in your local file. You should practice importing the file and accessing the functions through the imported object*

***You will submit a Screenshot of your output and your code on Canvas.
There's not a lot of array elements to process so please include the entire set of output.***
