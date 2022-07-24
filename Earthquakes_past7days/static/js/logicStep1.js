// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// alternative to the above code :Create the map object with a center and zoom level.




 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "SatelliteStreets": satelliteStreets
  };

// Create the map object with a center and zoom level.
  let map = L.map("mapid", {
    center: [
      39.5, -98.5
   ],
   zoom: 3,
   layers:[streets]
 });
 // Pass our map layers into our layers control and add the layers control to the map.
 L.control.layers(baseMaps).addTo(map);

// Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it

// Accessing the Toronto airline routes GeoJSON URL.
let earthData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(earthData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});