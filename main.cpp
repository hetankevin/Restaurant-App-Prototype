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
#include "json.hpp"

using nlohmann::json;
using namespace std;

int main(int argc, char *argv[]) {

    string filename;
    cout << "Enter a filename" << '\n';
    cin >> filename;
    ifstream ifs(filename);
    if (!ifs.is_open()) {
        assert(false);
    }

    FoodLocations locs;

    string name, type, rating, price, dineIn, takeOut;

    json j;
    
    while (ifs >> j) {
        locs.addPlace(FoodPlace(j["Place Name"], j["Types"], j["Ratings"], (int) ((double) j["Price Level"] * 10), true, false));
    }

    cout << "What's your budget? Enter up to 4 $" << '\n';
    string budget;
    cin >> budget;

    int budget_requirement = (int) budget.size();
    
    vector<int> pltet = locs.priceLTEqualTo(budget_requirement);
    bool p1 = false, p2 = false;
    int idx = 0;
    int count = 0;
    while (!p1 || !p2) {
        cout << "Suggested location: " << '\n';
        FoodPlace loc = locs[pltet[idx]];
        cout << loc.name << '\n';
        cout << "- " << loc.types[0];
        if (loc.dine_in) cout << "- Dine in" << '\n';
        if (loc.take_out) cout << "- Take out" << '\n';
        cout << "- Rating: " << loc.rating / 10 << "." << loc.rating % 10 << '\n';
        cout << "- ";
        for (int i = 0; i < loc.rating; ++i) cout << "$";
        cout << '\n';

        char c1, c2;
        cout << "Person 1, do you want to eat here? Type Y or N." << endl;
        cin >> c1;
        p1 = (c1 == 'Y');
        cout << "Person 2, do you want to eat here? Type Y or N." << endl;
        cin >> c2;
        p2 = (c2 == 'Y');
        ++count;
        if (count % 10 == 0) cout << "Consider trading in your partner." << endl;
        if (!p1 || !p2) ++idx %= locs.size();
    }

    cout << "You're going to " << locs[pltet[idx]].name << ". Enjoy your meal!" << endl;
    return 0;

}
