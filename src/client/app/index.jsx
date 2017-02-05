import React from 'react';
import reactDOM from 'react-dom';
import SearchComponent from './SearchComponent.jsx';
import MapDisplayComponent from './MapDisplayComponent.jsx';
import ListComponent from './ListComponent.jsx';
import AddressComponent from './AddressComponent.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat:37.7831708,
        lng: -122.4100967
      },
      displayAddress: 'San Francisco, CA, USA',
      listOfVenues: [],
      markers: []
    }
  }

  ajaxSuccess(response) {
    console.log('google maps request success', response);

    this.setState({
      location: response.coordinates,
      displayAddress: response.formalAddress
    });
  }

  //Takes in a keyword and location from SearchComponent and does an ajax call through routers.js
  searchForCity(e, keyword, location) {
    var context = this;
    e.preventDefault();

    var sendData ={
      keyword: keyword,
      location: location
    }

    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({location: sendData.location}),
      url: 'http://localhost:8080/api/menus/location',
      success: this.ajaxSuccess.bind(this),
      error: function(err) {
        console.log('error with google maps request', err);
      }
    })

    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      url:'http://localhost:8080/api/menus',
      data: JSON.stringify(sendData),
      success: function (res) {
        
        var venueArr = JSON.parse(res).response.groups[0].items;
        var markers = [];
        venueArr.forEach(function(item) {
          var itemStorage = {};

          itemStorage.name = item.venue.name;
          itemStorage.location = {
            lat: item.venue.location.lat,
            lng: item.venue.location.lng
          }

          markers.push(itemStorage);
        });

        context.setState({
          location: location,
          listOfVenues: JSON.parse(res).response.groups[0].items,
          markers: markers
        });

      },
      error: function (err) {
        console.log('Error posting search function')
      }
    })

    this.setState({
      location: this.state.location,
      displayAddress: this.state.displayAddress
    })
    
  }
  //the return passes in the searchForCity function into search component to receive user data
  render () {
    return (
      <div>
        <h1>Trendster</h1>
        <p><i>Showing you the HOT spots</i></p>
        <SearchComponent searchFunc={ this.searchForCity.bind(this) }/>
        <AddressComponent address= { this.state.displayAddress } />
        <MapDisplayComponent center={ this.state.location } markers={ this.state.markers } venues={ this.state.listOfVenues }/>
        <ListComponent list={this.state.listOfVenues}/>
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('app'));
