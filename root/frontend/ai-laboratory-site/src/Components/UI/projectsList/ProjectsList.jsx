import React from 'react';
import "./ProjectsList.css"
import ProjectCase from "../ProjectCase/ProjectCase";

const ProjectsList = ({projects}) => {
    return (
        <div className="projectsPanel">
            {projects.map((project) =>
                <ProjectCase project={project} key={project.id}/>
            )}
        </div>
    );
};

export default ProjectsList;