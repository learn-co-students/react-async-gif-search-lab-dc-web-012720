import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            text: "",
            searchedGifs: []
        }
    }

    searchControl = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=pik0POrVyveZ3YBy6CLjZBWgGvSs2j6e&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {
            this.setState({
                searchedGifs: [gifs.data[0], gifs.data[1], gifs.data[2]]
            })
        })
    }



    render() {
        return (
            <div>
                <GifSearch searchControl = {this.searchControl} text = {this.state.text} handleSubmit = {this.handleSubmit}/>
                <GifList gifs = {this.state.searchedGifs} />
            </div>
        )
    }
}

export default GifListContainer