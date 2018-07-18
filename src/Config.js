import React from 'react'
import './Config.css'

import timeFrames from './timeFrames'

import newIcon from './assets/media/new.png'

const Config = ( { config, saveConfig, run }  ) => {

    const handleChange = ( ev ) => {
        const tmpConfig = { ...config }
        tmpConfig[ev.target.name] = ev.target.value
        saveConfig( tmpConfig )
    }

    return(
        <div className="Config">
            <form>
                <p>
                    <span className="label">ASIN:</span>
                </p>
                
                <input
                    type="text"
                    name="asin" 
                    placeholder={'Enter ASIN'}
                    value={ config.asin } 
                    onChange={handleChange} />
                
                <p>
                    <span className="label">Interval:</span>
                </p>
                
                <select name="interval" defaultValue={config.interval} onChange={this.handleChange}  >
                    { timeFrames.map( op => <option key={op.id} value={op.value} >{op.title}</option> ) }
                </select>    
                
                <a href="/" 
                    className="config-submit"
                    onClick={(ev) => { 
                        ev.preventDefault() 
                        run()
                    }}>
                    <img src={ newIcon } alt='submit' />
                </a>
            </form>
        </div>
    )
}

export default Config