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
    
}