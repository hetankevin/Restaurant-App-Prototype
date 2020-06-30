class foodLocations {
    constructor(socket) {
        this.socket = socket;
        this.places = [];
        this.nameLookup = {};
        this.typeLookup = {};
        this.ratingLookup = [];
        this.priceLookup = [];
    }

    addPlace(place) {
        this.places.push(place);
        this.nameLookup[place.name] = this.places.size() - 1;
        for (let i = 0; i < fp.types.size(); ++i) {
            this.typeLookup[fp.types[i]].push(this.places.size() - 1);
        }
    }

    searchPlace(name) {
        return (name in this.nameLookup ? this.nameLookup[name] : -1);
    }

    ratingGreaterThan(num) {
        var results = [];
        let look = 40;
        while (look + 10 >= num) {
            for (let i = 0; i < this.ratingLookup[look].size(); ++i) {
                results.push(this.ratingLookup[look]);
            }
            --look;
        }
        return results;
    }

    priceLTEqualTo(num) {
        var p = [];
        for (let i = num - 1; i >= 0; --i) {

        }
    }

}