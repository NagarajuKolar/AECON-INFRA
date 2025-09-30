import React, { useState } from 'react';
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram } from "react-icons/fa6";
import aeconlogo from '../assets/aecon.jpg';
import { NavLink, Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // helper: detect mobile (optional, simple way)
    const isMobile = window.innerWidth <= 575;

    const handleCloseMenu = () => {
        setMenuOpen(false);
        setProjectsOpen(false);
        setServicesOpen(false);
    };

    return (
        <>
            <div className="location-header">
                <div className="contact-info">
                    <div className="gmail">
                        <IoMdMail className="icon" />
                        <span>aeconinfra@gmail.com</span>
                    </div>
                    <div className="contact">
                        <FaPhone className="icon" />
                        <span>+91-9840014721</span>
                    </div>
                </div>
                <div className="social-icons">
                    <FaTwitter className="social-icon" />
                    <FaLinkedin className="social-icon" />
                    <FaFacebook className="social-icon" />
                    <FaSquareInstagram className="social-icon" />
                </div>
            </div>

            <nav>
                <div className="navbar">
                    <div className="navbar-container">
                        <div className="navbar-logo">
                            <img src={aeconlogo} alt="Logo" />
                            <div className="navbar-title">
                                <h2>AECON INFRA</h2>
                                <span>Solutions</span>
                            </div>
                        </div>

                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </div>

                        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                            <li>
                                <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleCloseMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleCloseMenu}>
                                    About Us
                                </NavLink>
                            </li>

                            {/* Projects Dropdown */}
                            <li className="dropdown"
                                onMouseEnter={() => !isMobile && setProjectsOpen(true)}
                                onMouseLeave={() => !isMobile && setProjectsOpen(false)}
                                onClick={() => isMobile && setProjectsOpen(!projectsOpen)}>

                                <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""} onClick={isMobile ? undefined : handleCloseMenu}>
                                    Projects
                                </NavLink>
                                <ul className={`dropdown-menu ${projectsOpen ? "show" : ""}`}>
                                    <li><NavLink to="/projects/category/water" onClick={handleCloseMenu}>Water & Wastewater</NavLink></li>
                                    <li><NavLink to="/projects/category/marine" onClick={handleCloseMenu}>Marine Works</NavLink></li>
                                    <li><NavLink to="/projects/category/civil" onClick={handleCloseMenu}>Civil & Industrial Infrastructure</NavLink></li>
                                    <li><NavLink to="/projects/category/consultancy" onClick={handleCloseMenu}>Consultancy & PMC</NavLink></li>
                                    <li><NavLink to="/projects" onClick={handleCloseMenu}>All Projects</NavLink></li>
                                </ul>
                            </li>

                            {/* Services Dropdown */}
                            <li className="dropdown"
                                onMouseEnter={() => !isMobile && setServicesOpen(true)}
                                onMouseLeave={() => !isMobile && setServicesOpen(false)}
                                onClick={() => isMobile && setServicesOpen(!servicesOpen)}>

                                <NavLink to="/services/prebid" className={({ isActive }) => isActive ? "active-link" : ""} onClick={isMobile ? undefined : handleCloseMenu}>
                                    Services
                                </NavLink>
                                <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
                                    <li><NavLink to="/services/prebid" onClick={handleCloseMenu}>Consultancy & Pre-Bid Services</NavLink></li>
                                    <li><NavLink to="/services/epc" onClick={handleCloseMenu}>Project Execution & EPC</NavLink></li>
                                    <li><NavLink to="/services/O&M" onClick={handleCloseMenu}>Operation & Maintenance</NavLink></li>
                                    <li><NavLink to="/services/water&environment" onClick={handleCloseMenu}>Water & Environment Services</NavLink></li>
                                    <li><NavLink to="/services/energy&industry" onClick={handleCloseMenu}>Energy & Industrial Services</NavLink></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleCloseMenu}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>

                        <div className="navbar-button desktop-btn">
                            <Link to="/contact" className="enquiry-btn" onClick={handleCloseMenu}>
                                ENQUIRY NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
