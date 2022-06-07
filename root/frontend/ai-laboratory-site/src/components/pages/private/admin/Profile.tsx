import React from 'react';
import {Link} from "react-router-dom";
import ProjectCase from "../../../UI/ProjectCase/ProjectCase";
import '../../../styles/Profile.css'

const profile = {
    full_name: 'Иванов Иван Иванович',
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
        },
        {
            id: '2',
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

const Profile = () => {
    return (
        <section className="main-menu">
            <div className="containerMenu">
                <div className="userProfile">
                    <h1 className="name">{profile.full_name}</h1>
                    <p>Администратор / Куратор проектов</p>
                    <p>Почта: {profile.contacts.email}</p>
                    <p>Телефон: {profile.contacts.phone_number}</p>
                    <p>{profile.contacts.other_contact}</p>
                    <Link className="btnn" to="/profile/:id/edit">Настроить</Link>
                </div>
                <h2 className="listFullProjects">Курируемые проекты</h2>
                <div className="projects-panel">
                    <Link to="/project/:id">
                        {profile.projects.map(project =>
                            <ProjectCase project={project} key={project.id}/>
                        )}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Profile;