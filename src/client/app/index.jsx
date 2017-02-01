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
      listOfRestaurants: [{name:'House of prime Rib'},
                          {name:'Boulevard'},
                          {name:'La Mar'}]
    }
  }

  searchForCity(e, keyword, location) {
    var context = this;
    e.preventDefault();
    console.log(keyword);
    console.log(location);
    var sendData ={ keyword: keyword,
        location: location}
    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      url:'http://localhost:8080/api/menus',
      data: JSON.stringify(sendData),
      success: function (res){
        console.log('response', JSON.parse(res).response.venues);
        context.setState({
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
        <ListComponent list={this.state.listOfRestaurants}/>
      </div>
    );
  }
}

// <MapComponent city={this.state.city} listOfRestaurants={this.state.listOfRestaurants}/>
reactDOM.render(<App />, document.getElementById('app'));
