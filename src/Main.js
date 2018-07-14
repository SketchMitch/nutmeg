import React, {Component}from 'react'

import SideBar from './SideBar'
import Status from './Status'
import DataList from './DataList'
import Export from './Export'

class Main extends Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <div className="Main" style={main}>
                <SideBar />
                <div className='Pane' style={pane} >
                    <Status />
                    <DataList />
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