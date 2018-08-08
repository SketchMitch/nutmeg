import React from 'react'
import './Export.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCheckCircle, faFileDownload } from '@fortawesome/free-solid-svg-icons'

const Export = ({ download, signOut, logUser }) => {
    return(
        <div className="export" >
            <div className="btn-set export-set">
                <button className="btn" onClick={download} >
                    <FontAwesomeIcon icon={ faFileDownload } size="2x"  />
                </button>
            </div>
        
            <div className="btn-set" >
                <button className="btn" onClick={logUser} >
                    <FontAwesomeIcon icon={ faCheckCircle } size="2x"  />
                </button>
                
                <button className="btn" onClick={signOut} >
                    <FontAwesomeIcon icon={ faSignOutAlt } size="2x"  />
                </button>
            </div>
        </div>
    )
}

export default Export