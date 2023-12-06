# Using a Blend of Lists and Dictionaries and whatever else you desire, I want you to make a grocery store. You must include the following:
# 1.Make several unique grocery aisles 4 minimum
# 2.Each aisle should contain at least 5 items.
# 3.Each item should have a price attached to it 
# 4.Let a user choose to purchase several items
# 5. A user should be able to navigate the aisles
# 6. A user should only see items while they are in a specific aisle (Ex. I can't see lobster while I'm in the dairy section)
# 7.A user should be able to view their cart of current items with its total
# Extra Credit: Add the ability to remove items from their cart

keepShopping = True # loop condition

fridgeAisle = ['Steak', 'Milk', 'Yogurt', 'Ice Cream', 'Hot Pockets']
cannedAisle = ['Canned Green Beans', 'Campbells Soup', 'Chef Boyardee Ravioli', 'Baked Beans', 'Spam']
cerealAisle = ['Cheerios', 'Rice Crispies', 'Cinnamon Toast Crunch', 'Frosted Flakes', 'Raisin Bran']
snackAisle = ['Doritos', 'Cheez-its', 'Fruit Snacks', 'Lay\'s', 'Goldfish']

selectItem = ''


cart = []


print ('Welcome to the Python Grocery Store!')
print ('Please select which aisle youd like to go down first!')

while (keepShopping): #shopping loop

    print ('1. Refriderator Aisle\n 2. Canned Food Aisle\n 3. Cereal Aisle\n 4. Snack Aisle') #aisle selection menu
    userIn = input('->')
    print (userIn)
    if (userIn == '1'):
        stay = True
        while (stay): # stay in aisle until user asks to leave
            print ('You are in the Refriderator Aisle and you have ' + (str)(cart[:]) + ' in your cart! Please select which items you would like to add (\"L\" to leave the aisle)')
            y = 0
            for x in fridgeAisle:
                print ((str)(y + 1) + '. ' + x)
                y = y + 1
            selectItem = input('->')
            if (selectItem.lower() == 'l'):
                stay = False
            else:
                cart.append((str)(fridgeAisle[(int)(selectItem) - 1]))

    elif (userIn == '2'):
        stay = True
        while (stay): # stay in aisle until user asks to leave
            print ('You are in the Cereal Aisle and you have ' + (str)(cart[:]) + ' in your cart! Please select which items you would like to add (\"L\" to leave the aisle)')
            y = 0
            for x in cannedAisle[:]:
                print ((str)(y + 1) + '. ' + x)
                y = y + 1
            selectItem = input('->')
            if (selectItem.lower() == 'l'):
                stay = False
            else:
                cart.append((str)(cannedAisle[(int)(selectItem) - 1]))

    elif (userIn == '3'):
        stay = True
        while (stay): # stay in aisle until user asks to leave
            print ('You are in the Cereal Aisle and you have ' + (str)(cart[:]) + ' in your cart! Please select which items you would like to add (\"L\" to leave the aisle)')
            y = 0
            for x in cerealAisle[:]:
                print ((str)(y + 1) + '. ' + x)
                y = y + 1
            selectItem = input('->')
            if (selectItem.lower() == 'l'):
                stay = False
            else:
                cart.append((str)(cerealAisle[(int)(selectItem) - 1]))

    elif (userIn == '4'):
        stay = True
        while (stay): # stay in aisle until user asks to leave
            print ('You are in the Snack Aisle and you have ' + (str)(cart[:]) + ' in your cart! Please select which items you would like to add (\"L\" to leave the aisle)')
            y = 0
            for x in snackAisle[:]:
                print ((str)(y + 1) + '. ' + x)
                y = y + 1
            selectItem = input('->')
            if (selectItem.lower() == 'l'):
                stay = False
            else:
                cart.append((str)(snackAisle[(int)(selectItem) - 1]))

    print('Would you like to stop shopping? (Y/N)')
    userIn = input('->')
    if (userIn.lower() == 'y'):
        keepShopping = False
        print ('You have ' + (str)(cart[:]) + ' in your cart!')
