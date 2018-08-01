import React from 'react'

import './SignIn.css'
import googleLogo from './assets/media/google.svg'
import { githubProvider, auth, googleProvider } from './base'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const SignIn = ({ handleAuth }) => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }

    return (
        <div className="SignIn">
            <div className="blur-bgimage" ></div>
            <main className="card see-thru" >
                <h3>Do you need to monitor an Amazon listing?</h3>
                <p>Use project Nutmeg to automagically track the buy box of a listing.</p>
                <button className="github" onClick={() => authenticate(githubProvider)} >
                    <FontAwesomeIcon icon={ faGithub } size="2x" />
                    Sign in with GitHub
                </button>
                <button className="google" onClick={() => authenticate(googleProvider)} >
                    <img src={googleLogo} alt="" />
                    Sign in with Google
                </button>
            </main>
        </div>
    )
}

export default SignIn