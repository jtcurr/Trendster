import React from 'react';
import MapConfigComponent from './MapConfigComponent.jsx';

class MapDisplayComponent extends React.Component {
  render() {
    const location = {
      lat: 37.7831708,
      lng: -122.4100967
    }
    const markers = [ 
      {
        location: {
          lat: 37.7831708,
          lng: -122.4100967
        }
      }
    ]
    return (
      <div style={{width: 600, height: 300, background: 'red'}}>
        <MapConfigComponent center={ location } markers={ markers }/>
      </div>
    );
  }
}

export default MapDisplayComponent;

