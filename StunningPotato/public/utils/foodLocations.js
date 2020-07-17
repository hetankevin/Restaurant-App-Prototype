class FoodLocations {
    constructor(socket) {
        this.socket = socket;
        this.places = [];
        this.nameLookup = {};
        this.typeLookup = {};
        this.ratingLookup = [];
        for (let i = 0; i < 41; ++i) this.ratingLookup.push([]);
        this.priceLookup = [];
        for (let i = 0; i < 4; ++i) this.priceLookup.push([]);
    }

    addPlace(place) {
        this.places.push(place);
        this.nameLookup[place.name] = this.places.length - 1;
        for (let i = 0; i < place.types.length; ++i) {
            this.typeLookup[place.types[i]].push(this.places.length - 1);
        }
    }

    searchPlace(name) {
        return (name in this.nameLookup ? this.nameLookup[name] : -1);
    }

    ratingGreaterThan(num) {
        var results = [];
        let look = 40;
        while (look + 10 >= num) {
            for (let i = 0; i < this.ratingLookup[look].length; ++i) {
                results.push(this.ratingLookup[look]);
            }
            --look;
        }
        return results;
    }

    priceLTEqualTo(num) {
        var p = [];
        for (let i = num - 1; i >= 0; --i) {
            for (let j = 0; j < this.priceLookup[i].length; ++j) {
                p.push(this.priceLookup[i]);
            }
        }
        p.sort(function(a, b) { return
        (this.places[b].rating < this.places[a].rating)});
        return p;
    }

}

module.exports = {
    FoodLocations: FoodLocations
}