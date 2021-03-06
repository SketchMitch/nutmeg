import React, { Component } from 'react'
import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  componentDidMount() {
    auth.onAuthStateChanged( ( user ) => {
      if ( user ) {
        this.handleAuth( user )
      } else {
        this.signOut()
      }
    })
  }

  handleAuth = ( user ) => {
    this.setState({ uid: user.uid })
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({ uid: null })
    auth.signOut()
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <header className="App-header">
            <h1 className="App-title">Welcome to Project Nutmeg</h1>
          </header>
        </div>
        {
          this.signedIn() 
            ? <Main signOut={this.signOut} uid={this.state.uid} /> 
            : <SignIn handleAuth={this.handleAuth} /> 
        }
      </div>
  )}
}

export default App