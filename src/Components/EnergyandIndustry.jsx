import React from 'react'
import service2 from '../assets/service2.1.png'
import energy from '../assets/energy.png'

function EnergyandIndustry() {
  return (
    <>
      <div className="prebid-page">
        <div className="prebid-banner">
          <img src={energy} alt="Energy and Industrial Services" />
          <div className="banner-overlay"></div>
          <div className="banner-text">
            <h1>Energy & Industrial Services</h1>
          </div>
          <p className="banner-subtitle">
            Driving efficiency, sustainability, and innovation in energy & industry
          </p>
        </div>

        <div className="prebid-content">
          <h2>Our Offerings</h2>
          <h4>
            AECON Infra Solutions provides integrated solutions for energy, industrial, 
            and process-based projects. Our services focus on efficiency, sustainability, 
            and innovative technology to meet the growing demands of industries worldwide.
          </h4>

          <div className="prebid-section">
            <img src={service2} alt="Power Generation" />
            <div>
              <h3>Power Generation & Utilities</h3>
              <p>
                We provide solutions for diesel-based and thermal power plants, 
                covering the Balance of Plant including boilers, turbines, CHP, AHP, 
                fire systems, and switchyards. Our expertise also extends to renewable 
                energy projects, with a special focus on green hydrogen solutions.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={service2} alt="Industrial Projects" />
            <div>
              <h3>Industrial Projects & Utilities</h3>
              <p>
                Our team executes industrial projects across various sectors including 
                API and pharmaceutical plants, biotechnology facilities for Spirulina, 
                Chlorella, and fermentation-based systems, as well as food processing 
                plants specializing in starch, glucose, pasta, and macaroni technology.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={service2} alt="Chemical Industry" />
            <div>
              <h3>Chemical & Process Industries</h3>
              <p>
                We deliver end-to-end solutions for sulfuric acid and phosphoric acid plants, 
                while also handling specialized revamps, equipment selection, and cost 
                estimation. To ensure long-term operational reliability, we also provide 
                annual maintenance and plant performance services.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={service2} alt="Pipelines" />
            <div>
              <h3>Pipeline & Infrastructure Services</h3>
              <p>
                Our pipeline services include cross-country pipelines for water, sewage, 
                and industrial fluids. We specialize in trenchless crossings for highways, 
                rivers, and railways, along with delivering robust civil and industrial 
                infrastructure projects such as dams, foundations, and retaining structures.
              </p>
            </div>
          </div>

          <div className="prebid-section">
            <img src={service2} alt="Automation and Digitalization" />
            <div>
              <h3>Automation & Digitalization</h3>
              <p>
                We design basic and preliminary control logic and define plant automation 
                philosophies tailored to client needs. Our expertise includes integrating 
                automation into existing systems while enabling digital monitoring and 
                predictive analytics for enhanced operational excellence.
              </p>
            </div>
          </div>

          <div className="why-choose-us">
            <h2>Why Choose Us</h2>
            <p>
              With decades of expertise in delivering turnkey EPC and industrial projects, 
              AECON ensures reliable execution, long-term sustainability, and alignment 
              with global industry standards.
            </p>
            <ul>
              <li>Decades of experience in turnkey EPC & industrial projects</li>
              <li>Expertise in power, process, and industrial sectors</li>
              <li>Focus on renewable energy and green hydrogen solutions</li>
              <li>Advanced automation and digital monitoring systems</li>
              <li>Commitment to efficiency, sustainability, and global standards</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnergyandIndustry
