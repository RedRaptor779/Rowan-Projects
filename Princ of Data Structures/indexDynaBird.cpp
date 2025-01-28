#include <iostream>
#include <fstream>
#include <string>
#include <stdlib.h>
#include <string.h>
#include <vector>
using namespace std;

int smallest = 0, //read these from the file
largest = 0, 
usLen,
gameRound = 1;

bool wordGuessed = false;

string guess = "";
string ans = "";

vector<char> notinword;

//color func
void red() { printf("\033[1;31m"); }
void green() { printf("\033[1;32m"); }
void yellow() { printf("\033[1;33m"); }
void blue() { printf("\033[1;34m"); }
void purple() { printf("\033[1;35m"); }
void cyan() { printf("\033[1;36m"); }
void white() { printf("\033[1;37m"); }
void reset() { printf("\033[1;0m"); }

void prScr (string, int, string);


void selectionSortVector(vector<string>& v) {
    int minIndex;
    string minValue;
        for (int start = 0; start < (v.size() - 1); start++) {
        minIndex = start;
        minValue = v[start];
            for (int index = start + 1; index < v.size(); index++) {
                if (v[index].length() < minValue.length()) {
                    minValue = v[index];
                    minIndex = index;
                }
            }
        swap(v[minIndex], v[start]);
        }
}

int binarySearch(vector<string>& v, int l) {
    int first = 0,
    last = v.size() - 1,
    middle,
    position = -1;
    bool found = false;
    while (!found && first <= last) {
        middle = (first + last) / 2;
        if (v[middle].length() == l) {
            found = true;
            position = middle;
        }
        else if (v[middle].length() > l)
            last = middle - 1;
        else
            first = middle + 1;
    }
    return position;
}

int main () {
reset();

cout << "Please enter a text file name:";
string fin;
cin >> fin;

ifstream myfile; //generate file obj and open it
myfile.open(fin);

string text;
int iter = 1;

vector<string> words; 

while (getline(myfile, text, '\n')){
    if (iter != 1){
        words.push_back(text);
    }
    iter++;
} //insert file into vector
myfile.close(); //close file

selectionSortVector(words);

for (int g = 0; g < words.size(); g++){
        if (words[g].length() > largest){
            largest = words[g].length();
        }
        if (words[g].length() < smallest || smallest == 0){
            smallest = words[g].length();
        }
}



cout << "Welcome to the game! Enter the integer length of the word you\'d like to guess. Enter between " << smallest << " and " << largest << " characters:\n";
cin >> usLen;

while (usLen < smallest || usLen > largest){
    cout << "Please enter a valid length: \n";
    cin >> usLen;
}

int ind = binarySearch (words, usLen);

if (ind < 0){
    while (ind < 0){
        cout << "No word with that length, please enter a valid length\n>";
        cin >> usLen;
        ind = binarySearch (words, usLen);
    }
}

vector<string> poswo;

while (words[ind].length() == usLen){
    poswo.push_back(words[ind]);
    ind++;
}
int rannum = 0 + (rand() % poswo.size());
ans = poswo[rannum];

while (wordGuessed != true){ //game loop
    cout << "Guess #" << gameRound << "\n";
    prScr(guess, usLen, ans);
    cin >> guess;
    while (guess.length() != ans.length()){
        cout << "That guess is not the same length as the word, please enter another word with the correct length\n>";
        cin >> guess;
    }
    if (guess == ans){
        wordGuessed = true;
        green();
        cout << "You guessed it!\n";
        cout << "It took you " << gameRound+1 << " guesses!";
        reset();
    }
    gameRound ++; //end of game loop
}

return 0;
} //end of main

void prScr (string g, int len, string w){
    bool yell = false;
    if (g == ""){
        for (int i = 0; i < len; i++){
        cout << "_";
        }
        cout << "\n>";
    }
    else {
        cout << "Not in word: ";
        for (int l = 0; l < notinword.size(); l++){
            red();
            cout << notinword[l] << " ";
            reset();
        }
        cout << "\n";
        reset();
        for (int i = 0; i < len; i++){
            if (g[i] == w[i]){
                green();
                cout << g[i];
                reset();
            }
            else{
                for (int j = 0; j < len; j++){
                    if (g[i] == w[j]){
                        yellow();
                        cout << g[i];
                        reset();
                        yell = true;
                    }
                }
                if (yell == false){
                    red();
                    cout << g[i];
                    reset();
                    notinword.push_back(g[i]);
                }
                yell = false;
            }
        }
    cout << "\n>";
    }
}

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}


