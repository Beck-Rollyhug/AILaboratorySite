import React from 'react';
import {Link} from "react-router-dom";

import './ProjectCase.css';

const ProjectCase = ({project, link}) => {
    return (
        <div className="project">
            <Link to={link}>
                <h2 className={'projectCase'}>{project.title}</h2>
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