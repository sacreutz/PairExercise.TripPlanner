const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FjcmV1dHoiLCJhIjoiY2ptaTR3ZjZqMDBoaDNwbXdmdjVwMDFwdSJ9.rLvTG-ak5P1E9lK4KtxOKA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl)
  .setLngLat([-87.641, 41.895])
  .addTo(map)
  .setDraggable(true); // [-87.641, 41.895] for Chicago

buildMarker('hotels', [-87.641, 41.896]).addTo(map);
buildMarker('restaurants', [-87.634, 41.896]).addTo(map);
// const buildMarkerTwo = buildMarker('restaurants', [-87.641, 42]).addTo(map);
// const buildMarkerThree = buildMarker('activities', [-84.641, 41.596]).addTo(
//   map
// );

//buildMarkerOne.addTo(map)

// console.log(buildMarkerOne);
// console.log(buildMarkerTwo);
// console.log(buildMarkerThree);
