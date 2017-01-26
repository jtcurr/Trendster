import React from 'react';
import {render} from 'react-dom';
import SearchComponent from './SearchComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Trendster</h1>
        <p>Catchy Slogan!</p>
        <SearchComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
