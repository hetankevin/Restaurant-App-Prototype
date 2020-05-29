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

template <typename T>
void append(vector<T> &original, const vector<T>& add) {
    for (int x : add) {
        original.push_back(x);
    }
}

vector<int> FoodLocations::searchTypes(const vector<string> &types) {
    vector<int> results;
    for (const string &type : types) {
        append(results, typelookup[type]);
    }
    return results;
}

vector<int> FoodLocations::ratingGreaterThan(int num) {
    vector<int> results;
    int look = 40;
    while (look + 10 >= num) {
        append(results, ratinglookup[look]);
        --look;
    }
    return results;
}

vector<int> FoodLocations::priceEqualTo(int num) {
    return pricelookup[num - 1];
}
