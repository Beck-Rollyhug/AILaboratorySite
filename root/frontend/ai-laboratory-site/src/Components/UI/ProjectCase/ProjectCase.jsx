import React from 'react';
import {Link} from "react-router-dom";

import './ProjectCase.css';

const ProjectCase = ({project}) => {
    return (
        <div className="project">
            <Link to="/projects/page">
                <h2>{project.title}</h2>
                <p className="description">{project.description}</p>
                <div className="footerTitle">
                    {project.skills.map(skill =>
                        <span className="PostreSQL">{skill}</span>
                    )}
                    <div className="manCount">{project.manCountCurrent} / {project.users_limit}</div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCase;