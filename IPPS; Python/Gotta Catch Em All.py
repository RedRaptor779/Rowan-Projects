# I want you to choose any 3 you like. Then, you will display them to a user. 
# When the user selects one, you tell them the pokedex id # for the pokemon, its element types, name 1 attack it has, and its pokedex entry descriptive text. 

# pokemon suggested by friends: charmeleon sandile and froakie

# name string, pokedex id string, element types string, attack string, pokedex desc string

def prinPoke (poke):
    print (poke[0] + ', #' + poke[1])
    print ('Type(s): ' + poke[2])
    print ('Attack: ' + poke[3])
    print (poke[4])

charmeleon = ['Charmeleon', '0005', 'Fire', 'Flare Blitz', 'When it swings its burning tail, it elevates the temperature to unbearably high levels.']
sandile = ['Sandile', '0551', 'Ground, Dark', 'Power Trip', 'They live buried in the sands of the desert. The sun-warmed sands prevent their body temperature from dropping.']
froakie = ['Froakie', '0656', 'Water', 'Hydro Pump', 'It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.']

print ('Welcmome to the Pokedex! Here are 3 pokemon, to view details about them enter their menu value')
print ('1. ' + charmeleon[0] + '\n2. ' + sandile[0] + '\n3. ' + froakie[0])

userIn = input('-> ')

if (userIn == '1'):
    prinPoke(charmeleon)
elif (userIn == '2'):
    prinPoke(sandile)
    print()
elif (userIn == '3'):
    prinPoke(froakie)
    print()
else:
    print ("You selected nothing! Good job")