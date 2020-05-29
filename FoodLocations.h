//
//  FoodLocations.h
//  stunning-potato
//
//  Created by Daniel Liu on 20-5-29.
//  Copyright © 2020 Daniel Liu. All rights reserved.
//

#ifndef FoodLocations_h
#define FoodLocations_h

#include <unordered_map>
#include <string>
#include <vector>

struct FoodPlace {
    std::string name;
    std::string type;
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
    
    std::vector<FoodPlace> places;
    std::unordered_map<std::string, int> namelookup;
    std::unordered_map<std::string, std::vector<int>> typelookup;
    std::vector<std::vector<int>> ratinglookup;
    std::vector<std::vector<int>> pricelookup;
    
public:
    
    FoodLocations();
    
    void addPlace(const FoodPlace &fp);
    
    int searchPlace(const std::string &name);
    
    std::vector<int> searchTypes(const std::vector<std::string> &types);
    
    std::vector<int> ratingGreaterThan(int num);
    
    std::vector<int> priceEqualTo(int num);
    
};

#endif /* FoodLocations_h */
