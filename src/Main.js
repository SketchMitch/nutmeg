import React, {Component}from 'react'

import SideBar from './SideBar'
import Status from './Status'
import DataList from './DataList'
import Export from './Export'

import samples from './samples'


class Main extends Component {
    constructor() {
        super()

        this.state = {
            config: {
                asin: '',
                interval: '1 min',
            },
            data: samples,
            status: "System Ready to Search",
        }
    }

    saveConfig = ( config ) => {
        this.state( config: config )
    }
    
    render() {
        return (
            <div className="Main" style={main}>
                <SideBar asin={this.state.config}  saveConfig={this.saveConfig} />
                <div className='Pane' style={pane} >
                    <Status status={this.state.status} />
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
    width: '90%',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default Main