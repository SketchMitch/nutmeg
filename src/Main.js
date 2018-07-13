import React from 'react'

import Config from './Config'
import Notify from './Notify'
import Status from './Status'
import DataList from './DataList'
import ExportPanel from './ExportPanel'
const Main = () => {
    return (
        <div className="Main" style={style}>
            <Config />
            <Notify />
            <Status />
            <DataList />
            <ExportPanel />
        </div>
     )
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}
              
export default Main