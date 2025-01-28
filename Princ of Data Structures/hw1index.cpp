#include <iostream>
using namespace std;

int 
main (){
    int entry1,
    entry2,
    entry3,
    entry4, 
    entry5;
    cout << "Enter 5 integer values:\n";
    cin >> entry1;
    cin >> entry2;
    cin >> entry3;
    cin >> entry4;
    cin >> entry5;

    cout << "\nValues entered: " << entry1 << " " << entry2 << " " << entry3 << " " << entry4 << " " << entry5 << "\n";
    cout << "SUM: " << entry1 + entry2 + entry3 + entry4 + entry5 << "\n";

    int min, 
    max;

    if (entry1 > entry2){
        max = entry1;
    }
    else {
        max = entry2;
    }
     if (entry2 > max){
        entry2 = max;
    }
     if (entry3 > max) {
        max = entry3;
    }
    if (entry4 > max) {
        max = entry4;
    }
    if (entry5 > max) {
        max = entry5;
    }

    if (entry1 < entry2){
        min = entry1;
    }
    else {
        min = entry2;
    }
     if (entry2 < min){
        min = entry2;
    }
     if (entry3 < min) {
        min = entry3;
    }
    if (entry4 < min) {
        min = entry4;
    }
    if (entry5 < min) {
        min = entry5;
    }

    cout << "MAX: " << max << "\n";
    cout << "MIN: " << min << "\n";

    double average = (double)(entry1 + entry2 + entry3 + entry4 + entry5)/5;
    cout << "AVERAGE: " << average <<"\n";
}