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
        <div className="viewproject-details">
          <p><strong>Category:</strong> {project.category}</p>
          <p><strong>Client:</strong> {project.client}</p>
          <p><strong>Scope of Work:</strong> {project.scopeOfWork}</p>
          <p><strong>Status:</strong> {project.currentStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default Viewproject;
