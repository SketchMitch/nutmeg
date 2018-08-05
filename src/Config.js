import React, {Component} from 'react'
import './Config.css'

import timeFrames from './timeFrames'

class Config extends Component {

    componentDidMount() {
        this.nameInput.focus()
    }

    handleChange = (ev) => {
        const tmpConfig = { ...this.props.config }
        tmpConfig[ev.target.name] = ev.target.value
        this.props.saveConfig(tmpConfig)
    }

    render() {
        return (
            <div className="Config">
                <form>
                    <div className="row">
                        <div className="large-12 columns clearfix">
                            <label>
                                ASIN:
                                    <span data-tooltip className="right" title="Description" >
                                    <i className="fi-info" ></i>
                                </span>
                                <input
                                    type="text"
                                    name="asin"
                                    placeholder={'Enter ASIN'}
                                    value={this.props.config.asin}
                                    onChange={this.handleChange} 
                                    ref={ ( input ) => { this.nameInput = input }} />
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>Interval:
                            <span data-tooltip className="right" title="Description">
                                    <i className="fi-info" ></i>
                                </span>
                                <select name="interval" defaultValue={this.props.config.interval} onChange={this.handleChange}  >
                                    {timeFrames.map(op => <option key={op.id} value={op.value} >{op.title}</option>)}
                                </select>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Config