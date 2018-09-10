import React from 'react'
import './SignInModal.css'

import Modal from 'react-modal';
import { auth } from './base'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

class SignInModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = { 
            ModalIsOpen: false,
            email: '',
            password: '',
        }
    }

    componentWillMount() {
        Modal.setAppElement('#root');
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    logIn = () => {
        const promise = auth.signInWithEmailAndPassword( this.state.email, this.state.password )

        promise.catch( err => {
            this.setState({
                error: err.message,
            })
        })
    }

    signUp = () => {
        const promise = auth.createUserWithEmailAndPassword( this.state.email, this.state.password )

        promise.catch( err => {
            this.setState({
                error: err.message,
            })
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (ev) => {
        ev.preventDefault()
    }

    render() { 
        const { email, error, password } = this.state

        return (
            <div className="SignInModal" >
                <button className="email" onClick={() => this.openModal() }>
                    <FontAwesomeIcon className="svg" icon={ faEnvelope } size="1x" />
                    <content>Sign in with Email</content>
                </button>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Login/SignUp"
                    className="modal-content"
                    overlayClassName="overlay"
                >
                    <div className="x-button" >
                        <FontAwesomeIcon icon={ faTimesCircle } size="2x" onClick={this.closeModal} />
                    </div>
                    <div className="login-container" >
                        <form className="login-form" onSubmit={this.onSubmit} >
                            <h3 className="login-title" >Login or Sign-up with Email</h3>
                            <input 
                                id="textEmail" 
                                type="email" 
                                value={email} 
                                name="email" 
                                placeholder="email" 
                                onChange={this.onChange}/>

                            <input 
                                id="textPassword" 
                                type="password" 
                                value={password} 
                                name="password" 
                                placeholder="password"
                                onChange={this.onChange}/>
                                { error ? (
                                    <div className="err-msg">
                                        <hr />
                                        <div className="errorMsg" > {error} </div>
                                        <hr />
                                    </div>) : null }
                            <div className="buttons" >
                                <button id="btnLogin" className="button round" onClick={this.logIn} >Log In</button>
                                <button id="btnSignUp" className="button round btn-secondary"  onClick={this.signUp} >Sign Up</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
    
}

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   }

export default SignInModal


/*
style={customStyles}

style=
"position: absolute;
top: 40px;
left: 40px;
right: 40px;
bottom: 40px;
border: 1px solid rgb(204, 204, 204);
background: rgb(255, 255, 255);
overflow: auto;
border-radius: 27px;
outline: none;
width: 75%;
padding: 20px;"
*/