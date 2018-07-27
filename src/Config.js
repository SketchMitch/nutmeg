import React from 'react'
import './Config.css'

import timeFrames from './timeFrames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Config = ({ config, saveConfig }) => {

    const handleChange = (ev) => {
        const tmpConfig = { ...config }
        tmpConfig[ev.target.name] = ev.target.value
        saveConfig(tmpConfig)
    }

    return (
        <div className="Config">
            <form>
                <div class="row">
                    <div class="large-12 columns clearfix">
                        <label>
                            ASIN:
                                <span data-tooltip class="right" title="Description">
                                <i class="fi-info" ></i>
                            </span>
                            <input
                                type="text"
                                name="asin"
                                placeholder={'Enter ASIN'}
                                value={config.asin}
                                onChange={handleChange} />
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <label>Interval:
                        <span data-tooltip class="right" title="Description">
                                <i class="fi-info" ></i>
                            </span>
                            <select name="interval" defaultValue={config.interval} onChange={handleChange}  >
                                {timeFrames.map(op => <option key={op.id} value={op.value} >{op.title}</option>)}
                            </select>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Config