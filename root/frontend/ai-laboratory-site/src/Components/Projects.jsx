import React, {useContext} from 'react';
import ProjectCase from "./UI/ProjectCase/ProjectCase";
import SearchBar from "./UI/SearchBar/SearchBar";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import PostService from "../api/UserService";

const projects = [
    {
        id: '1',
        title: 'Проект 1',
        description: 'Описание 1',
        manCountCurrent: '5',
        users_limit: '5',
        skills: [
            'skill 1',
            'skill 2',
            'skill 3'
        ]
    },
    {
        id: '2',
        title: 'Проект 2',
        description: 'Описание 2',
        manCountCurrent: '4',
        users_limit: '5',
        skills: [
            'skill 1',
            'skill 2'
        ]
    },
    {
        id: '3',
        title: 'Проект 3',
        description: 'Описание 3',
        manCountCurrent: '3',
        users_limit: '5',
        skills: [
            'skill 1'
        ]
    }
]

async function getProjects(credentials) {
    let response = await fetch('/api/projects')
        .then(data => data.json());
    console.log(response);
}

const Projects = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const uuid = PostService.Check_uuid();
    if (uuid.status === 400)
    {
        setIsAuth(false);
        navigate('/login')
    }

    const projects1 = getProjects()
    console.log(projects1)

    return (
        <div>
            <section className="main-menu">
                <div className="containerMenu">
                    <SearchBar/>
                    <div className="projectsPanel">
                        {projects.map(project =>
                            <ProjectCase project={project} key={project.id}/>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;