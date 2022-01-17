import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";

import './Styles/Profile.css'
import ProjectCase from "./UI/ProjectCase/ProjectCase";
import {AuthContext, UserContext} from "../context";
import PostService from "../api/UserService";

const profile = {
    full_name: 'Иванов Иван Иванович',
    uni_name: 'УрФУ имени первого Президента России Б.Н.Ельцина',
    study_program: 'Программная Инженерия',
    study_year: '1',
    study_group: 'РИ-290034',
    email: 'email@mail.ru',
    phone_number: '+79123459999',
    other_contact: '@telegram_profile',
    projects: [
        {
            id: '2',
            title: 'Проект 2',
            description: 'Описание 2',
            manCountCurrent: '4',
            users_limit: '5',
            skills: [
                {
                    id: '1',
                    name: 'skill 1'
                },
                {
                    id: '2',
                    name: 'skill 2'
                }
            ]
        }
    ]
}

async function GetProfile(userId) {
    let response = await fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: userId,
            })
        }
    ).then(data => data.json());
    console.log(response);
}

const Profile = () => {
    /*const {isAuth, setIsAuth} = useContext(AuthContext)
    const {userId, setUserId} = useContext(UserContext);*/
    const navigate = useNavigate();

    const uuid = PostService.Check_uuid();


    /*console.log(userId);
    const profile1 = GetProfile(userId);*/

    if (uuid['status'] === 400)
    {
        /*setIsAuth(false);*/
        navigate('/login')
    }


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
            </section>
        </div>
    );
};

export default Profile;