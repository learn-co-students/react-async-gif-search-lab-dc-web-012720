import React from "react";

class GifSearch extends React.Component {

    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getGifs(this.state.query)
    }

    render(){
        return(
            <div>
                <b>Enter a Search Term</b>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    value={this.state.query} 
                    onChange={e => this.setState({query: e.target.value})}
                    ></input><br></br>
                    <input type="submit" value="Search">
                    </input>
                </form>
            </div>
        )
    }
}

export default GifSearch