// declare the map
const map = L.map('the_map').setView([34.0709,-118.444], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(34.040909, -118.443432,'Mello Mello','bomb coconut dessert place')
addMarker(34.062098, -118.313207,'Crafted Donuts','where the awesome prof bought donuts for his spoiled students')
addMarker(34.063721, -118.294561,'Dan Sung Sa','hands down favourite Korean resturant in LA')
addMarker(34.062474, -118.113898,"Alice's Kitchen",'authentic Cantonese style restaurant!')

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat, lng, title)
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('mouseover', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}


fetch("map1.geojson") 
    .then(response => { 
        return response.json();
    })
    .then(data =>{ 
        // Basic Leaflet method to add GeoJSON data
       // L.geoJSON(data).addTo(map)
       L.geoJSON(data, {
        pointToLayer: (feature, latlng) => { 
            return L.circleMarker(latlng, {color: feature.properties.color, weight:3})
        }
    }).bindPopup(layer => {
        return layer.feature.properties.place;
    }).addTo(map);
    });