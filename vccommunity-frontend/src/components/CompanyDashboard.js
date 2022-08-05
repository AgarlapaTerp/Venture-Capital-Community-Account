import React from 'react'
import './CompanyDashboard.css'
import Navbar from './Navbar'

const CompanyDashboard = () => {
  return (
    <div className="companyDashboard">
        <Navbar/>
        <div className="companyDashboardTop">
            <div className="companyAccountContainer">
                <h1>Welcome, Bean Restaurant Group!</h1>
                <img src="https://images.squarespace-cdn.com/content/v1/54db7288e4b0d3f042fa0b33/1541451502182-3ILOSMSIQ4PKE8EBDPQW/logo+RED+circle+only.png" width="150px" height="150px" alt="company logo"/>
                <button class="btn"> Account Information </button>
            </div>

            <div className='raised'>
                <div className="raisedheader">
                    <h1 className="raiselogo">You have raised...</h1>
                </div>
                <h1>$23,510.00 of $40,000</h1>
            </div>

        </div>

        <div className="companyDashboardBottom">

            <div className="transactionTable">
                <div className="transactionTableHeader">
                    <h1 className="raiselogo"> Transaction History </h1>
                </div>

                <div className="accountinvestersubsections">
                    <div className="investercat">
                        <button class="investerbtn"> Invester </button>
                        <div className="localBusinessCard">
                            <h1>John Doe </h1>
                        </div>

                        <div className="localBusinessCard">
                            <h1>Sylvia Jackson</h1>
                        </div>

                        <div className="localBusinessCard">
                            <h1>Henry Jefferson</h1>
                        </div>

                        <div className="localBusinessCard">
                            <h1>Lola Pierce</h1>
                        </div>

                        <div className="localBusinessCard">
                            <h1>Graham Baer</h1>
                        </div>
                    </div>

                    <div className="transactionscat">
                        <button class="investerbtn"> Transactions </button>
                        <button class="cardbtn"> + $30 </button>
                        <button class="cardbtn"> + $45 </button>
                        <button class="cardbtn"> - $601 </button>
                        <button class="cardbtn"> + $30 </button>
                    </div>

                    <div className="transactionscat">
                        <button class="investerbtn"> Date </button>
                        <button class="cardbtn"> 8 / 1 / 22 </button>
                        <button class="cardbtn"> 7 / 15 / 22 </button>
                        <button class="cardbtn"> 1 / 8 / 22 </button>
                        <button class="cardbtn"> 3 / 18 / 21 </button>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default CompanyDashboard