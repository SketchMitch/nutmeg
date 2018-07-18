import React from 'react'
import './Status.css'

const Status = (  ) => {
    return(
        <div className="Status" >
            <p>
                <span className="label" >Status:</span>
                <span className="static" >{}</span>
            </p>
            <p>
                <span className="label" >ASIN:</span>
                <span className="static" >{}</span>
            </p>
            <p>
                <button className="btn pause" >Pause</button>
            </p>
        </div>
    )
}

export default Status