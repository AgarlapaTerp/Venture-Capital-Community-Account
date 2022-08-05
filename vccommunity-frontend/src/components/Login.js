import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom'

const Login = ({investor}) => {
    let navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const signInHandler = () => {
        if (investor) {
            //navigate this to investor dashboard
            navigate("/userdashboard", ({replace: true}))
        }
        else {
            //navigate to company dashboard
            navigate("/", ({replace: true}))
        }
        
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
                    <button className='SignInButton' onClick={signInHandler}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
        <div className='FooterContainer'>
           Venture Together - Funding the Future
        </div>
    </div>
  )
}

export default Login