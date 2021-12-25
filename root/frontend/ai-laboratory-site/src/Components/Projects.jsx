import React from 'react';
import ProjectCase from "./UI/ProjectCase/ProjectCase";
import SearchBar from "./UI/SearchBar/SearchBar";

const Projects = (props) => {
    return (
        <div>
            <section className="main-menu">
                <div className="containerMenu">
                    <SearchBar/>
                    <div className="projectsPanel">
                        <ProjectCase
                            title={'Поисковой помощник'}
                            description={'Реализация и (если есть) сравнение с аналогами информационной системы, которая ' +
                            'по предпочтениям пользователя составляет и запускает актуальный поисковой запрос, где ' +
                            'результаты формируются в рекомендации к просмотру.'}
                            manCountCurrent={4}
                            manLimit={5}
                            skills={{
                                PostgreSQL: 'PostgreSQL',
                                Python: 'Python',
                                AutodeskMaya2020: 'Autodesk Maya 2020'
                            }}
                        />
                        <ProjectCase
                            title={'Веб-приложение доступа к ИСОБМ'}
                            description={'Реализация веб-приложения, которое позволяет пользователю ' +
                            'просматривать актуальную информацию о движении судов в Керченском проливе.'}
                            manCountCurrent={4}
                            manLimit={5}
                        />
                        <ProjectCase
                            title={'Веб-приложение доступа к БД РСБМ'}
                            description={'Приложение, реализующее прием заявок на проход транзитных судов по акватории ' +
                            'Керченского пролива и в близлежащие порты'}
                            manCountCurrent={4}
                            manLimit={5}
                        />
                        <ProjectCase
                            title={'Алгоритмы сокращения, основанных на грубых множествах'}
                            description={'Реализация алгоритмов сокращения атрибутов, основанных на теории ' +
                            'грубых множеств и исследованиях, опубликованных в Scopus'}
                            manCountCurrent={4}
                            manLimit={5}
                        />
                        <ProjectCase
                            title={'Алгоритмы отбора признаков'}
                            description={'Реализация и сравнение алгоритмов отбора признаков, опубликованных в Scopus'}
                            manCountCurrent={4}
                            manLimit={5}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;