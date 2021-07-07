import React from 'react'

class GifCard extends React.Component {
    render() {
        return(
           <img src={this.props.gifUrl} />
        )
    }
}

export default GifCard 