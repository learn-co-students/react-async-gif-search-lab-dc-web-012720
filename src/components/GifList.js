import React from 'react'

const GifList = (props) => {
    // debugger
    return (
        <div>
           {props.resultingGifs ? 
           <div>
               {props.resultingGifs.map( gif => (
                   <li>
                       <p>{gif}</p>
                       <img src={`${gif}`} alt="fuck off"/>
                   </li>
               ))}
           </div>
           : 
           <div>
               Enter A Search Term
           </div>
           } 
        </div>
    )
}

export default GifList