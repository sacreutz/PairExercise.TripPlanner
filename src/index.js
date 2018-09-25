const mapboxgl = require('mapbox-gl');
const buildMarker = require("./marker")


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

  const buildMarkerOne = buildMarker('hotels', [-87.641, 41.896])
  buildMarkerOne.addTo(map)

console.log(buildMarkerOne)
