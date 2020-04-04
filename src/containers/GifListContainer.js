import React from "react";
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            gifs: []
        }
    }

    getGifs = (query = "dolphin") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=uMlueq8SiwG8d4TT31kQ42LMYPRTYDmZ&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(g =>({ url: g.images.original.url}))
            })
        })
    }

    componentDidMount() {
        this.getGifs()
    }

    render(){
        return(
            <div>
                <GifSearch getGifs={this.getGifs}/>
            <ul><br></br>
                <GifList gifs={this.state.gifs}/>
            </ul>
            </div>
        )
    }
}

export default GifListContainer