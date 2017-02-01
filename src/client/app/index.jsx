import React from 'react';
import reactDOM from 'react-dom';
import SearchComponent from './SearchComponent.jsx';
import MapComponent from './MapComponent.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {lat:-25, lng: 131},
      listOfRestaurants: [{},{}]
    }
  }

  searchForCity(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      success: function (res){
        console.log(res);
        this.setState({
          city: res.city,
          listOfRestaurants: res.listOfRestaurants
        });
      },
      error: function (err) {
        console.log('Error posting search function')
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Trendster</h1>
        <p>Catchy Slogan!</p>
        <SearchComponent searchFunc={this.searchForCity.bind(this)}/>
      </div>
    );
  }
}

// <MapComponent city={this.state.city} listOfRestaurants={this.state.listOfRestaurants}/>
reactDOM.render(<App />, document.getElementById('app'));
