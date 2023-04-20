var mario = "mario";
var age = "play";
var combined = 12 + 3;
console.log(combined)

console.log("Hello Asia-Am 191A! :)") 

// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); 
// [] is array, 15 is zoom in

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.0709, -118.444]).addTo(map) 
        .bindPopup('Math Sciences 4328 aka the Technology Sandbox<br> is the lab where I work in ')
        .openPopup();

let marker1 = L.marker([34.072054, -118.449945]).addTo(map) 
        .bindPopup('my dorm')
        .openPopup();

let marker2 = L.marker([34.074073, -118.439067]).addTo(map) 
        .bindPopup('AA191A classroom')
        .openPopup();
        

function addMarker(lat,lng,message){ 
    console.log(message) 
    L.marker([lat,lng]).addTo(map).bindPopup(message) 
    return message 
}

addMarker (34.069344, -118.444817, "bus stop");