export class Container extends React.Component {
	render(){
		if (!this.props.loaded) {
			return <div>Loading...</div>
		}
		const style = {
			'width': '70vw',
			'height': '70vw'
		}
		return (
			<div style={style}>
			  <Map google={this.props.google}/>
			</div>
		)
	}
}

export default GoogleApiComponent({
	apiKey:  'AIzaSyAhciEsWzSnzUfMBUMBkdkb6sjjl6Chp1k'
})(Container);