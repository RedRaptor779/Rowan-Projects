# So before streaming, there was renting physical copies of movies and TV. It was an awful system, but it's fun to make fun of. 

# You will program the following:

# A welcome message for the user displaying current promos

# Welcome the user to your store. 

# Program 4 promos ideas idc what. Ex. BOGO, 3 for 3, Get 20% genre X, etc.
# When the program runs, choose 2 at RANDOM to display after the welcome message is presented to the user. 
# Movies/TV series/Videogames for rental (At least 12 entries in total)

# Each entry needs a title, year produced, genre, and a description
# The rental process

# Add your own genre-based aisle system like you did in the shopping lab. 
# Users should be able to add multiple movies to their cart that will be used in checkout. They should also be able to remove movies from their cart as well.
# Snacks services (At least 8 entries)

# Before checkout, users should be offered a snack bar, to purchase goodies to enjoy with their movie.
# Snacks should vary in price
# A membership system

# Before checkout begins, ask the user if they are a member or pro member.
# Members
# If they are, they receive a discount on all "old movies/TV" (more on that at checkout) and snacks.
# If they're not, offer to sell them a membership. that will be added to the total, BUT it will also still give them the old movie discount.
# Pro Members
# If they are, they receive a discount on everything members do and old videogames. 
# Non Members
# Offer to sell them a membership. that will be added to the total, BUT it will still give them the discounts.
# Checkout process - This is when a price total should be calculated

# New movies/TV (movies/TV from 2010 and newer, yes I know this is a stretch) should cost 5.99
# Old movies/TV 3.75
# Old Videogames 5.00 (from 2010 and newer)
# New Videogames 8.00
# Membership is a flat fee, say 25 for basic, 35 for pro
# A 7.5% tax should be applied to the order AFTER the discount if a discount was applied. 
# Tell the user what they saved if they had a membership. 
# Tell them the total with an itemized receipt
import random

promos = ['promo1', 'promo2', 'promo3', 'promo4', 'promo5', 'promo6', 'promo7', 'promo8']

# genres: action

movies = {
    # movie 1
    # movie 2
    # movie 3
    # movie 4
}

games = { # categories: action, story
    'CS:GO': ['CSGO', 2012, 'Action', 'CSGO is a 5v5 competetive shooter where terrorists attempt to plant an explosive device and counter terrorists try to stop them from doing that'],
    'Fortnite': ['Fortnite', 2017, 'Action', 'Fortnite Description'],
    'WatchDogs': ['WatchDogs', 2014, 'Story', 'watchdogs desc'],
    'Saints Row': ['Saint\'s Row', 2006, 'Story', 'Saintsrow desc']
}

tvShows = {
    # tv 1
    # tv 2
    # tv 3
    # tv 4
}

snacks = {
    'Popcorn': ['Popcorn', 5.50],
    'Sour Patch Kids': ['Sour Patch Kids', 2.00],
    'Skittles': ['Skittles', 2.0],
    'Mtn Dew': ['Mtn Dew', 2.50],
    'Snickers Bar': ['Snicker\'s Bar', 1.0]
}

checkout = False
membership = 0 # where 0 is none 1 is standard and pro is 2

curPromo = []
curPromo.append(promos.pop(random.randint(0, 7)))
curPromo.append(promos.pop(random.randint(0, 6)))



print ('*_*_* WELCOME TO BLOCKBUSTER *_*_*')
print ('Our current promos are:')
print (curPromo[0] + '\n' + curPromo[1])

print ('Pick an aisle you would like to go down:')
print ('1. Movies \n 2. Games \n 3. TV Shows')
userIn = input('->')

while (checkout != True):

    if (userIn == '1'):
        # pick genre
    elif (userIn == '2'):
        # pick genre
    elif (userIn == '3'):
        # pick genre
    else:
        print ('You did not go down an aisle')

# checkout

print ('Do you have a BlockBuster membership? (Y/N)') # ask abt membership
userMemb = input('(Y/N)->')

if (userMemb.lower() == 'y'): # has membership
    # give discount
    userMemb = 'n'
    print ('Are you a Blockbuster Pro member?')
    userMemb = input('(Y/N)->')
    if (userMemb.lower() == 'y'): # has pro
        print ('Great! You\'ll get a discount on Media and Video Games older than 2010')
        membership = 2
    elif (userMemb.lower() == 'n'): # does not have pro
        print('Would you like to upgrade?')
        userMemb = input()
elif (userMemb.lower() == 'n'): # does not have membership
    print ('Would you like to buy a membership?\nWe offer the Standard Edition (S) for $25 and the Pro Edition (P) for $35. \nPurchasing a membership will give you a deal on older games and media.')
    buyMem = input('(S/P/N)->')
    if (buyMem.lower() == 's'):
        # add membership to cart
    elif (buyMem.lower() == 'p'):
        # add pro membership to cart
    