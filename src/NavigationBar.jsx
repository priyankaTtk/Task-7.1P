import React from "react";
import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css'; // Import the CSS file

function NavigationBar() {
    return (
        <div className="layout">
            {/* Fixed Navigation Bar */}
            <div className="navigation-bar">
                <Link className='link' to='/'>
                    Movies
                </Link>
                <input type="text" className="search-bar" placeholder="Search..." />
                <Link className='link' to='/post'>
                    Post
                </Link>
                <Link className='link' to='/login'>
                    Login
                </Link>
            </div>

            {/* Content rendered below the navigation bar */}
            <div className="overlay">
                <Outlet />
            </div>
        </div>
    );
}

export default NavigationBar;
