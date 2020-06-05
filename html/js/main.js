let locations;

function loadJSON() {
    let requestURL = "../../annarbor.json";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        locations = request.response;
    }
}

loadJSON();

function query() {
    let priceSelect = document.getElementById("price");
    let results = document.getElementById("results");
    results.innerHTML = "";
    for (let i = 0; i < locations.length; i++) {
        let obj = locations[i];
        let pl = obj["Price Level"] * 10;
        if (pl <= priceSelect.value) {
            results.innerHTML += "<p>" + obj["Place Name"] + "</p>"
        }
    }
}