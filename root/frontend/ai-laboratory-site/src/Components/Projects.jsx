import React from 'react';
import ProjectCase from "./UI/ProjectCase/ProjectCase";
import SearchBar from "./UI/SearchBar/SearchBar";

const Projects = ({projects}) => {
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