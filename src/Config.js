import React from 'react'
import './Config.css'

import timeFrames from './timeFrames'

import newIcon from './assets/media/new.png'

const Config = ( config, saveConfig  ) => {

    const handleChange = ( ev ) => {
        const tmpConfig = { ...config }
        tmpConfig[ev.target.name] = ev.target.value
        saveConfig( tmpConfig )
    }
    
    return(
        <div className="Config">
            <form>
                <p>
                    <div className="asin-label">ASIN:</div>
                    <input
                        type="text"
                        name="ASIN" 
                        placeholder={"ASIN to search"}
                        value={ config.asin } 
                        onChange={handleChange}/>
                    
                    
                    <div className="interval-label">Interval:</div>
                    <select name="interval">
                        { timeFrames.map( op => <option key={op.id} value={op.value} >{op.title}</option> ) }
                    </select>    
                    
                    <a href="#" 
                        className="config-submit"
                        onClick={(ev) => { 
                            ev.preventDefault() 
                            alert( 'submit query' )}
                        }>
                        <img src={ newIcon } alt='submit' />
                    </a>
                </p>
            </form>
        </div>
    )
}

export default Config