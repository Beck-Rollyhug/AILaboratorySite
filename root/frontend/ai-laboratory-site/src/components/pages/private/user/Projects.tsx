import React, {FC, useContext} from 'react';
import ProjectCase from "../../../UI/ProjectCase/ProjectCase";
import SearchBar from "../../../UI/SearchBar/SearchBar";
import PostService from "../../../../api/UserService";
/*import {Context} from "../index";*/
import {observer} from "mobx-react-lite";

/*
async function getProjects() {
    let response = await fetch('/api/projects')
        .then(data => data.json());
    console.log(response);
    return response.projects;
}
*/

const projects = [
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
    },
    {
        id: '3',
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
        id: '4',
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
];

const Projects: FC = () => {
    /*
    console.log('in projects')
    const {user, projects} = useContext(Context);
    const uuid = PostService.Check_uuid();
    if (uuid.status === 400)
    {
        //user.setIsAuth(false);
        //navigate('/login')
    }
    */
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