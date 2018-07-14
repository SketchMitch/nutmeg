import React from 'react'
import Status from './Status'
import DataList from './DataList'
import Export from './Export'

const SideBar = () => {
    return(
        <div className='SideBar' style={style} >
            <Status />
            <DataList />
            <Export />
        </div>
    )
}

const style = {
    width: '80%',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default SideBar