import React from 'react'

const Status = (params) => {
    return(
        <div className="Status" style={style}>
           ASIN: {params.asin}
        </div>
    )
}

const style = {
    width: '90%',
    height: '10vh',
    margin: '1rem 0',
    padding: '0.5rem 0',
    backgroundColor: 'lightgrey',
}

export default Status