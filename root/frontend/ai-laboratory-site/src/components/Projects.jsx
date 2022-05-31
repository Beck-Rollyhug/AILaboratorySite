import React, {useContext} from 'react';
import ProjectCase from "./UI/ProjectCase/ProjectCase";
import SearchBar from "./UI/SearchBar/SearchBar";
import PostService from "../api/UserService";
/*import {Context} from "../index";*/
import {observer} from "mobx-react-lite";

async function getProjects() {
    let response = await fetch('/api/projects')
        .then(data => data.json());
    console.log(response);
    return response.projects;
}

const Projects = observer(() => {
    console.log('in projects')
    /*const {user, projects} = useContext(Context);*/
    const uuid = PostService.Check_uuid();
    if (uuid.status === 400)
    {
        /*user.setIsAuth(false);*/
        /*navigate('/login')*/
    }

    const projects1 = getProjects()
    console.log(projects1)
    return (
        <div>
            <section className="main-menu">
                <div className="containerMenu">
                    <SearchBar/>
                    <div className="projectsPanel">
                        {projects1.map(project =>
                            <ProjectCase project={project} key={project.id}/>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
});

export default Projects;