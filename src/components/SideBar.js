import React from 'react'

function SideBar() {
    return (
        <>
            <div className='logo'>
                <a>Brand <b>Colors</b></a>
            </div>
            <div className='description'>
                The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <a href='#'>About BrandColors</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar
