import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Constants/Projectdata";
import "../CSS/Viewproject.css";

function Viewproject() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2 style={{ textAlign: "center" }}>Project not found</h2>;
  }

  return (
    <div className="viewproject-container">
      <h1 className="viewproject-title">{project.name}</h1>
      <div className="viewproject-content">
        <img src={project.image} alt={project.name} className="viewproject-image" />
        <div className="viewproject-details-grid">
          <div className="detail-card">
            <h3>Category</h3>
            <p>{project.category}</p>
          </div>
          <div className="detail-card">
            <h3>Client</h3>
            <p>{project.client}</p>
          </div>
          <div className="detail-card">
            <h3>Scope of Work</h3>
            <p>{project.scopeOfWork}</p>
          </div>
          <div className="detail-card">
            <h3>Status</h3>
            <p>{project.currentStatus}</p>
          </div>
        </div>
        
        <div className="product-gallery">
          <h3>Gallery</h3>
          <div className="gallery-grid">
            {project.relatedimages?.map((img, i) => (
              <div key={i} className="gallery-card">
                <img src={img} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}

export default Viewproject;
