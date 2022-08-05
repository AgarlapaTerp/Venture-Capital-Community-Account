import React from 'react'
import { useBusinessSearch } from '../yelp-api/useBusinessSearch';

const Search = ( {loc}) => {
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch("businesses", loc)
    setSearchParams("business", loc)
    

  return (
    <div>Search</div>
  )
}

export default Search