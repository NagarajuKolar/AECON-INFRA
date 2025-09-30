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
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>OUR PROJECTS</h3>
                            <ul>
                                <li><Link to="/products/wtp">Water Treatment Plant (WTP)</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>OUR SERVICES</h3>
                            <ul>
                                <li><Link to="/services/consultancy">Consultancy Service</Link></li>
                                <li><Link to="/services/om">O&M</Link></li>
                                <li><Link to="/services/amc">Prebid service</Link></li>
                                <li><Link to="/services/repair">Contract Execution service</Link></li>
                                <li><Link to="/services/extension">Post-commissioning service</Link></li>
                                <li><Link to="/services/installation">Plant Installation Work</Link></li>
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
                            <Link to="#"> Web Designer Hyderabad</Link>
                        </p>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer
