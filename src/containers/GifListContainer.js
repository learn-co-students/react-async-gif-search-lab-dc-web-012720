import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import GifCard from '../components/GifCard'

class GifListContainer extends React.Component {
    
    constructor() {
        super()
        this.state = {
            gifList: []
        }
    }
    
    searchApi = (event) => {
        event.preventDefault()
        let searchTerm = event.target.children[0].value
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`).then(
            resp => resp.json()
        ).then( json => {
            this.setState({gifList: json.data})   
        })
        event.target.reset()
    }

    makeGifCards = () => {
        
        let currentGifs = this.state.gifList
        
        return <div>
            {currentGifs.map(gif => {
                let gifUrl = gif.images.original.url   
                return <GifCard gifUrl={gifUrl}/>
            })}
        </div>
    }
    
    render() {
        return (
            <h1>Container
                <GifSearch searchApi={this.searchApi} />
                <GifList makeGifCards={this.makeGifCards}/>
            </h1>
           
        )
    }
}

export default GifListContainer