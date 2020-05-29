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
    int count = 0;
    while (!p1 || !p2) {
        cout << "Suggested location: " << '\n';
        FoodPlace loc = locs[pltet[idx]];
        cout << loc.name << '\n';
        cout << "- " << loc.type;
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
