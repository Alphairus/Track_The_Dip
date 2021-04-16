import React from 'react'
import './Header.css'
import Logo from './Track The DIP.svg'

function Header() {
    return (
        <div className="header_wrapper">
            {/* logo */}
            <div className="header_logo">
                <img src={Logo} alt="" width={100} />
            </div>
            {/* search */}
            <div className="header_search">
                <div className="header_searchContainer">
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            {/* menuitems */}
            <div className="header_menuItems">
                <a href="/#">Coins</a>
                <a href="/#">Portfolio</a>
                <a href="/#">Cash</a>
                <a href="/#">Messages</a>
                <a href="/#">Account</a>
            </div>
        </div>
    )
}

export default Header
