# -*- coding: utf-8 -*-
# Ask a user for a #. Ask the user for another #. If the sum of the 2 values is even, 
# tell them what it is, and stop the program. Otherwise, 
# tell them the value, and continue to ask for values until the sum is even

isEv = False
integer = 0


while (isEv == False):
    user1 = input('Enter a number: ')
    user2 = input('Enter another Number: ')

    

    total = ((int)(user1) + (int)(user2))
    if (((total % 2) == 0) & (total != 1)):
        isEv = True
        print ('Congratulations! Your numbers added together were ' + (str)(total) + ' and that number is even!')
    else:
        print ('Try again. Your numbers added together were ' + (str)(total))



# Assume a user can give you input of an unknown type.
# Given this, write logic to determine the type of data it is.
# Then based on its Type, print to the user what Type it is (it must look 
# like a regular sentence.)

userInput = input('Enter some data: ')

if (type(userInput) == int):
    print ('Thats an Integer!')
elif (type(userInput == str)):
    print ('That\'s a String!')
elif (type(userInput) == float):
    print ('Thats a float!')
elif (type(userInput) == bool):
    print ('Thats a boolean!')
elif (type(userInput) == dict):
    print ('Thats a dictionary!')
elif (type(userInput) == list):
    print ('Thats a list!')
else:
    print ('Man idk what you put in there to get it to mess up that bad')

# Given 
text = ['Practice','Makes','Perfect','!?$']
# print words, and tell me the# of characters in it
# print the every other character in the elements of text
# Tell me how many characters were printed in step 2


theToString = text[0] + ' ' + text[1] + ' ' + text[2] + ' ' + text[3]

counter = 0
for x in text:
    if (counter < 3):
        print (x)
    counter= counter + 1

counter2 = 0
bigCat = ''

for z in text:
    counter3 = 0
    for y in text[counter2]:
        print (text[counter2][counter3:counter3+1])
        bigCat = bigCat + text[counter2][counter3:counter3+1]
        counter3 = counter3 + 2
    counter2 = counter2 + 1

print ('I printed ' + (str)(len(bigCat)) + ' characters in that print')



#**BONUS**
# Given: GTAAATGACCCCTTTTCATTAGTTAGACAGATCGAATGCTCCTTATCCATTCTCAGAGATGATGTGTTGCTGGTCGCCGAATAAAACCCGGTTGAGTCTTATATCGAGTCATGCAATTTTGGGTAA
# Given: An Open reading frame is defined as a codon sequence contained between the start codon, and ends with the stop codon 

#Given: ATG is a start codon and cannot exist within an open reading frame
# Given: TAA, TAG, TGA are stop codons
# Find the largest open reading frame in the nucleotide sequence