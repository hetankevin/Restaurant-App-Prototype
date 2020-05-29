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
    string type;
    int rating; // 42 = 4.2 rating / 5
    int price; // 1 = $, 2 = $$, ..., 4 = $$$$
    bool dine_in;
    bool take_out;
};

struct FoodPlaceComp {
    bool operator()(const FoodPlace &fp1, const FoodPlace &fp2) {
        return fp1.rating < fp2.rating;
    }
};

class FoodLocations {
    
    vector<FoodPlace> places;
    unordered_map<string, int> namelookup;
    unordered_map<string, vector<int>> typelookup;
    vector<vector<int>> ratinglookup;
    vector<vector<int>> pricelookup;
    
public:
    
    FoodLocations() : places{}, namelookup{}, typelookup{}, ratinglookup{41, vector<int>()}, pricelookup{4, vector<int>()} {}
    
    void addPlace(const FoodPlace &fp) {
        places.push_back(fp);
        namelookup[fp.name] = (int) places.size() - 1;
        typelookup[fp.type].push_back((int) places.size() - 1);
    }
    
    int searchPlace(const string &name) {
        return (namelookup.find(name) != namelookup.end()) ? namelookup[name] : -1;
    }
    
};

int main(int argc, char *argv[]) {

    cout << "Hello world" << endl;
    return 0;

}
