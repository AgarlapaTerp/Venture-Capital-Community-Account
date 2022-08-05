import React from 'react'
import { useBusinessSearch } from '../yelp-api/useBusinessSearch';
import './MarketplaceScroll.css'
import PlaceCard from './PlaceCard';

const MarketplaceScroll = ( {place}) => {
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch("businesses", place)
    var searchResults = <div></div>

    if (place != "NJ"){
        searchResults = businesses.map(b => <PlaceCard key={b.id} business={b}/>);
    }

    

  return (
    <div className="scroll">
        <div className="temp">
            {searchResults}
        </div>
        
    </div>
  )
}

export default MarketplaceScroll