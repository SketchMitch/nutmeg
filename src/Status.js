import React from 'react'
import './Status.css'

const Status = (status) => {
    return(
        <div className="Status" >
            <p>
                <div className="label" >Status:</div>
                <div className="static" >{}</div>
            </p>
            <p>
                <div className="label" >ASIN:</div>
                <div className="static" >{}</div>
            </p>
            <p>
                <button className="btn pause" >Pause</button>
            </p>
        </div>
    )
}

export default Status