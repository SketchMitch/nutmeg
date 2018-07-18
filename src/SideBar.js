import React from 'react'
import Config from './Config'
import Notify from './Notify'

const SideBar = ({ config, saveConfig, run }) => {
    return(
        <div className='SideBar' style={style} >
            <Config config={ config } saveConfig={ saveConfig } run={run} />
            <Notify />
        </div>
    )
}

const style = {
    width: '22rem',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default SideBar