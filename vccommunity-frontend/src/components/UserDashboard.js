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
                    <div className="investercat">
                        <button class="investerbtn"> Invester </button>
                        <div className="localBusinessCard">
                            <img className="localBusinessIcon" src="https://www.bealocalloveva.com/wp-content/uploads/2019/11/Buy-Local-Logo.png" />
                            <h1>     Buy Local Month</h1>
                        </div>

                        <div className="localBusinessCard">
                            <img className="localBusinessIcon" src="https://images.squarespace-cdn.com/content/v1/54db7288e4b0d3f042fa0b33/1541451502182-3ILOSMSIQ4PKE8EBDPQW/logo+RED+circle+only.png" />
                            <h1> Bean Restaurant Group</h1>
                        </div>

                        <div className="localBusinessCard">
                            <img className="localBusinessIcon" src="https://images.getbento.com/accounts/febc4443a8797ba4ce2398981e6507e3/media/images/GRANGEHALL-circleLogo.png?w=1000&fit=max&auto=compress,format&h=1000" />
                            <h1> Grange Hall</h1>
                        </div>

                        <div className="localBusinessCard">
                            <img className="localBusinessIcon" src="https://i1.wp.com/sticomputer.com/newwebsite/wp-content/uploads/2017/05/sti-logo-circle.png?ssl=1" />
                            <h1> STI</h1>
                        </div>

                        <div className="localBusinessCard">
                            <img className="localBusinessIcon" src="https://www.grahamhealthcaregroup.com/wp-content/uploads/2019/10/home-circle-graph-400x400.png" />
                            <h1> Graham Healthcare Group</h1>
                        </div>

                        


                    </div>

                    <div className="transactionscat">
                        <button class="investerbtn"> Transactions </button>
                        <button class="cardbtn"> $30 invested </button>
                        <button class="cardbtn"> $45 invested </button>
                        <button class="cardbtn"> $15 invested </button>
                        <button class="cardbtn"> $20 returned </button>
                        <button class="cardbtn"> $12 returned </button>
                    </div>

                    <div className="transactionscat">
                        <button class="investerbtn"> Date </button>
                        <button class="cardbtn"> 8 / 5 / 22 </button>
                        <button class="cardbtn"> 7 / 15 / 22 </button>
                        <button class="cardbtn"> 5 / 8 / 22 </button>
                        <button class="cardbtn"> 4 / 18 / 22 </button>
                        <button class="cardbtn"> 2 / 14 / 22 </button>

                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default UserDashboard