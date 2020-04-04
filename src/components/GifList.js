import React, {Component} from 'react'

class GifList extends Component {

	renderList = () => {
		return this.props.list.map(obj => (

				<img src={obj.images.original.url}></img>
			
		))
	}
	render(){
		return(
			<div>{this.renderList()}</div>
			// <p>hey</p>
		)
	}
}

export default GifList