import React from 'react'

import './SignIn.css'
import googleLogo from './assets/media/google.svg'
import { githubProvider, auth, googleProvider } from './base'


const SignIn = ({ handleAuth }) => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }

    return (
        <div className="SignIn">
            <main>
                <h3>Do you need to monitor an Amazon listing?</h3>
                <p>Use project Nutmeg to automagically track the buy box of your listing.</p>
                <button className="github" onClick={() => authenticate(githubProvider)} >
                    <i className="fab fa-github"></i>
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