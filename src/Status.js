import React from 'react'
import './Status.css'

const Status = ( { status, asin, pause }  ) => {
    return(
        <div className="Status" >
            <p>
                <span className="label" >Status:</span>
                <span className="static" >{status}</span>
            </p>
            <p>
                <span className="label" >ASIN:</span>
                <span className="static" >{asin}</span>
            </p>
            <p>
                <button className="btn pause" onClick={pause} >Pause</button>
            </p>
        </div>
    )
}

export default Status