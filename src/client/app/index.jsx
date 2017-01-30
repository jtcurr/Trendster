import React from 'react';
import {render} from 'react-dom';
import SearchComponent from './SearchComponent.jsx';
import MapComponent from './MapComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Trendster</h1>
        <p>Catchy Slogan!</p>
        <SearchComponent />
        <MapComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
