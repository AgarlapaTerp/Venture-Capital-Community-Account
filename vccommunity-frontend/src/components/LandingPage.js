import React from 'react'
import {useNavigate} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/login", ({replace: true}))
    }

  return (
    <div className='BackgroundContainer'>
        <div className='LeftContainer'>
            <img src="https://1000logos.net/wp-content/uploads/2018/11/Capital-One-Logo.png" alt="Capital One Logo" width="85%" height="40%" />
            <div className='WelcomeTextContainer'>welcomes you to...</div>
        </div>
        <div className='RightContainer'>
            <div className='GreyTextBoxContainer'>
                OUR WEBSITE NAME / TAGLINE / DESCRIPTION 
            </div>
            <div className='RedContainer'>
                I am a(n)...
            </div>
            <div className='ButtonContainer'>
                <button onClick={handleClick} className='Button'>
                    Potential Investor
                </button>
                <button onClick={handleClick} className='Button'>
                    Small Business Owner
                </button>
            </div>

        </div>
    </div>
  )
}

export default LandingPage