# This is Mr. Poppins, and he's a princess. That's my problem generally, but today, it's yours too. He randomly decides on a whim if he wants wet or dry
# food. The thing is, the type of wet or dry isn't enough, the brand he desires always changes. This results in me offering him between 1 - let's say 8 kinds 
# of food every meal. Anyway do the following:

# Create 2 collections of food, wet and dry. Each collection should have several brands of food (4 each)

# Program some cat logic (Random selection) where Poppins will secretly choose what he wants to eat between the 2 collections. Ex. he chose wet friskies.

# A user should then try to guess what food he wants based on your available selections. If the type and brand match, Poppins was fed 1 meal. If the brand is wrong BUT 
# the type is correct (you both chose the same type, but not the same brand), Poppins is fed 1/2 a meal (this counts as a correct selection). Otherwise, he doesn't eat that 
# offering, and he scratches furniture. *Choosing the right brand but the wrong type, is considered wrong. 

# Poppins should RANDOMLY decide if he wants 4 - 6 feedings. You can tell the user at the start how many times he wants to be fed, but it should change at program start.

# However, if Poppins scratches the furniture 3 times, the program ends, and he's a sad boy. 

# After every correct guess, Mr. Poppins should have made another new random selection (remember, he's annoying)(and remember, it could be the same choice).

# I expect to see at least 1 function in this lab.

# Hint: Two string methods you might thank me for isdigit(), and isalpha()

import random
dryBrand = ['Purina', 'Chewy', 'Meow Mix', 'IAMS']
wetBrand = ['Friskies', 'Fancy Feast', 'ONE', 'Tiki Cat']

def pickType():
    ty = ''
    ty = random.choice(['Wet', 'Dry'])
    return ty

def pickBrand(wd):
    brand = ''
    if (wd == 'Wet'):
        brand = random.choice(wetBrand)
    else:
        brand = random.choice(dryBrand)

    return brand

def testBrand (tipe):
    cereal = ''
    while (True):
        if ((str)(tipe).lower() == 'wet'):
            print ('Which brand of Wet food would you like?')
            print (wetBrand)
            cereal = input('-> ')
            for x in wetBrand:
                if (x.lower() == (str)(cereal).lower()):
                    return x
            print ('Please enter a valid brand')
        elif ((str)(tipe).lower() == 'dry'):
            print ('Which brand of Dry food would you like?')
            print (dryBrand)
            cereal = input('-> ')
            for x in dryBrand:
                if (x.lower() == (str)(cereal).lower()):
                    return x
            print ('Please enter a valid brand')
        else:
            print ('debug')


# Main


print ('Mr. Poppins is hungry! But he doesnt want to tell you what he wants to eat so you have to guess!')
feedTimes = random.randint(4, 6)
userFeedTime = (float)(0)
wod = ''
usBrand = ''
scratch = 0

print ('Mr. Poppins would like to be fed ' + (str)(feedTimes) + ' times! What a fat cat!')
print ('If you feed Mr. Poppins the correct type of food but not the right brand he will only eat half of the food. \nIf you feed Mr. Poppins the wrong type of food he will scratch the furniture. \nIf he scratches the furniture 3 times he will not eat and he will be sad!')

while (userFeedTime < feedTimes):
    type = pickType()
    brand = pickBrand(type)

    uin = False
    while (uin == False):
        print ('\n Would you like to feed Mr. Poppins Wet or Dry food?')
        wod = input('\"Wet\"/\"Dry\"-> ')

        if (wod.lower() == 'wet'):
            uin = True
            userBrand = testBrand(wod)

        elif (wod.lower() == 'dry'):
            uin = True
            userBrand = testBrand(wod)
        else:
            print ('Please specify \"Wet\" or \"Dry\"')

    if ((wod.lower() == type.lower()) and (brand.lower() == userBrand.lower())):
        print ('You have guessed correctly! You feed Mr. Poppins one time!')
        userFeedTime = userFeedTime + 1
    elif (wod.lower() == type.lower()):
        print ("You guessed the right type but the wrong brand of food. Mr. Poppins eats half of it")
        userFeedTime = userFeedTime + 0.5
    else:
        print ('You have guessed incorrectly and Mr. Poppins got mad and scratched your furniture.')
        scratch = scratch + 1
        print ('Mr. Poppins has scratched your furniture ' + (str)(scratch) + ' times')
        if (scratch >= 3):
            print ('Mr. Poppins is angry and sad and will not eat anymore food.')
            break

    print ('You have fed Mr. Poppins ' + (str)(userFeedTime) + ' Times!')
    

        





