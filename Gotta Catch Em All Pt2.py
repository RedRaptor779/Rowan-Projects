# A class is the design print that an object is based upon:

class Pokemon:
  def __init__(self, name, pokedexID):
    self.name = name
    self.pokedexID = pokedexID

  def pokedexDesc(self):
    print(self.name, "Pokedex description here")

#The object (seen below as p1) is what is created and used potentially within a script to cause change.

p1 = Pokemon("Poliwrath", 62)
p1.pokedexDesc()

quagsire = Pokemon('Quagsire', 195)
quagsire.pokedexDesc()
wooper = Pokemon('Wooper', 194)
wooper.pokedexDesc()
herdier = Pokemon('Herdier', 507)
herdier.pokedexDesc()
trubbish = Pokemon('Trubbish', 568)
trubbish.pokedexDesc()
swirlix = Pokemon('Swirlix', 684)
swirlix.pokedexDesc()
bulbasaur = Pokemon('Bulbasaur', 1)
bulbasaur.pokedexDesc()
roserade = Pokemon('Roserade', 407)
roserade.pokedexDesc()
charmeleon = Pokemon('Charmeleon', 5)
charmeleon.pokedexDesc()
litwick = Pokemon('Litwick', 607)
litwick.pokedexDesc()
slowbro = Pokemon('Slowbro', 80)
slowbro.pokedexDesc()

# Copy the above code and try running it in your IDE. 
# See if you can understand what's happening. 
# Even if you can't I want you to take the above example, and use it to create 10 Pokemon (p1s essentially) 