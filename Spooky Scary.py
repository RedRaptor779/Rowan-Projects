# Give the user a fright meter (more on this later)

# You will have a user choose to enter a haunted house of your design. Once a user enters the house, the door must lock (pretty standard stuff). The house should contain rooms (as houses do), and the user should be able to move between rooms. 

# Each room should contain one of the following:

# Nothing (just a description of the room for ambiance)
# A ghoul of your choice. The ghoul should be named, and have a unique print statement when it appears. I expect to see at least 5 different ghouls.
# A flashlight (you should have multiple but no more than half rounded up of your total ghoul count)
# A key (there should be only 1)
# Some in-game behaviors:

# If a player enters a room with a monster their fright meter increases unless they have a flashlight. The user may use the flashlight, to defeat the ghoul, removing it from the game. The is a choice on the player's part, however, and it will consume the flashlight. 
# If the player's fright meter maxes out, the player faints, and loses. 
# The only way for the player to win this game is for them to reach the room where you placed the key, AND navigate back to the locked entrance/exit door.
# You will need to use functions for this to keep your code organized. Looping, and input will be needed as well. 

# Have some fun with this. Your definition of scary can be whatever you want, classic, clowns, final exam monsters, whatever you like. 
import random

def SetGhost():
    ghostPosRooms = ['Kitchen', 'Dining Room', 'Basement', 'Upstairs Hallway', 'Children\'s Room', 'Master Bedroom', 'Playroom']
    ghostRooms = []
    x = 1
    while (x <= 5):
        tempRoom = random.choice(ghostPosRooms)
        ghostRooms.append(tempRoom)
        ghostPosRooms.remove(tempRoom)
        x = x + 1
    return ghostRooms

def roomMotion (userRoom):
    canTravel = []

    if (userRoom == 'Living Room'):  # determining where user can travel based on designed map
        # dining room, kitchen
        canTravel = ['Dining Room', 'Kitchen', 'Stairs']

    elif (userRoom == 'Dining Room'):
        # living room
        canTravel = ['Living Room']

    elif (userRoom == 'Kitchen'):
        # living room 
        canTravel = ['Living Room']

    elif (userRoom == 'Stairs'):
        # upstairs hallway, basement, living room
        canTravel = ['Upstairs Hallway', 'Basement', 'Living Room']

    elif (userRoom == 'Upstairs Hallway'):
        # playroom, master bedroom, childrens room
        canTravel = ['Playroom', 'Master Bedroom', 'Children\'s Room']

    elif (userRoom == 'Basement'):
        # stairs, basement closet
        canTravel = ['Stairs', 'Basement Closet']

    elif (userRoom == 'Basement Closet'):
        # basement 
        canTravel = ['Basement']

    elif (userRoom == 'Playroom'):
        #hallway
        canTravel = ['Upstairs Hallway']

    elif (userRoom == 'Master Bedroom'):
        # hallway, bedroom closet
        canTravel = ['Upstairs Hallway', 'Bedroom Closet']

    elif (userRoom == 'Bedroom Closet'):
        # master bedroom
        canTravel = ['Master Bedroom']

    elif (userRoom == 'Children\'s Room'):
        # hallway
        canTravel = ['Upstairs Bedroom']

    else:
        print ('DEBUG')

    print ('\nYou can go into ')
    u = 1
    for i in canTravel:
        print((str)(u) + '. ' + i)
        u = u + 1

    while (True):
        print ('Enter the number of the room you would like to travel')
        userSel = input('-> ') # fix before leaving
        try:
            return canTravel[(int)(userSel) - 1]
        except:
            print ('Please try again.')




# ####################### Main ############################

scareMeter = 0
rooms = {'Living Room', 'Kitchen', 'Dining Room', 'Stairs', 'Basement', 'Basement Closet', 'Upstairs Hallway', 'Children\'s Room', 'Master Bedroom', 'Bedroom Closet', 'Playroom'}
curRoom = 'Living Room'
setGhostRooms = SetGhost()
flashLights = 0
flashRooms = ['Bedroom Closet', 'Basement Closet']
# flashlights will be in Bedroom Closet, Basement Closet
keyRoom = random.choice(['Playroom', 'Kitchen', 'Dining Room', 'Children\'s Room', 'Basement', 'Master Bedroom'])
key = False


