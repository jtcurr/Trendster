import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class MapConfigComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {
		        lat:37.7831708,
		        lng: -122.4100967
		     }
      	}
	}
	
	render() {
		const mapContainer = <div style={{ height: '100%', width: '100%' }}></div>;
		const markers = this.props.markers.map((venue, i) => {
			const marker = {
				position: {
					lat: venue.location.lat,
					lng: venue.location.lng
				}
			}

			return <Marker key={i} {...marker} />
		})
		return (
			<GoogleMapLoader
				containerElement = { mapContainer }
				googleMapElement = { 
					<GoogleMap
						defaultZoom={12}
						ref = {(map) => map && map.panTo(this.props.center)}
						options={{streetViewControl: false, mapTypeControl: false}}>
						{ markers }
					</GoogleMap>
				} />
		);
	}
}

export default MapConfigComponent;