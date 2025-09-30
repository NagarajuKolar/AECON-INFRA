import React from 'react'
import service2 from '../assets/service2.1.png'
import waterEnv from '../assets/waterEnv.png'

function WaterandEnv() {
  return (
    <>
    <div className="prebid-page">
    <div className="prebid-banner">
        <img src={waterEnv} alt="Water and Environment Services" />
        <div className="banner-overlay"></div>
        <div className="banner-text">
            <h1>Water & Environment Services</h1>
        </div>
        <p className="banner-subtitle">
            Sustainable solutions for water, environment, and future generations
        </p>
    </div>


    <div className="prebid-content">
        <h2>Our Offerings</h2>
        <h4>
            At AECON Infra Solutions, we specialize in delivering sustainable water and 
            environmental solutions that meet today’s needs while protecting tomorrow’s 
            resources. Our expertise covers the full lifecycle of projects — from 
            conceptualization and engineering to execution, compliance, and ongoing support.
        </h4>

        <div className="prebid-section">
            <img src={service2} alt="Water Treatment Solutions" />
            <div>
                <h3>Water Treatment Solutions</h3>
                <p>
                    Desalination Plants (SWRO, BWRO, Remineralization).<br />
                    Water Softening, Demineralization (DM), and EDI plants.<br />
                    Packaged RO plants for rural and industrial use.
                </p>
            </div>
        </div>

        <div className="prebid-section">
            <img src={service2} alt="Wastewater Treatment" />
            <div>
                <h3>Wastewater & Sewage Treatment</h3>
                <p>
                    Sewage Treatment Plants (STP) using SBR, MBR, MBBR, and green technologies.<br />
                    Effluent Treatment Plants (ETP) with advanced Zero Liquid Discharge (ZLD) systems.<br />
                    Sludge handling and reuse systems.
                </p>
            </div>
        </div>

        <div className="prebid-section">
            <img src={service2} alt="Environmental Compliance" />
            <div>
                <h3>Environmental Compliance & Impact Studies</h3>
                <p>
                    Environmental Impact Assessment (EIA) and mitigation planning.<br />
                    Marine outfall studies, hydrodynamic modeling, and eco-friendly discharge systems.<br />
                    Regulatory compliance support with MoEF and local authorities.
                </p>
            </div>
        </div>

        <div className="prebid-section">
            <img src={service2} alt="River and Lake Rejuvenation" />
            <div>
                <h3>River & Lake Rejuvenation</h3>
                <p>
                    Surface water cleaning and restoration of lakes, rivers, and canals.<br />
                    Integrated solutions for riverfront development and tourism projects.<br />
                    Groundwater recharge and ecological balance initiatives.
                </p>
            </div>
        </div>

        <div className="prebid-section">
            <img src={service2} alt="Solid Waste Management" />
            <div>
                <h3>Solid Waste & Resource Management</h3>
                <p>
                    Feasibility and DPR for solid waste management systems.<br />
                    Waste-to-energy solutions through incineration, gasification, and pyrolysis.<br />
                    Recycling and resource recovery initiatives.
                </p>
            </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
            <h2>Why Choose Us</h2>
            <p>
                AECON combines cutting-edge technology with environmental responsibility 
                to deliver projects that not only meet engineering excellence but also 
                contribute to sustainability and community welfare.
            </p>
            <ul>
                <li>Innovative and sustainable water treatment technologies</li>
                <li>Expertise in environmental compliance and impact studies</li>
                <li>Proven success in river and lake rejuvenation projects</li>
                <li>Integrated solid waste and resource management solutions</li>
                <li>Commitment to community welfare and ecological balance</li>
            </ul>
        </div>
    </div>
</div>

    
    </>
  )
}

export default WaterandEnv