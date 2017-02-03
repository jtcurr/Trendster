import React from 'react';
import MapConfigComponent from './MapConfigComponent.jsx';

class MapDisplayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      height: 300
    }
  }

  increaseSize() {
    this.setState({
      width: this.state.width + 50,
      height: this.state.height + 50
    });
  }

  decreaseSize() {
    this.setState({
      width: this.state.width - 50,
      height: this.state.height - 50
    });
  } 

  render() {
    const markers = [ 
      {
        location: {
          lat: 37.7831708,
          lng: -122.4100967
        }
      }
    ];

    return (
      <div id='map' style={{width: this.state.width, height: this.state.height, background: 'none'}}>
        <button id='zoomIn' onClick={this.increaseSize.bind(this)}> + </button>
        <button id='zoomOut' onClick={this.decreaseSize.bind(this)}> - </button>
        <MapConfigComponent center={ this.props.center } markers={ markers }/>
      </div>
    );
  }
}

export default MapDisplayComponent;

