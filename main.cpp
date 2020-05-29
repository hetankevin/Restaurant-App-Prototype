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

    string name, type, rating, price, dineIn, takeOut;

    while (ifs >> name >> type >> rating >> price >> dineIn >> takeOut) {
        double r = stod(rating) * 10;
        int p = price.size();
        bool dine = (dineIn == "Yes") ? true : false;
        bool take = (takeOut == "Yes") ? true : false;
        FoodPlace f
    }

    cout << "What's your budget? Enter up to 4 $" << '\n';
    string budget;
    cin >> budget;

    FoodLocations locs;
    l
    

    cout << "Hello world" << endl;
    return 0;

}
