import React from 'react'

const DataList = ({data}) => {
    return(
        <div className="DataList" style={style} >
            {JSON.stringify( data ) }
        </div>
    )
}

const style = {
    width: '90%',
    height: '50vh',
    margin: '1rem 0',
    padding: '0.5rem 0',
    backgroundColor: 'lightgrey',
}

export default DataList