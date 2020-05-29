//
//  FoodLocations.cpp
//  stunning-potato
//
//  Created by Daniel Liu on 20-5-29.
//  Copyright © 2020 Daniel Liu. All rights reserved.
//

#include <stdio.h>
#include "FoodLocations.h"

using namespace std;

FoodLocations::FoodLocations() : places{}, namelookup{}, typelookup{}, ratinglookup{41, vector<int>()}, pricelookup{4, vector<int>()} {}

void FoodLocations::addPlace(const FoodPlace &fp) {
    places.push_back(fp);
    namelookup[fp.name] = (int) places.size() - 1;
    typelookup[fp.type].push_back((int) places.size() - 1);
}

int FoodLocations::searchPlace(const string &name) {
    return (namelookup.find(name) != namelookup.end()) ? namelookup[name] : -1;
}

vector<int> searchTypes(const vector<string> &types) {
    vector<int> results;
    for (const string &type : types) {
        
    }
}

vector<int> FoodLocations::ratingGreaterThan(int num) {
    vector<int> results;
    int look = 40;
    while (look + 10 >= num) {
        for (int x : ratinglookup[look]) {
            results.push_back(x);
        }
    }
    return results;
}

vector<int> FoodLocations::priceEqualTo(int num) {
    return pricelookup[num - 1];
}
