import React from 'react'
import Spinner from "react-spinkit";

import './DataList.css'

const DataList = ({ data, showWait }) => {

    return (
        <div className="DataList">
            {
                showWait()
                ? <div className="wait" > <Spinner name='ball-spin-fade-loader' /> </div> 
                : null
            }
            <table>
                <thead id="labels">
                    <tr>
                        <th style={{ textAlign: "center", verticalAlign: "middle"}}>Time</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle"}}>ASIN</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle"}}>Title</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle"}}>Price</th>                    
                        <th style={{ textAlign: "center", verticalAlign: "middle"}}>Seller</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (res, i) => {
                            return (
                                <tr key={ i }>
                                    <td style={{ textAlign: "center", verticalAlign: "middle"}}>{res.timestamp}</td>
                                    <td style={{ textAlign: "center", verticalAlign: "middle"}}>{res.asin} </td>
                                    <td style={{ textAlign: "center", verticalAlign: "middle"}}>{res.title}</td>
                                    <td style={{ textAlign: "center", verticalAlign: "middle"}}>{res.price}</td>
                                    <td style={{ textAlign: "center", verticalAlign: "middle"}}>{res.seller}</td>
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