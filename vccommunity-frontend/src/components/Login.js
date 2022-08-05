import React, { useState } from 'react'
import './Login.css'
// import 'c1logo'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

  return (
    <div className='BackgroundContainer'>
        <div className='HeaderContainer'>
            <img src="https://logos-world.net/wp-content/uploads/2021/04/Capital-One-Emblem.jpg" alt="Capital One logo" width="5vw" height="5vh"> </img>
        </div>
        <div className='BodyContainer'>
            <div className='SignInContainer'>
                <div className='SignInHeader'>
                    Sign in to your account
                </div>
                <div className='UserNameContainer'>
                    <div className='LabelText'>Username</div>
                    <input type="text" onChange={usernameHandler} value={username}></input>
                </div>
                <div className='PasswordContainer'>
                    <div className='LabelText'>Password</div>
                    <input type="password" onChange={passwordHandler} value={password}></input>
                </div>
                <button onClick={() => 1} className='SignInButton' />
            </div>
        </div>
        <div className='FooterContainer'>
            *Insert our own logo / tagline here*
        </div>
    </div>
  )
}

export default Login