import React from 'react'
import './PlaceCard.css'

const PlaceCard = (props) => {
    if (!props.business) {
        return (<div/>);
    }


  return (
    <div className="placeCard">
        <div className="placeCardIMG">
            <img src={props.business.image_url}/>
        </div>
        <div className="rightpart">

            <div className="companyName">
                <h2>{props.business.name}</h2>
                <h3>{props.business.location.address1} {props.business.location.city} {props.business.location.state} {props.business.location.zip_code}</h3>
                <h4>{props.business.rating} ⭐</h4>
            </div>

            <div className="investmentButton">
                <button class="button-36" role="button">Invest ⊕</button>
            </div>
    
        </div>


    </div>
  )
}

export default PlaceCard



