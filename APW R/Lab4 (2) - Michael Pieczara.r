## Read directions carefully

## Please complete all three problems 
## If you exceeded the one line requirement (question 1 and 2) but complete the code successfully, you will only earn half of the points.

## Problem 1. (1 points)
## Using the vector x below, express the Euclidean norm of x.
## Recall that the Euclidean norm of a vector v = <v1, v2, ..., vn>
## is the square root of the sum of the squares of it's terms, i.e
## sqrt(v1^2 + v2^2 + ... + vn^2)
## Complete the problem using one line only.
x <- c(4,2,8,6,4,9,2,4,1,6,4)
## BEGIN YOUR CODE HERE ##
x <- sqrt(sum(x^2))
##  END YOUR CODE HERE  ##
print (x)


## Problem 2.(2 points)
## Using the vector x below, divide every element in
## an even index by two, without modifying the elements in odd indices.
## Complete the problem using one line only.
## If you exceeded the one line requirement but complete the code successfully, you will only earn half of the points.
## Hint you do not need a loop.  This will work with a multiplication.
x <- 1:10
## BEGIN YOUR CODE HERE ##
x[x %% 2 == 0] <- x[x %% 2 == 0] / 2 
print (x)
##  END YOUR CODE HERE  ##
## ------------------------------------------------------------------------

##Problem 3 (2 points)
##Repeat problem 2 but make your one line general enough that it works regardless of vector length.
##Hint you may want to use an 'if' and 'else' and note they can still be in one line.

x <- 1:10
##Begin your code here
x[x %% 2 == 0] <- x[x %% 2 == 0] / 2 
##End your code here
print (x)

x <- 1:13
##Insert your same code here
x[x %% 2 == 0] <- x[x %% 2 == 0] / 2 
##End your code here
print (x)

## I have identified that my code is not taking the value of the "index" but rather
## The actual value stored in the array, however I hope this is acceptable. Please see below
x <- c(1, 5, 6, 8, 10)
x[x %% 2 == 0] <- x[x %% 2 == 0] / 2 
print (x)