## Spider-Man, Spider-Man
## Does whatever a spider can.
## Spins a web, any size.
## Catches thieves- just like flies.
## Look out! Here comes the Spider-Man.
## Is he strong? Listen, bud.
## He's got radioactive blood.
## Can he swing, from a thread?
## Take a look overhead.
## Hey, there! There goes the Spider-Man!
## In the chill of night, at the scene of a crime
## Like a streak of light
## he arrives, just in time!
## Spider-Man, Spider-Man
## Friendly neighborhood Spider-Man.
## Wealth and fame? He's ignored.
## Action is his reward.
## Look out! There goes the Spider-Man!


name = "Spiderman"
verse1 = "Does whatever a can.Spins a web, any size.Catches thieves- just like flies.Look out! Here comes the "
verse2 = "Is he strong? listen, bud.He's got adioactive blood.Can he swing, from a thread?Take a look overhead.Hey, there! There goes the!"
verse3 = "In the chill of night, at the scene of a crimelike a streak of lighthe arrives, just in time!"
verse4 = "friendly neighborhood Wealth and fame? He's ignored.Action is his reward.Look out! There goes the "

#'Spider-Man' = name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize()
#


print (name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + ', ' + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + '\n' +
       verse1[0:verse1.find(' a ') + 3] + name[0:6].lower() + verse1[verse1.find(' ')] + verse1[verse1.find('can'):verse1.find('.') + 1] + '\n' +
       verse1[verse1.find('.') + 1:verse1.find('size') + 5] + '\n' +
       verse1[verse1.find('Catches'):verse1.find('flies') + 6] + '\n' +
       verse1[verse1.find('Look'): len(verse1)] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse1[verse1.find('.')] + '\n' + 
       verse2[0:verse2.find('.') + 1] + '\n'+
       verse2[verse2.find("He's"):verse2.find('adioactive')] + verse2[verse2.find('r')] + verse2[verse2.find('adio'):verse2.find('blood.') + 6] + '\n' +
       verse2[verse2.find('Can'):verse2.find('thread?') + 7] + '\n' + 
       verse2[verse2.find('Take'):verse2.find('overhead') + 9] + '\n' +
       verse2[verse2.find('Hey'):verse2.find('the!') + 3] + verse2[verse2.find(' ')] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse2[verse2.find('!')] + '\n' +
       verse3[0:verse3.find('crime') + 5] + '\n' + 
       verse3[verse3.find('like'):verse3.find('light') + 5].capitalize() + '\n' +
       verse3[verse3.find('lighthe') + 5:] + '\n' + 
       name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse3[verse3.find(',')] + verse3[verse3.find(' ')] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + '\n' +
       verse4[0:verse4.find('hood') + 4].capitalize() + verse4[verse4.find(' ')] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse4[verse4.find('.')] + '\n' +
       verse4[verse4.find('Wealth'):verse4.find('.') + 1] + '\n' + 
       verse4[verse4.find('Action'):verse4.find('reward') + 7] + '\n' + 
       verse4[verse4.find('reward') + 7:] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse4[verse4.find('!')])


var1 = name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + ', ' + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + '\n' +verse1[0:verse1.find(' a ') + 3] + name[0:6].lower() + verse1[verse1.find(' ')] + verse1[verse1.find('can'):verse1.find('.') + 1] + '\n' +verse1[verse1.find('.') + 1:verse1.find('size') + 5] + '\n' +verse1[verse1.find('Catches'):verse1.find('flies') + 6] + '\n' +verse1[verse1.find('Look'): len(verse1)] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse1[verse1.find('.')] + '\n' + verse2[0:verse2.find('.') + 1] + '\n'+verse2[verse2.find("He's"):verse2.find('adioactive')] + verse2[verse2.find('r')] + verse2[verse2.find('adio'):verse2.find('blood.') + 6] + '\n' +verse2[verse2.find('Can'):verse2.find('thread?') + 7] + '\n' + verse2[verse2.find('Take'):verse2.find('overhead') + 9] + '\n' +verse2[verse2.find('Hey'):verse2.find('the!') + 3] + verse2[verse2.find(' ')] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse2[verse2.find('!')] + '\n' +verse3[0:verse3.find('crime') + 5] + '\n' + verse3[verse3.find('like'):verse3.find('light') + 5].capitalize() + '\n' +verse3[verse3.find('lighthe') + 5:] + '\n' + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse3[verse3.find(',')] + verse3[verse3.find(' ')] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + '\n' +verse4[0:verse4.find('hood') + 4].capitalize() + verse4[verse4.find(' ')] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse4[verse4.find('.')] + '\n' +verse4[verse4.find('Wealth'):verse4.find('.') + 1] + '\n' + verse4[verse4.find('Action'):verse4.find('reward') + 7] + '\n' +  verse4[verse4.find('reward') + 7:] + name[0:6] + verse1[verse1.find('-')] + name[6:9].capitalize() + verse4[verse4.find('!')]

print ('\nThe word \"Spider-Man\" appears ' + (str)(var1.count('Spider-Man')) + ' times!')

