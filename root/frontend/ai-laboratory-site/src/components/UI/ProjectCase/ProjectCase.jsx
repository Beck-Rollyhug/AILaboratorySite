import React from 'react';
import {Link} from "react-router-dom";

import './ProjectCase.css';

const ProjectCase = ({project}) => {
    return (
        <div className="project">
            <Link to="/user/:id/project/:project_id">
                <h2>{project.title}</h2>
                <p className="description">{project.description}</p>
                <div className="footerTitle">
                    <div className="skills">
                        {project.skills.map(skill =>
                            <span className="skillCase" key={skill.id}>{skill.name}</span>
                        )}
                    </div>
                    <div className="manCount">
                        {project.users_count} / {project.users_limit}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCase;