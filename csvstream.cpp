//
//  csvstream.cpp
//  stunning-potato
//
//  Created by Daniel Liu on 20-5-29.
//  Copyright © 2020 Daniel Liu. All rights reserved.
//

#include <stdio.h>

#include "csvstream.h"
using namespace std;

csvstream::csvstream(const string& fname) : is {fname}, ss("") {}

csvstream &csvstream::operator>>(std::string &s) {
    if (ss.str() == "") {
        string str;
        getline(is, str);
        ss.clear();
        ss.str(str);
    } else {
        getline(ss, s, ',');
    }
}
