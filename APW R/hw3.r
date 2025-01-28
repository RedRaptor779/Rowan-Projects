var1 <- sample(10, 1)
print (var1)
var2 <- sample(10, 1)
print (var2)

var1 = var1 + var2


if (var1 < 16){
    while (var1 < 16) {
        var2 <- sample(10, 1)
        print (var2)
        var1 = var1 + var2
    }
} 

if (var1 >= 16 && var1 <= 21){
    print ("Hold")
    print (var1)
} else {
    print ("Busted")
    print (var1)
}

