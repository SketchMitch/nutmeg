import React from 'react'
import PhoneNumber from './PhoneNumber'
import './Notify.css'

class Notify extends React.Component {
    constructor() {
        super()

        this.state = {
            phoneNumber: "",
        }
    }
    
    render () {
        return(
            <div className="Notify">
                <label className="checkbox-inline"><input type="checkbox" name="notify" value={this.state.active} /> Notify by text for changes. </label>
                <PhoneNumber phoneNumber={this.state.phoneNumber}/>
            </div>
        )
    }
}

export default Notify