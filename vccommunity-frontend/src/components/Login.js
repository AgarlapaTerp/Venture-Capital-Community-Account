import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const signInHandler = () => {
        
    }

  return (
    <div className='LoginBackgroundContainer'>
        <div className='HeaderContainer'>
            <img src="https://logos-world.net/wp-content/uploads/2021/04/Capital-One-Emblem.jpg" alt="Capital One logo" width="25%" height="100%" />
        </div>
        <div className='BodyContainer'>
            <div className='SignInContainer'>
                <div className='SignInHeaderContainer'>
                    Sign in to your account
                </div>
                <div className='UserNameContainer'>
                    <div className='LabelText'>Username</div>
                    <input className='Input' type="text" onChange={usernameHandler} value={username} placeholder="Username"></input>
                </div>
                <div className='PasswordContainer'>
                    <div className='LabelText'>Password</div>
                    <input className='Input' type="password" onChange={passwordHandler} value={password} placeholder="Password"></input>
                </div>
                <div className='LoginButtonContainer'>
                    <button className='SignInButton' onClick={() => 1}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
        <div className='FooterContainer'>
            *Insert our own logo / tagline here*
        </div>
    </div>
  )
}

export default Login