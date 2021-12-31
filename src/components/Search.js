import React from 'react'
import { GrSearch } from 'react-icons/gr'

function Search() {
    return (
        <div className='search'>
            <div className='search-icon'>
                <GrSearch />
            </div>
            <input type='text' placeholder='Search brands' />
        </div>
    )
}

export default Search
