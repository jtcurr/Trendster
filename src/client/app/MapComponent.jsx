import React from 'react';

class MapComponent extends React.Component {
  constructor({city, listOfRestaurants}) {
    super({city, listOfRestaurants});
    this.state = {
      zoom: 4
    }
  }

  mapCreator(city, listOfRestaurants) {
    var center = {lat: city.lat, lng: city.lng};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: this.state.zoom,
      center: center
    });
  }

  render() {
  return (
    <div id="map">
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhciEsWzSnzUfMBUMBkdkb6sjjl6Chp1k&callback=mapCreator"></script>
    </div>
  )
  }
}








//Creating a marker for each restaurant
// listOfRestaurants.forEach(function(restaurant) {
// create a new marker with position: {lat: restaurant.lat, lng: restaurant.lng} and map: map
// })
