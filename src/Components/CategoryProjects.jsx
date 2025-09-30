import React from 'react'
import projectsData from '../Constants/Projectdata'
import '../CSS/Categoryproject.css'
import { useParams, Link } from "react-router-dom";

function CategoryProjects() {
    const { category } = useParams();

    const filteredProjects = projectsData.filter(project =>
        project.category.toLowerCase().includes(category.toLowerCase())
    );

    return (
        <div className="cat-projects-container">
            {filteredProjects.map(project => (
                <div key={project.id} className="cat-project-card">
                    <span className={`status-badge ${project.status}`}>
                        {project.isMajor ? "Major" : project.status}
                    </span>
                    <img src={project.image} alt={project.name} className="cat-project-img" />

                    <div className="cat-project-body">
                        <h3>{project.name}</h3>
                        <p>{project.category}</p>
                    </div>
                    <div className="cat-view-project">
                        <Link to={`/projects/${project.id}`}>View Project</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryProjects
