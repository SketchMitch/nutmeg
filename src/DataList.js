import React from 'react'
import './DataList.css'

const DataList = ({ data }) => {

    return (
        <div className="DataList">
            <table>
                <thead id="labels">
                    <tr>
                        <th>Time</th>
                        <th>ASIN</th>
                        <th>Title</th>
                        <th>Price</th>                    
                        <th>Seller</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr className="labels">
                        <th>Time</th>
                        <th>ASIN</th>
                        <th>Title</th>
                        <th>Price</th>                    
                        <th>Seller</th>
                    </tr> */}
                    {
                        data.map((res, i) => {
                            return (
                                <tr key={ i }>
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

export default DataList