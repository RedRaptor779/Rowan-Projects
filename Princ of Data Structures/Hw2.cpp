#include <iostream>
#include <vector>
#include <string>
using namespace std;
void selectionSortVector(vector<int>&);
int binarySearch(vector<int>&, int );
void reportResult(vector<int>&, int);
void linearSearch(vector<int>& , int );

int main() {

//Values (unsorted):
// [ 8284, 4663, 5670, 2284, 1197,
// 9109, 6547, 7652, 7925, 2421,
// 8717, 6976, 1671, 5533, 1170,
// 1112, 4921, 9702, 4177, 9821,
// 2454, 3211, 5594, 2417, 7294 ]

vector<int> Values{8284, 4663, 5670, 2284, 1197,
 9109, 6547, 7652, 7925, 2421,
 8717, 6976, 1671, 5533, 1170,
 1112, 4921, 9702, 4177, 9821,
 2454, 3211, 5594, 2417, 7294};

cout << "Numbers unsorted:\n"; // Print unsorted vector
for (int i = 0; i < Values.size(); i++)
    cout << Values[i] << " ";
cout << "\n\n";

selectionSortVector(Values);

cout << "Numbers sorted:\n"; // Print sorted vector
for (int i = 0; i < Values.size(); i++)
    cout << Values[i] << " ";
cout << "\n\n";

int selection;
cout << "What number would you like to search for?";
cin >> selection;

cout << "Binary Search:\n";
reportResult(Values, selection);
cout << "\n";

cout << "Linear Search:\n";
linearSearch(Values, selection);


}

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

void selectionSortVector(vector<int>& v) {
    int minIndex;
    int minValue;
        for (int start = 0; start < (v.size() - 1); start++) {
        minIndex = start;
        minValue = v[start];
            for (int index = start + 1; index < v.size(); index++) {
                if (v[index] < minValue) {
                    minValue = v[index];
                    minIndex = index;
                }
            }
        swap(v[minIndex], v[start]);
        }
}

int binarySearch(vector<int>& v, int str) {
    int first = 0,
    last = v.size() - 1,
    middle,
    position = -1,
    passes = 0;
    bool found = false;
    while (!found && first <= last) {
        middle = (first + last) / 2;
        if (v[middle] == str) {
            found = true;
            position = middle;
        }
        else if (v[middle] > str)
            last = middle - 1;
        else
            first = middle + 1;
        passes++;
    }
    cout << "Passes: " << passes <<"\n";
    return position;
}

void reportResult(vector<int>& v, int state) {
    int pos = binarySearch(v, state);
    if (pos < 0)
        cout << state << " not found.\n";
    else
        cout << state << " found at position " << pos << endl;
}

void linearSearch(vector<int>& v, int srche) {
    int i = 0;
    for (i; i < v.size(); i++) {
        if (v[i] == srche){
            cout << "Passes: " << i+1 << "\n";
            cout << srche << " found at position " << i << "\n";
            break;
        }
    }
    if (v[i] != srche){
        cout << "Passes: " << i << "\n";
        cout << srche << " not found.";
    }
}