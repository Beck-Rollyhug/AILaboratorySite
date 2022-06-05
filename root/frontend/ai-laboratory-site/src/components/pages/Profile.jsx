import '../styles/Profile.css'

import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";

import ProjectCase from "../UI/ProjectCase/ProjectCase";
import {AuthContext, UserContext} from "../../context";
import PostService from "../../api/UserService";

const profile = {
    full_name: 'Иванов Иван Иванович',
    study_info: {
        uni_name: 'УрФУ имени первого Президента России Б.Н.Ельцина',
        study_program: 'Программная Инженерия',
        study_year: '1',
        study_group: 'РИ-290034'
    },
    contacts: {
        email: 'email@mail.ru',
        phone_number: '+79123459999',
        other_contact: '@telegram_profile'
    },
    projects: [
        {
            id: '1',
            title: 'Разработка динамической карты погоды на 3D-модели Земли',
            description: 'В данном проекте нужно связать нашу БД с заготовленной 3D-моделю Земли, чтобы отображать на ней облачность, температуру и осадки.',
            users_count: '4',
            users_limit: '5',
            skills: [
                {
                    id: '1',
                    name: 'TypeScript'
                },
                {
                    id: '2',
                    name: 'Python'
                },
                {
                    id: '3',
                    name: 'MySQL'
                }
            ]
        }
    ]
}

/*
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
}*/

const Profile = () => {
    /*const {isAuth, setIsAuth} = useContext(AuthContext)
    const {userId, setUserId} = useContext(UserContext);
    //const navigate = useNavigate();

    const uuid = PostService.Check_uuid();

    //console.log(userId);
    //const profile1 = GetProfile(userId);

    if (uuid['status'] === 400)
    {
        //setIsAuth(false);
        //navigate('/login')
    }


    const study_info = profile.uni_name + '\n' +
                        profile.study_program + ', ' +
                        profile.study_year + 'й курс, ' +
                        profile.study_group
    const projects = profile.projects;
    */
    return (
        <div>
            <section className="main-menu">
                <div className="containerMenu">
                    <div className="userProfile">
                        <h1 className="name">{profile.full_name}</h1>
                        <p>Почта: {profile.contacts.email}</p>
                        <p>Телефон: {profile.contacts.phone_number}</p>
                        <p>{profile.contacts.other_contact}</p>
                        <Link className="btnn" to="/profile/edit">НАСТРОИТЬ</Link>
                    </div>
                    <h2 className="listFullProjects">ПРОЕКТЫ</h2>
                    <div className="projects-panel">
                        <Link to="/projects/page">
                            {profile.projects.map(project =>
                                <ProjectCase project={project} key={project.id}/>
                            )}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;