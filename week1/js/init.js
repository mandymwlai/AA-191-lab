
		// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 2); 
// [] is array, 15 is zoom in

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

        
var circle = L.circle([34.020991,-118.272402], {
        color: 'green',
        fillColor: '#8fce00',
        fillOpacity: 0.4,
        radius: 30000, 
    }).addTo(map);

    var circle = L.circle([22.331189,114.198405], {
        color: 'green',
        fillColor: '#8fce00',
        fillOpacity: 0.4,
        radius: 30000, 
    }).addTo(map);

    




function addMarker(lat,lng,message){ 
    console.log(message) 
    L.marker([lat,lng]).addTo(map).bindPopup(message) 
    return message 
}

addMarker (22.331189,114.198405, "Hong Kong - a city I will always call home");
addMarker (37.472627,126.465237, "Incheon, Korea - here for a layover flight");
addMarker (25.269507,51.589888, "Doha, Qatar - here for a layover flight");
addMarker (45.007030,78.386460, "Taldykorgan, Kazakhstan - here for a field hockey tournament")
addMarker (40.712776,-74.005974, "New York! - club event")
addMarker (32.715736,-117.161087, "San Diego - vist to a friend")
addMarker (34.070666,-118.444282, "UCLA - best college!")
addMarker (34.036126,-118.689129, "Malibu -  a weekend getaway")
addMarker (33.827156,-116.538388, "Palm Springs - club retreat")
addMarker (36.169322,-115.143785, "Las Vegas!")
addMarker (37.784927,-122.415148, "San Francisco - winter break vacation")
addMarker (49.261657,-123.122596, "Vancouver - winter break vacation")
addMarker (34.020991,-118.272402, "Los Angeles - home away from home")