import React from 'react'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../Store/SearchSlice';


const Search = () => {

  const searchQuery = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className='container search-sec'>
       <div className='row'> 
       <div className='col-md-12'> 
        <div className='serach-text'>
         <p> Awesome exercise you should know  </p>
         </div>
         <div className='search-body'> 
         <div className="search-box">
         <button class="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
         <input type="text" className="input-search" placeholder="Type to Search..."
         aria-label="Search"
         value={searchQuery}
         onChange={handleSearchInputChange}
         />
       </div>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Search
