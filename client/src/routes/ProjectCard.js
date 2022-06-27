import React from "react";

function ProjectCard({project}){


    return(
        <div className="med-card">
            <h1>Name: {project.name}</h1>
            <h3>Description: {project.description}</h3>
        </div>
    )
}

export default ProjectCard;