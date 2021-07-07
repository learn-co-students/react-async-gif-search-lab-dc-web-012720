import React from 'react'

class GifList extends React.Component {
    render() {
        return(
            <div>
                {this.props.makeGifCards()}
            </div>
        )
    }
}

export default GifList