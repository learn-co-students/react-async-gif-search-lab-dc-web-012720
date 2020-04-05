import React, { Component } from 'react'

import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'



class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: null,

        }
    }

    fetchThoseGifs = (form_event) => {
        form_event.preventDefault()
        let search_term = form_event.target.querySelector('#input_field').value
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search_term}&api_key=mxJbCquzN8xp1kyVhZ9nlVlOehtqscCS&rating=g`)
        .then(res => res.json())
        .then(data => {
            var i;
            var arr = []
            for (i = 0; i < 3; i ++){
                
                let bla = data.data[i].images.original.url
                arr.push(bla)
            }
            this.setState({
                gifs: arr
            })
        })
    }


//object = {data: array, pagination: "idkwtf", meta: object}
//we want object.data.url
    render(){
        return (
            <div>
                <GifSearch searchFunction={this.fetchThoseGifs}/>
                <GifList resultingGifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer