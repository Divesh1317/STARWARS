import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <nav className="menu">
            <img src={logo} alt="#" style={{ width: 'auto', height: '100px' }} />
            <div className="container">
                <div className="nav-link-container">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/people">
                        People
                    </Link>
                    <Link className="nav-link" to="/planet">
                        Planet
                    </Link>
                </div>
                <div className="hamburger-icon" onClick={toggleDropdown}>
                &#xEF3B;; {/* Hamburger icon */}
                </div>
                <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/people">
                        People
                    </Link>
                    <Link className="nav-link" to="/planet">
                        Planet
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
