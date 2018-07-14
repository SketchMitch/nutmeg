import React from 'react'
import Config from './Config'
import Notify from './Notify'

const SideBar = () => {
    return(
        <div className='SideBar' style={style} >
            <Config />
            <Notify />
        </div>
    )
}

const style = {
    width: '12rem',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default SideBar