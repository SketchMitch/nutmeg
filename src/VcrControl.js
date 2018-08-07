import React from 'react'
import State from './State'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons'

const VcrControl =  ({ playOrPause, stop, status }) => {

    
    const handleClick = () => {
        playOrPause()
    }

    return (
        <div className="VcrControl" style={styles.vcrControl} >
            <FontAwesomeIcon icon={ status === State.PLAY ? faPauseCircle : faPlayCircle } size="4x" onClick={handleClick} />
            <FontAwesomeIcon icon={ faStopCircle } size="4x" onClick={stop}/>
        </div>
    )
}

const styles = {
    vcrControl: {
        width: '95%',
        padding: '0.75rem 0',
        margin: '-.5rem 0 0 0',
        backgroundColor: '#bbbcc7',
        color: 'linear-gradient(to bottom black, purple, yellow)',
    },
    button: {
        after: {
            content: "",
            background: "#90EE90",
            display: "block",
            position: "absolute",
            paddingTop: "300%",
            paddingLeft: "350%",
            marginLeft: "-20px!important",
            marginTop: "-120%",
            opacity: 0,
            transition: "all 0.8s",
        },
    },
    /*button: {
        active: {
            after: {
                padding: 0,
                margin: 0,
                opacity: 1,
                transition: "0s",
            }
        }
    }*/
}

export default VcrControl