//
//  csvstream.h
//  stunning-potato
//
//  Created by Daniel Liu on 20-5-29.
//  Copyright © 2020 Daniel Liu. All rights reserved.
//

#ifndef csvstream_h
#define csvstream_h

#include <fstream>
#include <iostream>
#include <string>
#include <sstream>

class csvstream {
    
    std::ifstream is;
    std::stringstream ss;
    
public:
    
    csvstream(const std::string& fname);
    
    csvstream &operator>>(std::string &s);
    
    operator bool() {
        return is || ss;
    }
    
};

#endif /* csvstream_h */
