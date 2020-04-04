import React, {Component} from 'react'

class GifSearch extends Component {
	constructor(){
		super()
		this.state = {
			input: ""
		}
	}

	changeInputState = (event) => {
		this.setState({input: event.target.value})
	}

	handleClick = () => {
		this.props.submitHandler(this.state.input)
	}
	render(){
	

		return(
			<div>
				<p>Enter a search term:</p>
				<input type="text" onChange={this.changeInputState} value={this.state.input}></input>
				<button type="submit" onClick={this.handleClick}>Find Gifs</button>
			</div>
		)
	}
}

export default GifSearch