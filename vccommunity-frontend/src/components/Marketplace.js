import React from 'react'
import {useState} from 'react'
import './Marketplace.css';
import MarketplaceScroll from './MarketplaceScroll';
import Search from './Search'
import Navbar from './Navbar';

const Marketplace = () => {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
      //search bar for businesses is now held in inputText if we want to use an API call for it later on

      const [location, setLocation] = useState("NJ")
      var dragon_scroll = <MarketplaceScroll place={location}/>

      let locationHandler = (e) => {
        var lower = e.target.value.toLowerCase();
        setLocation(lower);
      };

      let businessFinder = (e) => {
        dragon_scroll = <MarketplaceScroll place={location}/>;
        <Search loc={location}/>
      }


      


  return (
    <div className="marketplace">
        <Navbar/>
        <div className="totalcontainer">
            <div className="marketplaceleftcontainer">
                <div className="marketplacesearch">
                    <input type="text" onChange={inputHandler} placeholder="Search for local businesses, restaurants, healthcare ..."/>
                </div>

                <div className="marketplacecheckbox">
                    <div className="allcheckboxes">
                        <h2>BIPOC Owned</h2>
                        <input type="checkbox"></input>
                    </div>

                    <div className="allcheckboxes">
                        <h2>Women Owned</h2>
                        <input type="checkbox"></input>
                    </div>

                    <div className="allcheckboxes">
                        <h2>Veteran Owned</h2>
                        <input type="checkbox"></input>
                    </div>

                    <div className="allcheckboxes">
                        <h2>LGBTQ+ Owned</h2>
                        <input type="checkbox"></input>
                    </div>
                </div>

            </div>

            <div className="marketplacerightcontainer">
                <div className="marketplacelocation">
                    <form action="" className="marketplace-searchbar">
                        <input type="text" onChange={locationHandler} placeholder="Enter zipcode or City, State"/>
                        <button type="submit" onClick={businessFinder}>Submit</button>
                    </form>

                    <div class="dropdown">
                        <button class="dropbtn">Radius (km) </button>
                        <div class="dropdown-content" id="myDropdown">
                            <p>5 km</p>
                            <p>25 km</p>
                            <p>50 km</p>
                            <p>100 km</p>
                        </div>


                    </div>


                </div>
                <div className="marketplacescroll">
                    <hr/>
                    {dragon_scroll}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Marketplace