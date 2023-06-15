// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':11}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addMarker(data){
    L.circleMarker([data.lat,data.lng]).addTo(map).bindPopup(`<h2>${data['What is your favourite restaurant in LA? ']}</h2> <h3>${data['What is your favourite dish from there? ']}</h3>`)
    createButtons(data.lat,data.lng,data['What is your favourite restaurant in LA? '])
    return data.message
}



function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoUnSMdLyHVWGU0ezkYxS8VZiOUi-m0DFsmkZO0zNWDXAPMbSfPcEvESerLY6a8lrW9yufc8rP6cZE/pub?output=csv"

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
}

loadData(dataUrl)
