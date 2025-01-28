#include <iostream>

using namespace std;


class DynIntStack {
    private:
    //StackNode Definition
    struct StackNode {
    int value;
    StackNode *next;
    StackNode(int value1, StackNode *next1 = nullptr) {
            value = value1;
            next = next1;
        }
    };
    //top is a pointer to the top node in the stack.
    //This is a private field that can only be
    //accessed within class member functions
    StackNode *top;
    public:
    //All public member functions go here
    //Default constructor
    DynIntStack() {
        top = nullptr;
    }

    void print (){
        StackNode* current = top;
        if (current == nullptr){
            cout << "Empty";
        }
        while (current != nullptr){
            cout << current->value << " ";
            current = current->next;
        }
    }

    //Destructor
    ~DynIntStack() {
    StackNode * garbage = top;
        while (garbage != nullptr) {
        top = top->next;
        garbage->next = nullptr;
        delete garbage;
        garbage = top;
        }
    }
    //Adds value to the top of the stack
    void push(int num) {
        top = new StackNode(num, top);
    }
    //Removes value from the top of stack
    void pop(int &num) {
    StackNode *temp;
    if (isEmpty()) {
        cout << "The stack is empty.";
    } else {
        num = top->value;
        temp = top;
        top = top->next;
        delete temp;
    }
    }
    //Returns true if stack is empty
    bool isEmpty() const {
        return top == nullptr;
    }
    //Add additional public member functions here
};


class DynIntQueue {
    private:
    //QueueNode Definition
    struct QueueNode {
        int value;
        QueueNode *next;
        QueueNode(int value1, QueueNode *next1 = nullptr) {
        value = value1;
        next = next1;
        }
    };
    //front and rear are pointers to the front
    //and rear nodes in the queue.
    //These are private fields that can only be
    //accessed within class member functions
    QueueNode *front;
    QueueNode *rear;
    public:
    //All public member functions go here
    //Default constructor
    DynIntQueue() {
        front = nullptr;
        rear = nullptr;
    }
    //Destructor
    ~DynIntQueue() {
    QueueNode * garbage = front;
        while (garbage != nullptr) {
            front = front->next;
            garbage->next = nullptr;
            delete garbage;
            garbage = front;
        }
    }

    void print (){
        QueueNode* current = front;
        if (current == nullptr){
            cout << "Empty";
        }
        while (current != nullptr){
            cout << current->value << " ";
            current = current->next;
        }
    }

    //Add value to the rear of the queue
    void enqueue(int num) {
        if (isEmpty()) {
            front = new QueueNode(num);
            rear = front;
        } else {
            rear->next = new QueueNode(num);
            rear = rear->next;
        }
    }
    //Remove value from the front of the queue
    void dequeue(int &num) {
    QueueNode *temp = nullptr;
        if (isEmpty()) {
            cout << "The queue is empty.\n";
        } else {
            num = front->value;
            temp = front;
            front = front->next;
            delete temp;
        }
    }
    //Returns true if queue is empty
    bool isEmpty() {
    return (front == nullptr);
    }
    //Add additional public member functions here
};

int main (){
    int userIn = 1;
    DynIntQueue ball;
    DynIntStack cups;

    while (userIn != 0){
        cout <<"1) Print stack and queue\n";
        cout <<"2) Add a value to stack\n";
        cout <<"3) Add a value to queue\n";
        cout <<"4) Remove a value from stack\n";
        cout <<"5) Remove a value from queue\n";
        cout <<"Enter an option, 0 to quit:";
        cin >> userIn;

        if (userIn == 1){
            cups.print();
            cout <<"\n";
            ball.print();
            cout <<"\n";
        }
        else if (userIn == 2){
            cout << "Enter the number you would like to add:";
            int t;
            cin >> t;
            cups.push(t);
            cout <<"\n";
        }
        else if (userIn == 3){
            cout << "Enter the number you would like to add:";
            int t;
            cin >> t;
            ball.enqueue(t);
            cout <<"\n";
        }
        else if (userIn == 4){
            int removed_value = INT_MIN;
            cups.pop(removed_value);
            if (removed_value != INT_MIN){
                cout << "Value removed from queue: " << removed_value;
            }
            cout <<"\n";
        }
        else if (userIn == 5){
            int removed_value = INT_MIN;
            ball.dequeue(removed_value);
            if (removed_value != INT_MIN){
                cout << "Value removed from queue: " << removed_value;
            }
            cout <<"\n";
        }
        else{
            cout << "Please try again";
            cout <<"\n";
        }
    }

    return 0;
}
