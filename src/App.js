import React, { Component } from 'react'
import './App.css'
import Main from './Main'

/*
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlayCircle)
library.add(faPauseCircle)
library.add(faStopCircle)
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Project Nutmeg</h1>
        </header>
        <Main />
      </div>
    )
  }
}

export default App
