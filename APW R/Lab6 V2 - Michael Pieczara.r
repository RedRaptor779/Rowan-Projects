## File: lab6
## Author: A. Breitzman
## Description: Manipulating and summarizing a data set
## ------------------------------------------------------------------------

## Instructions: This worksheet is worth 5 points
## Exercises are worth 2.5 point each. If you cannot get the code to work in the line limits specified, the maximum that you can earn per exercise would be 1.5 points.



## First we need to load a library
library(MASS)

## If you got an error you may need to uncomment the next 2 lines
#install.packages("MASS")
#library(MASS)

dim(Cars93)
## 93 rows and 27 columns
## if you got an error message instead of 93 27 then go back to line 11 and reread it.
## Don't go any further until you get a 93 27 for line 15

##We can get the names of each column as follows
names(Cars93)

##Recall to build a subset we can list the rows and columns we want.
##For example the next line will give us the first 2 rows and first 3 columns
Cars93[1:2,1:3]

##Make a new file containing only columns I care about
myCars <- Cars93[,c(1,2,3,5,7,8,10,11,12,25,26)]

##Let's look at first 2 rows
myCars[1:2,]


##summary will give a nice summary of each column
summary(myCars)

##Apparently in 1993 there was a car that cost only $7400.  Let's find it
which(myCars$Price==7.40)
## Row 31
myCars[31,]
##Ford Festiva
##Note we could do the above in one step

myCars[which(myCars$Price==7.40),]


## Exercise 1
## List all cars that cost under 10,000 in 1993 and only show the Manufacturer, Model, Price, and Cylinders
## Do it in 1 line
## Begin your code here
myCars[myCars$Price < 10, c("Manufacturer", "Model", "Price", "Cylinders")]
## End your code here

## Exercise 2
## Repeat Exercise 1 with the following variation
## call the subset you create myCars2 and then do a summary of myCars2
## you may have 2 lines for this
## Begin your cod here
myCars2 <- myCars[myCars$Price < 10, c("Manufacturer", "Model", "Price", "Cylinders")]
summary(myCars2)
## End your code here