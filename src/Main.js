import React from 'react'

import Config from './Config'
import Notify from './Notify'
import Status from './Status'
import DataList from './DataList'
import Export from './Export'
const Main = () => {
    return (
        <div className="Main" style={style}>
            <Config />
            <Notify />
            <Status />
            <DataList />
            <Export />
        </div>
     )
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}
              
export default Main