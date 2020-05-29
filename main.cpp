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
#include <fstream>
#include <vector>

#include "FoodLocations.h"

using namespace std;

int main(int argc, char *argv[]) {

    ifstream ifs;
    string filename;
    cout << "Enter a filename" << '\n';
    cin >> filename;
    ifs.open(filename);
    if (!ifs.is_open()) exit(1);

    FoodLocations locs;

    string name, type, rating, price, dineIn, takeOut;

    while (ifs >> name >> type >> rating >> price >> dineIn >> takeOut) {
        int r = stod(rating) * 10;
        int p = (int) price.size();
        bool dine = (dineIn == "Yes") ? true : false;
        bool take = (takeOut == "Yes") ? true : false;
        FoodPlace f(name, type, r, p, dine, take);
        locs.addPlace(f);
    }

    cout << "What's your budget? Enter up to 4 $" << '\n';
    string budget;
    cin >> budget;

    int budget_requirement = (int) budget.size();
    
    vector<int> pltet = locs.priceLTEqualTo(budget_requirement);
    bool p1 = false, p2 = false;
    int idx = 0;
    
    while (!p1 || !p2) {
        cout << "Suggested location: " << endl;
        FoodPlace loc = locs[pltet[idx]];
        cout << loc.name << endl;
        cout << "- " << loc.type;
        if (loc.dine_in) cout << "- Dine in" << endl;
        if (loc.take_out) cout << "- Take out" << endl;
    }

    cout << "Hello world" << endl;
    return 0;

}
