import React from 'react'
import './UserDashboard.css'
import Navbar from './Navbar'

const UserDashboard = () => {
  return (
    <div className="userdashboard">
        <Navbar/>
        <div className="dashboardTop">
            <div className="accountContainer">
                <h1>Welcome, Sylvia Jackson!</h1>
                <img src="https://i.postimg.cc/52pTg133/oie-oie-trim-image.png" sizes='small'/>
                <button class="btn"> Account Information </button>
            </div>

            <div className='balance'>
                <div className="balanceheader">
                    <h1 className="balancelogo">Your current balance is...</h1>
                </div>
                <h1>$852.22</h1>
            </div>

        </div>

        <div className="dashboardBottom">

            <div className="accountinvester">
                <div className="accountinvesterheader">
                    <h1 className="balancelogo"> Account History </h1>
                </div>

                <div className="accountinvestersubsections">
                    <button class="investerbtn"> Invester </button>
                    <button class="investerbtn"> Transactions </button>
                    <button class="investerbtn"> Date </button>

                </div>
            </div>

        </div>


    </div>
  )
}

export default UserDashboard