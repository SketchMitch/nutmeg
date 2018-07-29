import React, {Component}from 'react'

import SideBar from './SideBar'
import Status from './Status'
import DataList from './DataList'
import Export from './Export'

import State from './State'

import axios from 'axios';
import { auth } from './base'

//import samples from './samples'


class Main extends Component {
    constructor() {
        super()
    
        this.state = {
            config: this.newConfig(),
            data: [],
            status: null,
        }
    }

    componentDidMount() {
        const tmpStatus = State.READY
        this.setState({ status: tmpStatus})
    }

    newConfig = () => {
        return { 
            asin: '',
            interval: 600,
        }
    }

    saveConfig = ( config ) => {
        this.setState({ config: config })
    }

    playOrPause = () => {
        if ( this.state.status === State.PLAY ) {
            this.pauseProc()
        } else {
            this.runProc()
        }
    }

    runProc = () => {
        // call once immediately
        this.queryASIN()
        
        // set up the timer
        const interval = this.state.config.interval * 1000
        const id = setInterval( this.queryASIN, interval )

        // Store the timer id.
        this.setState({ timerId: id })
        

        const tmpStatus = State.PLAY
        this.setState({ status: tmpStatus })
    }

    pauseProc = () => {
        clearInterval( this.state.timerId )
        
        const tmpStatus = State.PAUSE
        this.setState({ status: tmpStatus })
    }

    stopProc = () => {
        clearInterval( this.state.timerId )
        
        const tmpData = []
        this.setState({ data: tmpData })

        const tmpStatus = State.READY
        this.setState({ status: tmpStatus })
    }

    queryASIN = async  ( ) => {
        try {
            const url = process.env.REACT_APP_ASINTRAC_URL + this.state.config.asin
            console.log( url )
            await axios.get( url )
                .then(( response ) => {
                    // handle success
                    const tmpData = [...this.state.data]
                    response.data.reverse().map( ( product ) => { 
                        return tmpData.unshift( product ) 
                    }) 
                    
                    this.setState({ data: tmpData })
                })
                .catch(( error ) => {
                    // handle error
                    console.log(error);
                    this.pauseProc()
                })

        } catch(  error ) {
            const tmpState = State.error
            this.setState({ state: tmpState })
            this.pauseProc()
            console.log( error )
        }
    }

    logUser = () => {
        
        auth.onAuthStateChanged(( user ) => {
            if (user) {
                // User is signed in.
                const data = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoURL: user.photoURL,
                    isAnonymous: user.isAnonymous,
                    uid: user.uid,
                    providerData: user.providerData,
                }
                console.log( data )
            } else {
                // User is signed out.
                // ...
                console.log( 'User is signed out!' )
            }
        })
    }
    
    render() {
        return (
            <div className="Main" style={main}>
                <SideBar 
                    config={this.state.config} 
                    saveConfig={this.saveConfig}
                    playOrPause={this.playOrPause}
                    stop={this.stopProc}
                    status={this.state.status}
                />
                <div className='Pane' style={pane} >
                    <Status status={this.state.status} asin={this.state.config.asin} />
                    <DataList data={this.state.data} />
                    <Export signOut={this.props.signOut} logUser={this.logUser} /> />
                </div>
            </div>
        )
    }
}
              
const main = {
    display: 'flex',
    //height: '100%',
    height: '90vh',
    color: 'red',
    // background: 'url(http://sailrockdiversresort.com/wp-content/wp-uploads/2015/02/15-simon-web-design-5-cool-backgrounds-1600x900.jpg)',
}

const pane = {
    position: 'relative',
    width: '80%',
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
}

export default Main