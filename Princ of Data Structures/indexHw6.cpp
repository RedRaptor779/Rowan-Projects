#include <iostream>
#include <string>
#include <map>
#include <fstream>
using namespace std;
class State{
private:
    string name;
    string abreviation;
    string capital;
    string population;
    string area;
public:
    State() {
    name = "";
    abreviation = ""; 
    capital = "";
    population = "";
    area = ""; }
    State(string n, string ab, string c, string p, string a) {
        name = n;
        abreviation = ab;
        capital= c;
        population= p;
        area = a; }

    void setName(string n) { name = n; }
    void setAbreviation(string n) { abreviation = n; }
    void setCapital(string n) {capital = n; }
    void setPop(string n) {population = n; }
    void setArea(string n) {area = n;}

    string getName() const { return name; }
    string getAbreviation() { return abreviation; }
    string getCapital() {return capital; }
    string getPop() {return population;}
    string getArea() {return area;}
};
int main() {
    ifstream inputFile;
    string fileName, name, abreviation, capital, searchAbv;
    string population, area;
    map<string, State> statesMap;
    //Open and read file

    cout << "Enter the name of the input file: ";
    string userIn;
    cin >> userIn; 

    inputFile.open(userIn);

    if(inputFile) {
        //If end of file is reached,
        //getline will evaluate to false and loop will end
        while(getline(inputFile, name)) {
            getline(inputFile, abreviation);
            getline(inputFile, capital);
            getline(inputFile, population);
            getline(inputFile, area);
            //name and email variables store info for a new Contact
            statesMap[abreviation] = State(name, abreviation, capital, population, area);
        }
    }

    while (searchAbv != "Q"){
        cout << "Enter state abbreviation, Q to quit: ";
        getline(cin, searchAbv);
        //Use auto keyword to assign data type to iterator
        //Use find function to search map
        auto iter = statesMap.find(searchAbv);
        if (iter != statesMap.end()) {
            cout << "Name: " << iter->second.getName() << endl;
            cout << "Abbreviation: " << iter->second.getAbreviation() << endl;
            cout << "Capital: " << iter->second.getCapital() << endl;
            cout << "Population: " << iter->second.getPop() << endl;
            cout << "Area (Sq Miles): " << iter->second.getArea() << endl;
        } else {
            cout << "State not found.\n";
        }
    }
    return 0;
}
