// region has format of
// {
//     north: number
//     south: number
//     west: number
//     east: number
// }

function scrapeRegion(region) {
    // write your code here
    return [{}];
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

