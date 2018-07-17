import React from 'react'
import Config from './Config'
import Notify from './Notify'

const SideBar = ( config, saveConfig ) => {
    return(
        <div className='SideBar' style={style} >
            <Config config={ config } saveConfig={ saveConfig } />
            <Notify />
        </div>
    )
}

const style = {
    width: '16rem',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default SideBar