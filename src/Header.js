import React from 'react';
import Logo from './trackthedip.svg';
import './Header.css';

function Header() {
    return (
        <div className="header_wrapper">
            {/* logo */}
            <div className="header_logo">
                <img src={Logo} alt="" width={25} />
            </div>
            {/* search */}
            <div className="header_search">
                <div className="header_searchContainer">
                    {/* <SearchOutlined /> */}
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
    );
}

export default Header
