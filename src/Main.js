import React, {Component}from 'react'

import SideBar from './SideBar'
import Pane from './Pane'

class Main extends Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <div className="Main" style={style}>
                <SideBar />
                <Pane />
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