import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/Footer.css'
import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className="footer-section">
                <footer>

                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3>QUICK LINK</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/sectors">Sectors & Industries</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>OUR PROJECTS</h3>
                            <ul>
                                <li><Link to="/projects/category/water">Water & Wastewater</Link></li>
                                <li><Link to="/projects/category/marine">Marine Works</Link></li>
                                <li><Link to="/projects/category/civil">Civil & Industrial Infrastructure</Link></li>
                                <li><Link to="/projects/category/consultancy">Consultancy & PMC</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>OUR SERVICES</h3>
                            <ul>
                                <li><Link to="/services/prebid">Consultancy & Pre-Bid Services</Link></li>
                                <li><Link to="/services/epc">Project Execution & EPC</Link></li>
                                <li><Link  to="/services/O&M">Operation & Maintenance(O&M)</Link></li>
                                <li><Link to="/services/water&environment">Water & Environment Services</Link></li>
                                <li><Link to="/services/energy&industry">Energy & Industrial Services</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col contact-foot">
                            <h3>CONTACT US</h3>
                            <p><MdLocationOn className='footer-icon' /> 13/211, 14th Main Rd, New Colony, Anna Nagar, Chennai, Tamil Nadu 600040</p>
                            <p><IoMdMail className='footer-icon' /> aeconinfra@gmail.com</p>
                            <p><FaPhone className='footer-icon' /> +91-9840014721, +91-8074936711</p>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>
                            Copyright © Aecon Infra. All Rights Reserved. Website Designed By :
                            <Link to="#"> Nagaraju Kolar Hyderabad</Link>
                        </p>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer
