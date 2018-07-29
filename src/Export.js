import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Export = ({ signOut, logUser }) => {
    return(
        <div className="Export" style={style.export} >
            <div className="desc" style={style.desc} >
                Export
                <br />
                Coming soon!
            </div>
            <div className="signOut" style={style.signOut} >
                <button onClick={signOut} style={style.btnSignout} >
                    <FontAwesomeIcon icon={ faSignOutAlt } size="3x"  />
                </button>
        
                <button onClick={logUser} style={style.btnLogUser} >
                    <FontAwesomeIcon icon={ faCheckCircle } size="3x"  />
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
        backgroundColor: '#bbbcc7',
    },
    signOut: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    desc: {
        position: 'absolute',
        width: '100%',
    },
    btnSignout: {
        position: 'absolute',
        right: '1.5rem',
        bottom: '1rem',
    },
    btnLogUser: {
        position: 'absolute',
        left: '1.5rem',
        bottom: '1rem',
    },
}


export default Export