import React, {Component}from 'react'

import SideBar from './SideBar'
import Status from './Status'
import DataList from './DataList'
import Export from './Export'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            data: {
                timestamp: "07/14/2018 11:49:30",
                asin: "B01CD5VC92",
                title: "Raspberry Pi 3 Model B Motherboard",
                price: "$39.00",
                seller:"CanaKit",
            }
        }
    }
    
    render() {
        return (
            <div className="Main" style={main}>
                <SideBar />
                <div className='Pane' style={pane} >
                    <Status />
                    <DataList data={this.state.data} />
            <       Export />
                </div>
            </div>
        )
    }
}
              
const main = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
    color: '#0000ff',
}

const pane = {
    width: '80%',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default Main