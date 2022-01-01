import React, { useContext } from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../context/MainContext'

function Search() {
    const { search, setSearch } = useContext(MainContext)
    return (
        <div className='search'>
            <div className='search-icon'>
                <GrSearch />
            </div>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search brands' />
        </div>
    )
}

export default Search
