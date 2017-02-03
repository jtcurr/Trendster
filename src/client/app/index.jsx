import React from 'react';
import reactDOM from 'react-dom';
import SearchComponent from './SearchComponent.jsx';
import MapDisplayComponent from './MapDisplayComponent.jsx';
import ListComponent from './ListComponent.jsx';
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
      imageObj: {}
    }
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
      success: function(response) {
        console.log('google maps request success', response);
        context.setState({
          location: response.coordinates,
          displayAddress: response.formalAddress
        })
      },
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
        //parse out response, limits response to 10 results
        context.setState({
          location: location,
          listOfVenues: JSON.parse(res).response.groups[0].items
        });
      },
      error: function (err) {
        console.log('Error posting search function')
      }
    })
  }
  //the return passes in the searchForCity function into search component to receive user data
  render () {

    return (
      <div>
        <h1>Trendster</h1>
        <p></p>
        <SearchComponent searchFunc={this.searchForCity.bind(this)}/>
        <MapDisplayComponent center={ this.state.location } />
        <ListComponent list={this.state.listOfVenues}/>
      </div>
    );
  }
}


reactDOM.render(<App />, document.getElementById('app'));
