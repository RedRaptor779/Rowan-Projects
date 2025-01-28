#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

void selectionSortVector(vector<int>& v);
void swap(int& a, int& b);

int main (){

    string filename;
    
    cout << "Enter the name of input file: \n";
    cin >> filename;

    cout << "Opening input file...\n";

    ifstream myfile; //generate file obj and open it
    myfile.open(filename);

    string count;
    myfile >> count;

    cout << "Storing " << count << " values to the array...\n";

    int it = 0;
    int current;
    vector<int> values;
    while (!myfile.eof()){
        if (it != 0){
        myfile >> current;
        values.push_back(current);
        }
        it++;
    }

    cout << "Done reading values from input file.\n";
    myfile.close(); //closing file

    cout << "Sorting values...\n";
    selectionSortVector(values);

    string outpf;
    cout << "Enter name of output file: \n";
    cin >> outpf;

    ofstream ofile (outpf); //create new output file

    cout << "Printing sorted values to output file...\n";
    for (int i = 0; i < values.size(); i++){
        ofile << values[i] << "\n";
    }

    cout << "Sorted values printed to " << outpf;
    ofile.close(); //closing output file


    return 0;
}//end main

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

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}