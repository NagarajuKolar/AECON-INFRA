import React from 'react'
import '../CSS/Project.css'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import projectsData from '../Constants/Projectdata';
function Projects() {
    const [filter, setFilter] = useState("all");
    const filteredProjects = projectsData.filter((p) => {
        if (filter === "major") {
            return p.isMajor;
        } else if (filter === "ongoing") {
            return p.status === "ongoing";
        } else if (filter === "completed") {
            return p.status === "completed" || p.isMajor;
        } else {
            return true;
        }
    });

    return (
        <>
            <div className="projects-container">
                <h2>Our Projects</h2>

                <div className="filter-buttons">
                    <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
                    <button className={filter === "major" ? "active" : ""} onClick={() => setFilter("major")}>Major</button>
                    <button className={filter === "ongoing" ? "active" : ""} onClick={() => setFilter("ongoing")}>Ongoing</button>
                    <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Completed</button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <img src={project.image} alt={project.category} className="project-img" />
                            {filter === "all" && (
                                <span className={`project-badge ${project.isMajor ? "major"
                                    : project.status === "ongoing"
                                        ? "ongoing"
                                        : "completed"
                                    }`}>
                                    {project.isMajor
                                        ? "Major"
                                        : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                    {/* <FaStar/> */}
                                </span>
                            )}
                            <div className="project-info">
                                <h4 className="project-name">{project.name}</h4>
                                <p className="project-category">{project.category}</p>
                            </div>
                            <div className="cat-view-project">
                                <Link to={`/projects/${project.id}`}>View Project</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Projects