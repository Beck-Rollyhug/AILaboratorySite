import React from 'react';
import {Link} from "react-router-dom";

const ProjectCase = (props) => {
    return (
        <div className="project">
            <Link to="/projects/page">
                <h2>{props.title}</h2>
                <p className="description">{props.description}</p>
                <div className="footerTitle">
                    {/*<div className="skills">
                        <span className="PostreSQL">PostreSQL</span>
                        <span className="Python">Python</span>
                        <span className="AutodeskMaya2020">Autodesk Maya 2020</span>
                    </div>*/}
                    <div className="manCount">{props.manCountCurrent} / {props.manLimit}</div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCase;