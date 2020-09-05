// region has format of
// {
//     north: number
//     south: number
//     west: number
//     east: number
// }

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjJLkTKGdauHGUkzoeEoyS0ZoD4wUnlx8&libraries=places">
let map;
let service;
let infowindow;


function scrapeRegion(region, typeIn) {
    // write your code here
    let places = new Set();
    let resultSize = 0;
    let request = new google.maps.places.PlaceSearchRequest(bounds=region, type=typeIn);
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            resultSize = results.length;
            for (let i = 0; i < results.length; i++) {
                //put into places, removing duplicates
                places.add(results[i]);
            }
        }
    });
    if (resultSize >= 60){
        let north = region["north"];
        let south = region["south"];
        let east = region["east"];
        let west = region["west"]
        let midVert = (region["north"] + region["south"])/2;
        let midHor = (region["east"] + region["west"])/2;

        //top left
        scrapeRegion({"north" : north, "south" : midVert,
            "east" : midHor, "west" : west }, typeIn).forEach(element => places.add(element));
        //top right
        scrapeRegion({"north": north, "south" : midVert,
            "east" : east, "west" : midHor}, typeIn).forEach(element => places.add(element));
        //bottom left
        scrapeRegion({"north": midVert, "south" : south,
            "east" : midHor, "west" : west}, typeIn).forEach(element => places.add(element));
        //bottom right
        scrapeRegion( {"north": midVert, "south": south,
            "east" : east, "west" : midHor}, typeIn).forEach(element => places.add(element));
    }
    return places;
}



// for node
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user_1:user_1@restaurants.t4ma9.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

// data is array of objects

function uploadToDatabase(data) {

}

