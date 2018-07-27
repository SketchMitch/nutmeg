import React from 'react'
import './Status.css'

const Status = ({ status, asin }) => {
    return (
        <div className="Status" >
            <div className="infoblock2"> ASIN: {asin}
            </div>

            <div className="infoblock1"> Status: {status}
            </div>

        </div>
    )
}

export default Status