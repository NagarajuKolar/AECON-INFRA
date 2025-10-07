import React from 'react'
import '../CSS/Aboutus.css'
import banner from '../assets/Banner.png'
import about from '../assets/about1.png'
import { Link } from 'react-router-dom'
import { IoCubeSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { IoWaterSharp } from "react-icons/io5";
import { GiSubmarine } from "react-icons/gi";
import { FaWater, FaIndustry, FaSolarPanel, FaProjectDiagram, FaRecycle } from 'react-icons/fa';

function Aboutus() {
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

  return (
    <>
      <div className="banner-section">
        <div className="banner">
          <img src={banner} alt="bannerimage" />
          <h2 className='banner-middle'><Link to="/">Home</Link> | <Link to="#">AboutUs</Link></h2>
          <h3 className='banner-top'>Amit Upagade Consultant</h3>
        </div>
      </div>

      <div className="about">
        <div className="about-content">
          <img src={about} alt="" />
          <div className="about-text">
            <h2>Our Company</h2>
            <p>AECON Infra Solutions is a leading consultancy and EPC (Engineering, Procurement, and Construction) partner for specialized infrastructure projects. Established in 2018 by Amit Upagade, a veteran with over two decades of experience in large-scale infrastructure works, we bring deep expertise in water, wastewater, marine, power, and industrial projects.
              <br />
              We specialize in pre-bid support, project management consultancy, and post-commissioning operation & maintenance services. Our team combines strategic planning with technical excellence to deliver sustainable, cost-effective, and high-quality solutions to government and private sector clients.
            </p>
            <p>
              With landmark projects such as India’s first STP on BOOT at Alandur UGSS and the 100 MLD Desalination Plant at Minjur under our belt, AECON Infra Solutions continues to drive innovation and reliability in infrastructure development.
              Our network of associates and partners across geotechnical, marine, and civil engineering allows us to offer end-to-end project delivery — from feasibility studies and engineering to commissioning and ongoing support.
            </p>
          </div>
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

      <div className="journey">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="timeline-content">
              <h3>2018</h3>
              <p>AECON Infra Solutions established</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-water"></i>
            </div>
            <div className="timeline-content">
              <h3>2020</h3>
              <p>100 MLD Desalination Plant at Minjur</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="timeline-content">
              <h3>2021</h3>
              <p>Alandur UGSS (India’s first STP on BOOT)</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="timeline-content">
              <h3>2023</h3>
              <p>Expansion into new markets</p>
            </div>
          </div>
        </div>
      </div>

      <div className="choseus">
        <h2>Why Choose Us</h2>
        <div className="choose-text">
          <p>At AECON Infra Solutions, we don’t just deliver projects — we build partnerships.
            Our team of highly experienced professionals manages every phase of your project,
            from concept to commissioning, ensuring seamless execution and peace of mind for our clients.</p>
          <p>Our long-standing relationships with suppliers and technology partners enable us to provide unmatched supply chain efficiency,
            cost optimization, and timely project delivery. Whether it’s feasibility studies, turnkey execution, or post-commissioning support,
            AECON Infra Solutions brings precision, reliability, and a future-focused approach to every assignment</p>
        </div>
      </div>

      <div className="industryweserve">
        <h2>Industries & Assets We Serve</h2>
        <ul className="industries-list">
          <li>
            <IoWaterSharp className="industry-icon" />
            Water & Wastewater Treatment Plants (STP, ETP, RO, ZLD)
          </li>
          <li>
            <GiSubmarine className="industry-icon" />
            Desalination Plants & Marine Infrastructure
          </li>
          <li>
            <FaIndustry className="industry-icon" />
            Industrial Utilities & Power Plants
          </li>
          <li>
            <FaProjectDiagram className="industry-icon" />
            Pipelines and Distribution Networks
          </li>
          <li>
            <FaRecycle className="industry-icon" />
            Specialized Civil & Environmental Projects
          </li>
        </ul>
      </div>

      <section className="sectors-cta">
        <h2>Looking to transform your project idea into reality?</h2>
        <button>Contact Us</button>
      </section>

    </>
  )
}

export default Aboutus