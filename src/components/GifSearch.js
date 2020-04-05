import React from 'react'


const GifSearch = (props) =>  {
    // debugger
    let prop = props.searchFunction
    return (
        <div>
            <form onSubmit={prop}>
            <label><b>Enter A Search Term:</b>
                <br />
                <input id="input_field" type="textarea" name="peas"/>
            </label>
                <br />
                <input type="submit" value="Find Gifs"/>
            </form>
        </div>
    )
}


export default GifSearch