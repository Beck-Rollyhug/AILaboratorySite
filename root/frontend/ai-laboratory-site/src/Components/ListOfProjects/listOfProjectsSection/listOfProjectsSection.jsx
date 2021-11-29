import React from "react";
import n from "./listOfProjectsSection.module.css";
import classNames from "classnames";


const ListOfProjectsSection= () => {
    return(
        <section className={n.mainMenu}>
            <div className={n.containerMenu}>
                <div className={n.searching}>
                    <div className={n.searchBar}>
                        <button className={classNames(n.navbarToggler, n.ololo)} type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true"
                                aria-label="Toggle navigation">
                            <span className={n.navbarTogglerIcon}></span>
                        </button>


                        <input type="text" className={n.searchProject} placeholder="Найти проект..."/>
                    </div>
                    <div className={n.searchAdd}>
                        <div className={classNames(n.searchBar, n.searchAddCurator)}>
                            <input className="addCurator" placeholder="Куратор..." value=""/>
                        </div>
                        <div className={classNames(n.searchBar, n.searchAddCurator)}>
                            <input className="addTechno" placeholder="Технологии..." value=""/>
                        </div>
                        <div className={classNames(n.searchBar, n.searchAddCurator)}>
                            <input className="addPartner" placeholder="Партнер..." value=""/>
                        </div>
                    </div>
                </div>
                {/*Сделай компоненту из этого!!!*/}
                <div className={n.projectsPanel}>
                    <div className={n.project}>
                        <a href="#">
                            <h2>Разработка динамической карты погоды на 3D-модели Земли</h2>
                            <p className={n.description}>В данном проекте нужно связать нашу БД с заготовленной 3D-моделю
                                Земли, чтобы отображать на ней облачность, температуру и осадки.</p>
                            <div className={n.footerTitle}>
                                <div className={n.skills}>
                                    <span className={n.PostreSQL}>PostreSQL</span>
                                    <span className={n.Python}>Python</span>
                                    <span className={n.AutodeskMaya2020}>Autodesk Maya 2020</span>
                                </div>
                                <div className={n.manCount}>4 / 5</div>
                            </div>
                        </a>
                    </div>
                    <div className={n.project}>
                        <a href="#">
                            <h2>Программирование механики робота-паука</h2>
                            <p className={n.description}>В данном проекте нужно реализовать базовые движения робота по
                                образцу настоящего паука.</p>
                            <div className={n.footerTitle}>
                                <div className={n.skills}>
                                    <span className={n.Assembly}>Assembly</span>
                                    <span className={n.CPP}>C++</span>
                                </div>
                                <div className={n.manCount}>4 / 5</div>
                            </div>
                        </a>
                    </div>
                    <div className={n.project}>
                        <a href="#">
                            <h2>Система распознавания раковых опухолей</h2>
                            <p className={n.description}>Обученить нейронную сеть по снимкам распознавать раковые
                                опухоли.</p>
                            <div className={n.footerTitle}>
                                <div className={n.skills}>
                                    <span className={n.Python}>Python</span>
                                </div>
                                <div className={n.manCount}>5 / 5</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListOfProjectsSection;