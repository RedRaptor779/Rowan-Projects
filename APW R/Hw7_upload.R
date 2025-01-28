stats <-read.csv(file.choose())


stats[stats$Birth.rate < 15 & stats$Internet.users > 80,]

