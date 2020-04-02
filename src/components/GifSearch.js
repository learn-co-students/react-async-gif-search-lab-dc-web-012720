import React from 'react'

function GifSearch(props) {
    return (<div>
        <form onSubmit = {props.handleSubmit}>
            <label htmlFor = "search">Search</label>
            <input name="search" onChange = {props.searchControl} value = {props.text} type = "text"></input>
            <input type="submit"></input>
        </form>
        </div>)
}

export default GifSearch