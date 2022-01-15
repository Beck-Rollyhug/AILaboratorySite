import React from 'react';
import {Link} from "react-router-dom";

import './Styles/Profile.css'
import ProjectCase from "./UI/ProjectCase/ProjectCase";

const Profile = ({profile}) => {
    const study_info = profile.uni_name + '\n' +
                        profile.study_program + ', ' +
                        profile.study_year + 'й курс, ' +
                        profile.study_group
    const projects = profile.projects;
    return (
        <div>
            <section className="main-menu">
                <div className="containerMenu">
                    <div className="userProfile">
                        <h1 className="name">{profile.full_name}</h1>
                        <p>{study_info}</p>
                        <p>Почта: {profile.email}</p>
                        <p>Телефон: {profile.phone_number}</p>
                        <p>{profile.other_contact}</p>
                        <Link className="btnn" to="/profile/edit">НАСТРОИТЬ</Link>
                    </div>
                    <h2 className="listFullProjects">ПРОЕКТЫ</h2>
                    <div className="projects-panel">
                        <div className="project">
                            <Link to="/projects/page">
                                {projects.map(project =>
                                    <ProjectCase project={project} key={project.id}/>
                                )}
                                {/*<h3>Разработка динамической карты погоды на 3D-модели Земли</h3>
                                <p className="description">В данном проекте нужно связать нашу БД с заготовленной
                                    3D-моделю Земли, чтобы отображать на ней облачность, температуру и осадки.</p>
                                <div className="footerTitle">
                                    <div className="skills">
                                        <span className="PostreSQL">PostreSQL</span>
                                        <span className="Python">Python</span>
                                        <span className="AutodeskMaya2020">Autodesk Maya 2020</span>
                                    </div>
                                    <div className="manCount">4 / 5</div>
                                </div>*/}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;