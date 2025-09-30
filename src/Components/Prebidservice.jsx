import React from 'react'
import '../CSS/prebid.css'
import prebid1 from '../assets/prebid1.png'
import prebid2 from '../assets/prebid2.png'
import prebid3 from '../assets/prebid3.png'
import prebid4 from '../assets/prebid4.png'
import prebid5 from '../assets/prebid5.png'
import prebid6 from '../assets/prebid6.png'
import service from '../assets/service.png'

function Prebidservice() {
  return (
    <>
      <div className="prebid-page">
        <div className="prebid-banner">
          <img src={service} alt="" />
          <div className="banner-text">
            <h1>Consultancy & Pre-Bid Services</h1>
          </div>
          <p className="banner-subtitle">
            Helping you build the foundation for successful projects
          </p>
        </div>
        <div className="prebid-content">
          <h2>Our Offerings</h2>
          <h4>
            At AECON Infra Solutions, we guide our clients right from the opportunity stage, ensuring a strong foundation for project success. Our pre-bid and consultancy services are designed to help clients identify the right projects, form strategic partnerships, and prepare competitive proposals.
          </h4>

          <div className="prebid-section">
            <img src={prebid1} alt="Feasibility Studies" />
            <div>
              <h3>Feasibility & DPR Studies</h3>
              <p>
                Technical and financial feasibility for large-scale water and
                wastewater projects with a strong focus on SWRO desalination
                plants. Preparation of Detailed Project Reports (DPRs) for
                infrastructure development.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={prebid2} alt="Opportunity Identification" />
            <div>
              <h3>Opportunity Identification & Marketing</h3>
              <p>
                Scouting suitable tenders and projects, collecting and analyzing
                market intelligence to align with client goals.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={prebid3} alt="JV & Partnerships" />
            <div>
              <h3>JV & Partnership Support</h3>
              <p>
                Identifying suitable JV partners, assessing credentials, preparing
                scope matrix, and assisting in techno-commercial proposals.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={prebid4} alt="Risk Analysis" />
            <div>
              <h3>Project Risk Analysis & Site Studies</h3>
              <p>
                Early-stage risk assessment, mitigation planning, and preliminary
                site route studies for marine works and logistics feasibility.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={prebid5} alt="Costing & Estimation" />
            <div>
              <h3>Costing & Estimation</h3>
              <p>
                Providing ballpark and preliminary cost estimates, defining
                contract structures, and supporting tender preparations.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={prebid6} alt="Pretender Services" />
            <div>
              <h3>Pretender Services</h3>
              <p>
                Assistance in preparing contract outlines, tender compliance, and
                ensuring alignment with prudent engineering practices.
              </p>
            </div>
          </div>

          <div className="why-choose-us">
    <h2>Why Choose Us</h2>
    <p>
        AECON’s pre-bid and consultancy services provide clients with strategic guidance, 
        accurate feasibility insights, and competitive proposals to ensure project success 
        from the very beginning.
    </p>
    <ul>
        <li>Decades of expertise across energy, industrial & process projects</li>
        <li>Comprehensive feasibility studies and DPR preparation</li>
        <li>Joint venture & partnership support for stronger proposals</li>
        <li>Early-stage risk analysis and site studies for informed decision-making</li>
        <li>Accurate costing, estimation & pre-tender support</li>
        <li>Alignment with global standards and industry best practices</li>
    </ul>
</div>

        </div>
      </div>
      

    </>
  )
}

export default Prebidservice