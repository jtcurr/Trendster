import React from 'react';
import reactDOM from 'react-dom';
import SearchComponent from './SearchComponent.jsx';
import MapComponent from './MapComponent.jsx';
import ListComponent from './ListComponent.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {lat:-25, lng: 131},
      listOfVenues: []
    }
  }
  //Takes in a keyword and location from SearchComponent and does an ajax call through routers.js
  searchForCity(e, keyword, location) {
    var context = this;
    e.preventDefault();
    var sendData ={ keyword: keyword,
        location: location}
    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      url:'http://localhost:8080/api/menus',
      data: JSON.stringify(sendData),
      success: function (res){
        //parse out response, limits response to 10 results
        res = JSON.parse(res);
        context.setState({
          city: location,
          listOfVenues: res.response.venues.slice(0, 10)
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
        <p>Catchy Slogan!</p>
        <SearchComponent searchFunc={this.searchForCity.bind(this)}/>
        <ListComponent list={this.state.listOfVenues}/>
      </div>
    );
  }
}

// <MapComponent city={this.state.city} listOfRestaurants={this.state.listOfRestaurants}/>
reactDOM.render(<App />, document.getElementById('app'));
