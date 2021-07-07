import React from 'react'

class GifSearch extends React.Component {
    
    render() {
        return (
            <form onSubmit={this.props.searchApi}>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default GifSearch