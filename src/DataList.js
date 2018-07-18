import React from 'react'

const DataList = ( {data} ) => {

return(
        <div className="DataList" style={style} >
            <table>
                <tbody>
                    { 
                       data.map( ( res ) => { 
                           return (
                                <tr key="res.timestamp">
                                    <td>{res.timestamp}</td>
                                    <td>{res.asin} </td>
                                    <td>{res.title}</td>
                                    <td>{res.price}</td>
                                    <td>{res.seller}</td>
                                </tr>
                            )
                        })
                    } 
                </tbody>
            </table>
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