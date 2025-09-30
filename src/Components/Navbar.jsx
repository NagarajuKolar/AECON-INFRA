import React, { useState } from 'react';
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";   // added icons
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
                                <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="dropdown"
                                onMouseEnter={() => setProjectsOpen(true)}
                                onMouseLeave={() => setProjectsOpen(false)}>
                                <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    Projects
                                </NavLink>
                                <ul className={`dropdown-menu ${projectsOpen ? "show" : ""}`}>
                                    <li><NavLink to="/projects/category/water">Water & Wastewater</NavLink></li>
                                    <li><NavLink to="/projects/category/marine">Marine Works</NavLink></li>
                                    <li><NavLink to="/projects/category/civil">Civil & Industrial Infrastructure</NavLink></li>
                                    <li><NavLink to="/projects/category/consultancy">Consultancy & PMC</NavLink></li>
                                </ul>
                            </li>
                            <li className="dropdown"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}>
                                <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    Services
                                </NavLink>
                                <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
                                    <li><NavLink to="/services/prebid">Consultancy & Pre-Bid Services</NavLink></li>
                                    <li><NavLink to="/services/epc">Project Execution & EPC</NavLink></li>
                                    <li><NavLink to="/services/O&M">Operation & Maintenance</NavLink></li>
                                    <li><NavLink to="/services/water&environment">Water & Environment Services</NavLink></li>
                                    <li><NavLink to="/services/energy&industry">Energy & Industrial Services</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    Contact Us
                                </NavLink>
                            </li>


                        </ul>


                        <div className="navbar-button desktop-btn">
                            <Link to="/enquiry" className="enquiry-btn">ENQUIRY NOW</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
