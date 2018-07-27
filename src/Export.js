import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Export = ({ signOut }) => {
    return(
        <div className="Export" style={style.export} >
            Export
            <div className="signOut" style={style.signOut} >
                <button onClick={signOut} style={style.button} >
                    <FontAwesomeIcon icon={ faSignOutAlt } size="3x"  />
                </button>
            </div>
        </div>
    )
}

const style = {
    export: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10vh',
        margin: '1rem 0',
        padding: '0.5rem 0',
        backgroundColor: 'lightgrey',
    },
    signOut: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    button: {
        position: 'absolute',
        right: '1.5rem',
    }
}

export default Export