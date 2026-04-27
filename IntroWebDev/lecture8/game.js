let player = {
    score: 0,
    words: [],

    addPoints: function(point) {
        this.score += point;
    },

    getWordList: function() {
        return this.words.join(", ");
    },

    isLongWord: function(word) {
        return word.length > 6;
    },

    startsWithVowel: function(word) {
        return /^[aeiouAEIOU]/.test(word);
    }
}

// game function: this will be called whenever the player submits a word

function submitWord(word) {
    // get the input field
    let inputField = document.getElementById("wordInput");

    // retrieve the type value
    word = inputField.value;

    // remove any leading or trailing whitespace
    word = word.trim();
    
    // check if the word is valid (not empty)
    if (word === "") {
        document.getElementById("message").innerText = "Please enter a word.";
        return;
    }
    if (player.words.includes(word)) {
        document.getElementById("message").innerText = "You have already entered that word.";
        return;
    }

    // add the word to the player's list
    player.words.push(word);

    // SCORING RULES
    let points = 1; // base points for any word
    if (player.isLongWord(word)) {
        points += 2; // bonus for long words
    }
    if (player.startsWithVowel(word)) {
        points += 1; // bonus for words starting with a vowel
    }

    // update the player's score
    player.addPoints(points);

    //UPDATE THE UI
    //display all the words entered
    document.getElementById("wordList").innerText = "Words: " + player.getWordList();
    // clear the input field
    inputField.value = "";

    // display the updated score
    document.getElementById("scoreDisplay").innerText = "Score: " + player.score;

    // clear any previous messages
    document.getElementById("message").innerText = "";
}
