import React from 'react'

class PhoneNumber extends React.Component {

    constructor() {
        super()

        this.state = {
            countryCode: "",
            areaCode: "",
            prefix: "",
            lineNumber: "",
            showCountryCode: false,
        }
    }

    clearForm = () => {
        this.setState({

            countryCode: "",
            areaCode: "",
            prefix: "",
            lineNumber: "",
        })
    }

    handleUpdate = (propertyName) => (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
            console.log(ev.target.value)
    }

    onSubmit = () => {
        console.log(this.phoneNumber)

        this.clearForm()
    }

    validate = () => {
        


        //this.clearForm()
    }

    render() {

       return (
            <form action="">
                { this.state.showCountryCode ? (
                    <input
                        type="tel"
                        name="countryCode"
                        placeholder="01"
                        value={this.state.countryCode}
                        onChange={this.handleUpdate( 'countryCode' )}
                    />
                ) : "" }
                
                <input
                    type="tel"
                    name="areaCode"
                    placeholder="222"
                    value={this.state.areaCode}
                    onChange={this.handleUpdate( 'areaCode' )}
                />
                <input
                    type="tel"
                    name="prefix"
                    placeholder="555"
                    value={this.state.prefix}
                    onChange={this.handleUpdate( 'prefix' )}
                />
                <input
                    type="tel"
                    name="lineNumber"
                    placeholder="1234"
                    value={this.state.lineNumber}
                    onChange={this.handleUpdate( 'lineNumber' )}
                />
            </form>
        )
    }
    
}

export default PhoneNumber