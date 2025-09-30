import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoCubeSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import waterindustry from '../assets/water.png'
import water1 from '../assets/water1.png'
import water2 from '../assets/water2.png'
import marine from '../assets/Marine.png'
import minjur from '../assets/1.png'
import alandur from '../assets/2.png'
import maldives from '../assets/3.png'
import '../CSS/Home.css'
import { IoClose } from "react-icons/io5";

function Home() {
    const slides = [
        {
            img: "https://picsum.photos/id/1015/800/400",
            headline: "Design. Plan. Build — Excellence in Every Project"
        },
        {
            img: "https://picsum.photos/id/1016/800/400",
            headline: "Your Trusted Partner for Innovative Infrastructure Solutions"
        },
        {
            img: "https://picsum.photos/id/1018/800/400",
            headline: "Turning Blueprints into Reality with Precision & Efficiency"
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showrelatedimages, setshowrelatedimages] = useState(false)
    const [activeSector, setActiveSector] = useState(null);
    const [currentsectorslide, setcurrentsectorslide] = useState(0);
    const handleNextSector = () => {
        if (activeSector) {
            setcurrentsectorslide(prev => prev === activeSector.relatedimages.length - 1 ? 0 : prev + 1);
        }
    };

    const handlePrevSector = () => {
        if (activeSector) {
            setcurrentsectorslide(prev => prev === 0 ? activeSector.relatedimages.length - 1 : prev - 1);
        }
    };


    const handleNext = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentSlide, slides.length]);


    const aboutData = [
        {
            icon: <FaEye />,
            title: "Vision",
            text: "AECON Infra Solutions envisions becoming a leading force in sustainable infrastructure development. By consistently delivering quality engineering, on-time execution, and innovative solutions, we aim to build resilient projects and long-lasting client partnerships."
        },
        {
            icon: <IoCubeSharp />,
            title: "Values",
            text: "Our core values — Integrity, Innovation, Safety, and Sustainability — form the backbone of our organization. We combine technical expertise with ethical business practices to create impactful solutions across water, marine, and civil infrastructure sectors."
        },
        {
            icon: <FaAward />,
            title: "Mission",
            text: "Our mission is to provide end-to-end engineering and construction services that exceed client expectations. Backed by decades of experience, we strive to deliver infrastructure projects that drive growth, empower communities, and protect the environment."
        }
    ];

    const servicesData = [
        {
            title: "Pre-Bid Services",
            description: "We support clients from the opportunity stage, ensuring a strong foundation for project success."
        },
        {
            title: "Contract Execution Services",
            description: "Comprehensive project management solutions as turnkey or modular services."
        },
        {
            title: "Post-Commissioning & O&M Services",
            description: "Ensuring smooth transition into commercial operations and long-term support."
        }
    ];

    const sectors = [
        {
            title: 'Water Industry',
            image: waterindustry,
            relatedimages: [water1, minjur, alandur]
        },
        {
            title: 'Marine Works',
            image: marine,
            relatedimages: [water1,maldives]
        },
        {
            title: 'Civil Works',
            image: waterindustry,
            relatedimages: [water1, water2]
        },
        {
            title: 'Power Plants',
            image: waterindustry,
            relatedimages: [water1, water2]
        },
        {
            title: 'Refineries',
            image: waterindustry,
            relatedimages: [water1, water2]
        },
    ]

    return (
        <>

            <div className="slider">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
                        <img src={slide.img} alt="slider" />
                        <div className="headline">
                            <h2>{slide.headline}</h2>
                        </div>
                    </div>
                ))}

                <FaChevronLeft className="arrow left" onClick={handlePrev} />
                <FaChevronRight className="arrow right" onClick={handleNext} />
            </div>


            <div className="banner-bottom">
                <div className="banner-content">
                    <h2>Start Planning your New Dream Project with us</h2>
                    <h3>We strive to provide Our Customers with Top Notch Support to make their Theme</h3>
                </div>
                <div className="start-now-btn">
                    <Link to="/contact" className="enquiry-btn">START NOW</Link>
                </div>
            </div>


            <div className="about-vision">
                {aboutData.map((item, index) => (
                    <div key={index} className="vision-card">
                        <div className="abouticon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <button className="vision-btn">Click here</button>
                    </div>
                ))}
            </div>

            <div className="our-services">
                <h1>Our Services</h1>
                <div className="services-container">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <div className="overlay">
                                <button className="view-btn">View service</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
 
            <div className="sectors">
                <h1>Sectors</h1>
                <div className="sector-container">
                    {sectors.map((sector, index) => (
                        <div key={index} className="sector-card">
                            <img src={sector.image} alt="img" />
                            <h2>{sector.title}</h2>
                            <div className="sector-overlay">
                                <FaEye className='hover-eye' onClick={() => { setActiveSector(sector); setshowrelatedimages(true); }} />
                            </div>
                        </div>
                    ))}
                    {showrelatedimages && activeSector && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <button className="close-btn" onClick={() => setshowrelatedimages(false)}>< IoClose /></button>
                                <h3 className='active-sector-heading'>{activeSector.title} Related Images</h3>
                                <div className="sector-slider">
                                    {activeSector.relatedimages.map((img, index) => (
                                        <div key={index} className={`sector-slide ${index === currentsectorslide ? "active" : ""}`}>
                                            <img src={img} alt={`sector-slide-${index}`} />
                                        </div>
                                    ))}

                                    <FaChevronLeft className="arrow left" onClick={handlePrevSector} />
                                    <FaChevronRight className="arrow right" onClick={handleNextSector} />
                                </div>
                            </div>
                        </div>
                    )}


                </div>
                <div className="eyebtn">
                    <Link to="/sectors" className="eye-btn">View All Sectors</Link>
                </div>
            </div>

            <div className="Home-contact">
                <div className="contact-section">
                    <h2 className="form-title">Enquiry Us</h2>
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Mobile No</label>
                                <input type="text" placeholder="Enter mobile number" />
                            </div>
                            <div className="form-group">
                                <label>Services</label>
                                <select>
                                    <option>Choose Service</option>
                                    <option>Pre-Bid Service</option>
                                    <option>Contract Execution Services</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="3" placeholder="Enter your message"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>

                </div>
            </div>

            <div className="contact-iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2937363579513!2d80.20186902484332!3d13.080561187244953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265befc6085cd%3A0x88d7fbc9a8cccda3!2sSanthosh%20Apartments%2C%20AL%20block%2C%20Anna%20Nagar!5e0!3m2!1sen!2sin!4v1758998165868!5m2!1sen!2sin"
                    style={{ width: '99%', height: '400px' }}
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>




        </>
    );
}

export default Home;
