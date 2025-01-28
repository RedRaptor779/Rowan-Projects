/* 

-------------------------------------------------------------BUBBLE SORT-------------------------------------------------------------
*/

#include <iostream>
using namespace std;
void swap(int& a, int& b);
void printArray(int array[], int size);
void bubbleSort(int array[], int size);
void bubbleSortShortCircuit(int array[], int size);
int main()
{
/*const int arraySize = 10;
int myArray[arraySize] = { 10, 5105, 2, -15, 29, 1414, 14, 1, 2, 4 };
printArray(myArray, arraySize);
bubbleSortShortCircuit(myArray, arraySize);
printArray(myArray, arraySize);

const int arraySize = 10;
int myArray[arraySize] = { 10, 5105, 2, -15, 29, 1414, 14, 1, 2, 4 };
printArray(myArray, arraySize);
selectionSort(myArray, arraySize);
printArray(myArray, arraySize);
*/
}

void bubbleSort(int array[], int size) {
int maxID; //right-most position in unsorted portion of array
int index;
//decrease the right-most position as sorted portion grows
for (maxID = size - 1; maxID > 0; maxID--) {
//Walk through unsorted portion of array to compare pairs
for (index = 0; index < maxID; index++) {
//Check if pair of values need to swap
if (array[index] > array[index + 1])
swap(array[index], array[index + 1]);
        }
    }   
}
void bubbleSortShortCircuit(int array[], int size) {
bool madeASwap = true; //This will be part of the loop condition
for (int maxID = size - 1; maxID > 0 && madeASwap; maxID--) {
madeASwap = false; //No swaps have occurred yet on this pass
for (int index = 0; index < maxID; index++) {
if (array[index] > array[index + 1]) {
swap(array[index], array[index + 1]);
madeASwap = true;
}
}
}
}
void swap(int& a, int& b) {
int temp = a;
a = b;
b = temp;
}
void printArray(int array[], int size)
{
for (int i = 0; i < size; i++) {
cout << array[i] << " ";
}
cout << "\n";
}


/*

-------------------------------------------------------------SELECTION SORT---------------------------------------------------------
*/

// #include <iostream>
// using namespace std;
 void swap(int& a, int& b);
 void printArray(int array[], int size);
 void selectionSort(int array[], int size);
// // int main()
// // {
// // // const int arraySize = 10;
// // // int myArray[arraySize] = { 10, 5105, 2, -15, 29, 1414, 14, 1, 2, 4 };
// // // printArray(myArray, arraySize);
// // // selectionSort(myArray, arraySize);
// // // printArray(myArray, arraySize);
// // }

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

void selectionSort(int array[], int size) {
    int minIndex, minValue;
    for (int start = 0; start < (size - 1); start++) {
        minIndex = start;
        minValue = array[start];
            for (int index = start + 1; index < size; index++) {
                if (array[index] < minValue) {
                minValue = array[index];
                minIndex = index;
                }
            }
        swap(array[minIndex], array[start]);
    }
}

void printArray(int array[], int size){
        for (int i = 0; i < size; i++) {
            cout << array[i] << " ";
        }
    cout << "\n";
}


/*

-------------------------------------------------------------SELECTION SORT VECTOR---------------------------------------------------------
*/

#include <vector>

void selectionSortVector(vector<string>& v) {
    int minIndex;
    string minValue;
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

    //-------------------------------------------------------------BINARY SEARCH VECTOR---------------------------------------------------------

void reportResult(vector<string>& v, string state) {
    int pos = binarySearch(v, state);
    if (pos < 0)
        cout << state << " not found.\n";
    else
        cout << state << " found at position " << pos << endl;
}

int binarySearch(vector<string>& v, string str) {
    int first = 0,
    last = v.size() - 1,
    middle,
    position = -1;
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
    }
    return position;
}