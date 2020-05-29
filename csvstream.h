//
//  csvstream.h
//  stunning-potato
//
//  Created by Daniel Liu on 20-5-29.
//  Copyright © 2020 Daniel Liu. All rights reserved.
//

#ifndef csvstream_h
#define csvstream_h

#include <iostream>
#include <string>
#include <sstream>

class csvstream {
    
    std::ifstream is;
    std::sstream ss;
    
public:
    
    csvstream(const std::string& fname);
    
    csvstream &operator>>(std::string &s);
    
};

#endif /* csvstream_h */
