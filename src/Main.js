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
            <div className="Main" style={style}>
                <SideBar />
                <Status />
                <DataList />
                <Export />
            </div>
        )
    }
}
              
const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
    color: '#0000ff',
}

export default Main