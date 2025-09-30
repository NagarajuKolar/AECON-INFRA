import React from 'react'
import service2 from '../assets/service2.1.png'
import Epc1 from '../assets/Epc1.png'
import prebid1 from '../assets/prebid1.png'
import service from '../assets/service.png'
function OperationMaintain() {
    return (
        <>
            <div className="prebid-page">
               
                <div className="prebid-banner">
                    <img src={service2} alt="Operation and Maintenance" />
                    <div className="banner-overlay"></div>
                    <div className="banner-text">
                        <h1>Operation & Maintenance (O&M) Services</h1>
                    </div>
                    <p className="banner-subtitle">
                        Ensuring long-term performance, safety, and sustainability
                    </p>
                </div>

                
                <div className="prebid-content">
                    <h2>Our Offerings</h2>
                    <h4>
                        At AECON Infra Solutions, we believe project success doesn’t end at commissioning — it
                        continues through efficient operation and reliable maintenance. Our O&M services ensure
                        assets deliver consistent performance, safety, and sustainability over the long term.
                    </h4>

                    <div className="prebid-section">
                        <img src={service2} alt="O&M Documentation" />
                        <div>
                            <h3>O&M Documentation & Manuals</h3>
                            <p>
                                Preparation and consolidation of detailed O&M manuals with standardized guidelines
                                for smooth handover and operation.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={service2} alt="Plant Operation" />
                        <div>
                            <h3>Plant Operation & Execution Support</h3>
                            <p>
                                Day-to-day operations for water & wastewater plants, desalination units, and
                                industrial utilities with skilled manpower deployment for seamless functionality.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={service2} alt="Spare Parts Management" />
                        <div>
                            <h3>Spare Parts & Asset Management</h3>
                            <p>
                                Inventory planning and spare parts management, stores and logistics optimization
                                to reduce downtime.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={service2} alt="Preventive Maintenance" />
                        <div>
                            <h3>Preventive & Predictive Maintenance</h3>
                            <p>
                                Periodic inspections, calibration, and servicing of equipment with predictive
                                techniques to prevent failures and enhance reliability.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={service2} alt="Performance Monitoring" />
                        <div>
                            <h3>Performance Monitoring & Optimization</h3>
                            <p>
                                Monitoring of plant efficiency, energy usage, and water quality with
                                recommendations for process optimization and cost reduction.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={service2} alt="Crisis Management" />
                        <div>
                            <h3>Emergency & Crisis Management</h3>
                            <p>
                                Rapid troubleshooting and breakdown management with safety-driven practices aligned
                                with international standards.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={service2} alt="Sustainability" />
                        <div>
                            <h3>Sustainability & Compliance</h3>
                            <p>
                                Ensuring adherence to environmental and statutory regulations while supporting
                                Zero Liquid Discharge (ZLD) and other green initiatives.
                            </p>
                        </div>
                    </div>


                    <div className="why-choose-us">
                        <h2>Why Choose Us</h2>
                        <p>
                            With our extensive expertise in infrastructure and EPC projects, AECON provides
                            reliable O&M services that safeguard investments, extend asset life, and guarantee
                            consistent performance.
                        </p>
                        <ul>
                            <li>Proven track record in infrastructure & EPC projects</li>
                            <li>Skilled technical workforce & industry experts</li>
                            <li>Advanced monitoring & predictive maintenance tools</li>
                            <li> Commitment to safety, sustainability & compliance</li>
                            <li>End-to-end lifecycle support for critical assets</li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OperationMaintain