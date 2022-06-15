import React, {FC} from 'react';
import "../../../styles/ManagaProjects.css"
import SearchBar from "../../../UI/SearchBar/SearchBar";
import ProjectCase from "../../../UI/ProjectCase/ProjectCase";

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

const ManageProjects: FC = () => {
    return (
        <div>
            <section className="main-menu">
                <div className="containerMenu">
                    <SearchBar/>
                    <div className="projectsPanel">
                        {projects.map(project =>
                            <ProjectCase project={project} link={'/admin/:id/project_page/:project_id'} key={project.id}/>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageProjects;