//
//  csvstream_test.cpp
//  stunning-potato
//
//  Created by Daniel Liu on 20-5-29.
//  Copyright © 2020 Daniel Liu. All rights reserved.
//

#include <stdio.h>
#include "csvstream.h"

using namespace std;

int main() {
    csvstream csv("csv-test-1.txt");
    string s;
    while (csv >> s) {
        cout << s << endl;
    }
    return 0;
}
