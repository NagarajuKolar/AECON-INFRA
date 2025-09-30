import React from 'react'
import sectorsData from '../Constants/Sectorsdata'
import '../CSS/Sectors.css'
import sector from '../assets/service1.1.png'
function Sectors() {
    return (
        <>
            <div className="sectors-page">

                <div className="prebid-banner">
                    <img src={sector} alt="" />
                    <div className="banner-text">
                        <h1>Sectors & Industries</h1>
                    </div>
                    <p className="banner-subtitle">
                        Delivering innovative, reliable, and sustainable solutions across diverse industries.
                    </p>
                </div>


                <section className="sectors-intro">
                    <p>
                        At <strong>AECON Infra Solutions</strong>, we provide end-to-end project execution,
                        commissioning, and O&M services across multiple industries. From water management to
                        renewable energy, our expertise ensures sustainable and reliable outcomes.
                    </p>
                </section>

                <h2 className='sec-head'>Sectors & Industries</h2>
                <section className="sectors-grid">

                    {sectorsData.map((sector, index) => (
                        <div key={index} className="sectorsec-card">
                            <img src={sector.img} alt={sector.title} />
                            <div className="sectorsec-content">
                                <h3>{sector.title}</h3>
                                <p>{sector.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>



                <section className="sectors-cta">
                    <h2>Looking to transform your project idea into reality?</h2>
                    <button>Contact Us</button>
                </section>
            </div>
        </>
    )
}

export default Sectors