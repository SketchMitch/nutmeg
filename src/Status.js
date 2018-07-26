import React from 'react'
import './Status.css'

const Status = ( { status, asin }  ) => {
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
        </div>
    )
}

export default Status