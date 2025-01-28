install.packages(c("httr", "jsonlite"))
library(httr)
library(jsonlite)

res1<-GET("https://rss.applemarketingtools.com/api/v2/us/music/most-played/100/songs.json")
res1
rawToChar(res1$content)

data1 = fromJSON(rawToChar(res1$content))

us100<-data1$feed$results

new_genre <- us100$genres
new_genre

genre_names <- sapply(new_genre, function(df) df$name[1])

country_songs <- us100[genre_names == "Country", ]
nrow(country_songs) #there are 11 country songs in the US top 100

res2 <- GET("https://rss.applemarketingtools.com/api/v2/gb/music/most-played/100/songs.json")

data2<-fromJSON(rawToChar(res2$content))
uk100<-data2$feed$results

commonsongs <- intersect(us100$name, uk100$name)

length(commonsongs) #51 songs shared between the lists


