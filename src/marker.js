const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = (type, coords) => {
  // Your Code Here

  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  console.log(iconURLs[type]);

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
  // .addTo(map)
  // .setDraggable(true)
};

module.exports = buildMarker;
