// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
            // Please note that the coordinates appear in reverse order [-122.375, 37.61899948120117],
            // compared to their order in the setView() method. This is because the GeoJSON data coordinates
            // are set with the first parameter as X (longitude) and the second parameter as Y (latitude),
            //  as documented in the GeoJSON Standard. (Links to an external site.) The L.geoJSON()layer reverses the coordinates to plot them on the map.
]};

// To display data on a map with a popup marker, we have to bind the marker with the GeoJSON layer,
//  L.geoJSON(), using a callback function.

// Our options to add data to a marker are to use the pointToLayer or onEachFeature callback functions.
//  With either of these functions, we can add data to a map from each GeoJSON object.
//  The major difference between the two functions is that the pointToLayer callback function
//  adds markers to a map, whereas the onEachFeature callback function allows you to
//  add styling and bind data to a popup marker.

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport,{
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup();
  
  }

}).addTo(map);



 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

