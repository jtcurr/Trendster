import React from 'react';
import MapConfigComponent from './MapConfigComponent.jsx';

class MapDisplayComponent extends React.Component {
  render() {
    const markers = [ 
      {
        location: {
          lat: 37.7831708,
          lng: -122.4100967
        }
      }
    ]
    return (
      <div id='map' style={{width: 600, height: 300, background: 'red'}}>
        <MapConfigComponent center={ this.props.center } markers={ markers }/>
      </div>
    );
  }
}

export default MapDisplayComponent;

