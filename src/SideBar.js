import React from 'react'
import Config from './Config'
import VcrControl from './VcrControl'
import Notify from './Notify'

const SideBar = ({ config, saveConfig, playOrPause, stop, status }) => {
    return(
        <div className='SideBar' style={style} >
            <Config config={ config } saveConfig={ saveConfig } />
            <VcrControl playOrPause={playOrPause} stop={stop} status={status} />
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