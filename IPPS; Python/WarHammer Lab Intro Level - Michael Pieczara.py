# """
# Flavor Quote:
# It is the 41st Millenium. In the grim darkness of the far future,
# there is only war. The Emperor of Mankind wages a constant battle to protect 
# humanity from the horrors of space. On the fringes of the Imperium, 
# alien races lurk and plot, and chaos demons leak into our reality from the
# torment of the warp. All that stands in their way are the mighty Space Marines.
# They are more than mortal. They are steel, and they are doom. 
# They are the champions of mankind. And the greatest of them all... 
# are the Ultramarines.
# -Brother Carnak

# Warhammer 40k is a tabletop grim fantasy where there are no heroes, only
# perspectives. Players choose a faction, and use a point buy system to 
# determine what sort of units they will comprise an army of.
 

# For this assignment, you are to do the following:
# Go to: https://wh40k.lexicanum.com/wiki/Space_Marine_Legion 
# and scroll to the area called Organization. Below there is a  table
# called The Twenty Space Marine Legions of the Great Crusade. Using that,
# I want you to choose 2 legions, 1 Loyal and 1 Traitor (defined by the Loyalty column).

# You will then:
      

# You will then create some variables to store info about each: Primarch's name', 
# Legion #, battle cry
# (Click the name of your chosen Legions in the table and scroll down to find 
#  the associated info)

# Tell me the following information in a few structured sentences: 
#     Primarch's name', Legion #, battle cry

# Then make variables:
# Guardsman, Space Marine, Primaris(Space Marine+), Chapter Master, Titan, 
# Primarch (I want the word Primarch + their name) and set a numeric value to each. Note they are ordered 
# currently in increasing value.Ex. Guardsman < space marine, etc 


# You will then ask a user to build an army worth 100 points.
# To build an army: 
# Ask the user to pick between your 2 chosen Legions.
# State the Legion #
# The user then can pick any combo of units you offer in any quantity but, they 
# must have an army worth at least 90 points, and no more than 100 points.

# Once chosen state: 

# The army's value
# Lastly, state their battle cry

# An example scenario:
#     Welcome to Warhammer 40K! You will choose a Legion:
#      Option 1 (Loyalist): The Dark Angels, commanded by Primarch Lion El'Jonson. Their battle cry is Repent! For tomorrow you die!  
#      Option 2 (Traitor): A traitor legion...

# The user then chooses a Legion

# Then you display the units available and their cost:

# Guardsman 1

# Space Marine 3

# Primaris 6

# Chapter Master 12

# Titan 30

# Primarch 50

# Let the user choose a unit. Then another, and so on until they have at least 90 points totaled, and no more than 100. If they try to stop before 90, tell them how many more points they need before they can stop. Note: you cannot automatically stop if they are at 90, they choose when to stop after that threshold up until reaching 100. 

# 2 weeks for this one. For the Emperor!



# MY SELECTION 

# World Eaters - Traitor
# Ultramarines - Loyal

WEPrim = 'Angron'
UMPrim = 'Roboute Guilliman'
WELeNum = 12
UMLeNum = 13
WEBC = 'Blood for the Blood God!'
UMBC = 'Courage and Honour!'

Guardsmen = 1
SpaceMarine = 3
Primaris = 6
ChapterMaster = 12
Titan = 30
Primarch = 50

UserPoints = 0
UserPrim = ''

print ('Welcome to WarHammer40k!\nChoose a legion by typing the legion number:') # legion selection prompt
print ('The Traitors, Legion #' + (str)(WELeNum) + ', The World Eaters! They are commanded by ' + WEPrim + ', and their battle cry is: \"' + WEBC + '\"')
print ('The Loyalists, Legion #' + (str)(UMLeNum) + ', The Ultramarines! They are commanded by ' + UMPrim + ', and their battle cry is: \"' + UMBC + '\"')

while (UserPrim == ''): # legion selection loop
    UserIn = input ('->')
    if ((str)(UserIn) == '12'):
      print ('You have chosen The World Eaters!')
      UserPrim = WEPrim
    elif ((str)(UserIn) == '13'):
        print ('You have chosen The Ultramarines!')
        UserPrim = UMPrim
    else:
       print ('You have not input a valid legion number, please try again') # end of legion selection

# army builder prompt
print ('******************************************\n ' +
       'You will build an army with more than 90 points, but no more than 100 points.\n' + 
       'Select one unit to begin by typing a number:')
print ('1. Guardsman - 1 \n2. SpaceMarine - 3 \n3. Primaris - 6 \n4. ChapterMaster - 12 \n5. Titan - 30 \n6. ' + UserPrim + ' - 50 \n' +
       'Type \"Menu\" to display this menu again.')

while (UserPoints <= 100): # begining of unit selection
    UserIn = input('->')
    if (UserIn == '1'):
      print('You have chosen Guardsmen.')
      if (UserPoints <= 99):
         UserPoints = UserPoints + Guardsmen
      else: 
         print ('You cannot select this unit!')

    elif (UserIn == '2'):
      print('You have chosen a SpaceMarine')
      if (UserPoints <= 97):
         UserPoints = UserPoints + SpaceMarine
      else:
         print ('You cannot select this unit!')

    elif (UserIn == '3'):
      print('You have chosen a Primaris')
      if (UserPoints <= 94):
         UserPoints = UserPoints + Primaris
      else:
         print ('You cannot select this unit!')

    elif (UserIn == '4'):
      print('You have chosen a ChapterMaster')
      if (UserPoints <= 88):
         UserPoints = UserPoints + ChapterMaster
      else:
         print ('You cannot select this unit!')

    elif (UserIn == '5'):
      print('You have chosen a Titan')
      if (UserPoints <= 70):
         UserPoints = UserPoints + Titan
      else:
         print ('You cannot select this unit!')
    
    elif (UserIn == '6'):
      print('You have chosen ' + UserPrim)
      if (UserPoints <= 50):
         UserPoints = UserPoints + Primarch
      else:
         print ('You cannot select this unit!')

    elif (UserIn.lower() == 'quit'): # testing for quit prompt
       if (UserPoints >= 90):
          print ('You have made your army with ' + (str)(UserPoints) + ' points.')
          UserPoints = 200
       else:
          print('You do not have enough points to quit.')

    elif (UserIn.lower() == 'menu'): # testing for menu prompt
       print ('1. Guardsman - 1 \n2. SpaceMarine - 3 \n3. Primaris - 6 \n4. ChapterMaster - 12 \n5. Titan - 30 \n6. ' + UserPrim + ' - 50')

    else:
      print ('You have not selected a valid Unit, please try again.') # end of unit selection
  
    if (UserPoints >= 100): #testing for max points
        print ("All Done!")
        UserPoints = 200
    else: 
       print ('You are currently at ' + (str)(UserPoints) + ' Points. If you would like to quit type \"Quit\"')
       
   # try not to use break and also change the numbers to variables