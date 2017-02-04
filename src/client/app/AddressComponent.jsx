import React from 'react';

class AddressComponent extends React.Component {
	render() {
		console.log(this.props);
		return(
		<h3> See what's trending in { this.props.address } </h3>
		);
	}
}

export default AddressComponent;