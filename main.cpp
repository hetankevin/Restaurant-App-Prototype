#include <algorithm>
#include <cassert>
#include <deque>
#include <functional>
#include <iostream>
#include <iterator>
#include <limits>
#include <list>
#include <map>
#include <math.h>
#include <numeric>
#include <queue>
#include <set>
#include <stack>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>

using namespace std;

struct FoodPlace {
    string name;
    int rating; // 42 = 4.2 rating / 5
    int price; // 1 = $, 2 = $$, ..., 4 = $$$$
    bool dine_in;
    bool take_out;
};

class FoodLocations {
    
    vector<FoodPlace> places;
    unordered_map<string, int> namelookup;
    
public:
    
    FoodLocations() {}
    
    void addPlace(const FoodPlace &fp) {
        places.push_back(fp);
        namelookup[fp.name] = (int) places.size() - 1;
    }
    
    int searchPlace(const string &name) {
        return (namelookup.find(name) != namelookup.end()) ? namelookup[name] : -1;
    }
    
};

int main(int argc, char *argv[]) {

    cout << "Hello world" << endl;
    return 0;

}
