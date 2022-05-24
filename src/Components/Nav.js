import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Nav.css'
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';



function Nav() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const closeSidebar = () => setSidebar(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#060b26' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Link to="/" onClick={closeSidebar}>
                        <img className="logo" src="resources/logo3.png" alt="logo" />
                    </Link>

                    <Link to="/game" className="button" href='public/logo512.png' onClick={closeSidebar} download>Play Now</Link>

                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav></IconContext.Provider>
        </>
    )

    /*

    const navStyle = {
        textDecoration: 'none',
    };
    return (
        <nav>
            <Link to='/'>
                <img src='resources/logo192.png' class="home-logo" alt='homepage'></img>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                    <li className="nav-button">About</li>
                </Link>
                <Link style={navStyle} to='/Game'>
                    <li className="nav-button">Game</li>
                </Link>
                <Link style={navStyle} to='/Video'>
                    <li className="nav-button">Video</li>
                </Link>
            </ul>
        </nav>
    )
    */
}

export default Nav;
