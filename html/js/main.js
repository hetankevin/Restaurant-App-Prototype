let locations;


function loadJSON() {
    let requestURL = "/annarbor.json";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        locations = request.response;
    }
}
// */

/*
function loadJSON() {
    fetch("/annarbor.json")
        .then(response => response.json())
        .then(json => locations);
}
 */

loadJSON();

console.log(locations);

function query() {
    alert('query');
    let priceSelect = document.getElementById("price");
    let results = document.getElementById("results");
    results.innerHTML = "";
    for (let i = 0; i < locations.length; i++) {
        let obj = locations[i];
        let pl = obj["Price Level"] * 10;
        if (pl <= priceSelect.value) {
            results.innerHTML += "<li>" + obj["Place Name"] + "</li>";
            alert(obj["Place Name"]);
        }
    }
}