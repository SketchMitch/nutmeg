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
<<<<<<< HEAD

=======
    height: '90vh',
    position: 'relative',
    backgroundColor: '#ADD8E6',
>>>>>>> cf64b371e2748ce98aa6617a01f0915137d992b6
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default SideBar