print ( " ('-. .-.   ('-.                      .-') _  .-') _     ('-.  _ .-') _         ('-. .-.                            .-')         ('-.   ")
print ( "( OO )  /  ( OO ).-.                 ( OO ) )(  OO) )  _(  OO)( (  OO) )       ( OO )  /                           ( OO ).     _(  OO)  ")
print ( ",--. ,--.  / . --. / ,--. ,--.   ,--./ ,--,' /     '._(,------.      .'_       ,--. ,--. .-'),-----.  ,--. ,--.   (_)---\_)    (,------. ")
print ( "|  | |  |  | \-.  \  |  | |  |   |   \ |  |\ |'--...__)|  .---',`'--..._)      |  | |  |( OO'  .-.  ' |  | |  |   /     _ |    |  .---' ")
print ( "|   .|  |.-'-'  |  | |  | | .-') |    \|  | )'--.  .--'|  |    |  |  \  '      |   .|  |/   |  | |  | |  | | .-') \   :` `.    |  |     ")
print ( "|       | \| |_.'  | |  |_|( OO )|  .     |/    |  |  (|  '--. |  |   ' |      |       |\_) |  | |  | |  |_|( OO )  '.. `''.) (|  '--.  ")
print ( "|  .-.  |  |  .-.  | |  | | `-'  |  |\    |     |  |   |  .--' |  |   / :      |  .-.  |  \ |  | |  | |  | | \`-' /.-._)   \   |  .--'  ")
print ( "|  | |  |  |  | |  |('  '-'(_.-' |  | \   |     |  |   |  `---.|  '--'  /      |  | |  |   \`' '-'  '('  '-'(_.-' \       /    |  `---. ")
print ( "`--' `--'  `--' `--'  `-----'    `--'  `--'     `--'   `------'`-------'       `--' `--'     `-----'   `-----'     `-----'      `------' ")

print ('Would you like to enter??')
userIn = input('(Y/N):')


if (userIn.lower() == 'y'): # user entered house 
    print ('Welcome to the Haunted House!')
    print('*click* You\'re stuck here now!!!')

    while (scareMeter < 5):
        print ('You are in the ' + curRoom)

        for x in setGhostRooms: # test room for ghost
            if (x == curRoom):
                print ('\nBOO! A ghost appears!')

                if (flashLights > 0): # use flashlight prompt
                    print ('Would you like to use a flashlight?')
                    fyn = input('Y/N -> ')

                    if (fyn.lower() == 'y'):
                        print ('You have used a flashlight! The flashlights battery only has one use and it dims out.')
                        flashLights = flashLights - 1
                        setGhostRooms.remove(curRoom)
                    else:
                        print ('You have decided not to use a flashlight!')
                        print ('You have been scared!')
                        scareMeter = scareMeter + 1
                        print ('You have been scared ' + (str)(scareMeter) + ' times!')
                else:
                    scareMeter = scareMeter + 1
                    print ('You have been scared ' + (str)(scareMeter) + ' times!')
        
        for y in flashRooms: # test to see if player found flashlight
            if (y == curRoom):
                flashLights = flashLights + 1
                print ('You have found a flashlight! You currently have ' + (str)(flashLights) + ' flashlights')
                flashRooms.remove(curRoom)

        if (curRoom == 'Living Room'): # prompt user to attempt door open if in living room
            print ('Would you like to try the door?')
            dyn = input ('Y/N -> ')
            if (dyn.lower() == 'y'):
                if (key == True):
                    print ('YOU WIN!')
                    break
                else:
                    print ('You dont have a key dork. You cant open it')
            else:
                print ('Thats fine you prob dont have a key anyway dork')

        if (keyRoom == curRoom): # Test room for key 
            print ('\nYou have found a key!\n')
            key = True

        # room motion function
        if (scareMeter < 5):
            curRoom = roomMotion(curRoom)
            

        


else: # user didnt enter house
    print('Goodbye!')

if (scareMeter >= 5):
    print ('You were scared 5 times and Fainted!')