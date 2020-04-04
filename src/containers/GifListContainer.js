import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends Component {

	constructor(){
		super()
		this.state = {
			gif: []
		}
	}

	
	componentDidMount = () => {
		fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
		.then(response => response.json())
		.then(gifData => (
			this.setState({
				gif: gifData.data
			})
		))
	}

	submitHandler = (input) => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response.json())
		.then(data => (
			this.setState({gif:data.data})
		))
	}


	render(){
		return(
			<div>
			<GifSearch submitHandler={this.submitHandler}/>
			<GifList list={this.state.gif}/>
			</div>
		)
	}
}

export default GifListContainer