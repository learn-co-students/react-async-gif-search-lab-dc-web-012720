import React from 'react'

class GifList extends React.Component {
    
    render() {
        console.log(this.props.gifs)
        return (
            <div>
                <ul>
                {this.props.gifs.map(dataOBJ => <li><img src = {dataOBJ.images.original.url} /></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList