
matplot(t(Points/MinutesPlayed), type="b", pch=15:18, col=c(1:4,6))
legend("bottomleft", inset = 0.01, legend=Players, col=c(1:4,6), pch=15:18, horiz=F)

#the most efficient player in this scenario seems to be LebRon James because he is consistently at the top when referring to the graph

matplot(t((Points/MinutesPlayed)/Salary), type="b", pch=15:18, col=c(1:4,6))
legend("bottomleft", inset = 0.01, legend=Players, col=c(1:4,6), pch=15:18, horiz=F)
#Lebron is consistently at the top once again 




