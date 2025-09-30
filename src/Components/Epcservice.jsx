import React from 'react'
import service2 from '../assets/service2.1.png'
import Epc from '../assets/Epc.png'
import Epc2 from '../assets/epc2.png'
import Epc3 from '../assets/epc3.png'
import Epc4 from '../assets/epc4.png'
import Epc5 from '../assets/epc5.png'
import Epc6 from '../assets/epc6.png'
import prebid1 from '../assets/prebid1.png'
import service from '../assets/service.png'
function Epcservice() {
    return (
        <>
            <div className="prebid-page">
                <div className="prebid-banner">
                    <img src={Epc} alt="" />
                    <div className="banner-overlay"></div>
                    <div className="banner-text">
                        <h1>Project Execution & EPC Services</h1>
                    </div>
                    <p className="banner-subtitle">
                        Turning your vision into reality, from design to delivery
                    </p>
                </div>
                <div className="prebid-content">
                    <h2>Our Offerings</h2>
                    <h4>At AECON Infra Solutions, we offer end-to-end project execution and EPC solutions. From detailed engineering to construction, marine works, and commissioning, our services ensure that projects are delivered on time, within budget, and to the highest quality standards.</h4>

                    <div className="prebid-section">
                        <img src={Epc} alt="Feasibility Studies" />
                        <div>
                            <h3>Engineering & Design</h3>
                            <p>
                                We provide preliminary and detailed engineering, either in-house or outsourced depending on scale,
                                including preparation of designs, specifications, and data sheets
                                for procurement, along with reviewing engineering work to suggest improvements.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={Epc6} alt="Opportunity Identification" />
                        <div>
                            <h3>Supply Chain & Vendor Management</h3>
                            <p>
                                Our services cover vendor identification, qualification, and evaluation, procurement and expediting,
                                and managing contracts and compliance with all stakeholders.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={Epc2} alt="JV & Partnerships" />
                        <div>
                            <h3>Civil & Industrial Works</h3>
                            <p>
                                We execute large-scale STPs, SWRO desalination plants, ZLD systems, dams, water-retaining structures, and industrial
                                civil works, including specialized foundation and structural projects.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={Epc3} alt="Costing & Estimation" />
                        <div>
                            <h3>Marine & Trenchless Works</h3>
                            <p>
                                We undertake offshore and subsea pipelines for intake and outfall systems, harbor and coastal infrastructure, and trenchless pipeline crossings for highways and railways.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={Epc4} alt="Pretender Services" />
                        <div>
                            <h3>Quality, Safety & Risk Management</h3>
                            <p>
                                We ensure multidisciplinary design checks and stakeholder coordination, implement total quality management (TQM) with inspection and documentation, maintain safety as per IS45000 standards, and provide risk forecasting, crisis management, and mitigation.
                            </p>
                        </div>
                    </div>

                    <div className="prebid-section">
                        <img src={Epc5} alt="Risk Analysis" />
                        <div>
                            <h3>Pre-Commissioning & Commissioning</h3>
                            <p>
                                We handle preparation of checklists and documentation, coordinate with vendors and contractors, provide testing and laboratory support, and assist with final commissioning to achieve performance guarantees.
                            </p>
                        </div>
                    </div>

                    <div className="why-choose-us">
                        <h2>Why Choose Us</h2>
                        <p>
                            With decades of expertise in project execution and EPC services, AECON delivers turnkey solutions
                            that ensure timely delivery, cost efficiency, and the highest quality standards across all projects.
                        </p>
                        <ul>
                            <li>Proven track record in large-scale EPC projects</li>
                            <li>End-to-end solutions: Engineering, procurement, construction, and commissioning</li>
                            <li>Skilled technical workforce and industry specialists</li>
                            <li>Advanced project management and quality control systems</li>
                            <li>Commitment to safety, sustainability, and compliance with global standards</li>
                            <li>Comprehensive risk management and stakeholder coordination</li>
                        </ul>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Epcservice