#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;


struct Node {
    int data;
    Node* next;
};

Node* createNode(int data) {
    Node* newNode = new Node;
    newNode->data = data;
    newNode->next = nullptr;
    return newNode;
}

Node* arrayToLinkedList(vector<int> arr, int size) {
    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < size; i++) {
        Node* newNode = createNode(arr[i]);

        if (head == nullptr) {
            head = newNode;
            tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    return head;
}

void printListToFile(Node* head, const string& filename) {
    ofstream outfile(filename);

    if (!outfile.is_open()) {
        cerr << "Error opening file: " << filename << std::endl;
        return;
    }

    Node* current = head;
    while (current != nullptr) {
        outfile << current->data << " ";
        current = current->next;
    }

    outfile.close();
}

int main (){
    string filename;
    
    cout << "Enter the name of input file: \n";
    cin >> filename;

    cout << "Opening input file...\n";

    ifstream myfile; //generate file obj and open it
    myfile.open(filename);

    cout << "Storing values in a linked list.\n";

    int it = 0;
    int current;
    vector<int> values;
    while (!myfile.eof()){
        myfile >> current;
        values.push_back(current);
        it++;
    }

    Node* lili = arrayToLinkedList(values, values.size());

    cout << "Done reading input file.\n";

    myfile.close(); //closing the file

    string outpf;
    cout << "Enter name of output file: \n";
    cin >> outpf;


    cout << "Printing sorted values to output file...\n";
    printListToFile(lili, outpf);

    cout << "Sorted values printed to " << outpf;




    return 0;
}