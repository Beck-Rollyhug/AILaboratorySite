import React from "react";
import n from "./pageOfProjectSection.module.css";
import "./page_of_project.css"
import Component_1 from "../../../img/Component 1.png"
import Component_2 from "../../../img/Component 2.png"
import Component_3 from "../../../img/Component 3.png"

const PageOfProjectSection = () => {
    return(
        <section className="main-menu">
            <div className="containerMenu">
                <div className="projects-panel">
                    <div className="project">
                        <h2>Разработка динамической карты погоды на 3D-модели Земли</h2>
                        <p className="description">В данном проекте нужно связать нашу БД с заготовленной 3D-моделю
                            Земли, чтобы отображать на ней облачность, температуру и осадки.</p>
                        <div className="fullDesc">
                            <div className="descCard">
                                <h3 className="fullDescTitle">От нас</h3>
                                <ul>
                                    <li className="flexString">
                                        <img src={Component_1} alt="icon"/>
                                            <span>Баллы за проектную деятельность (предмет)</span>
                                    </li>
                                    <li className="flexString">
                                        <img src={Component_2} alt="icon"/>
                                            <span>Регистрация патента под вашим авторством</span>
                                    </li>
                                    <li className="flexString">
                                        <img src={Component_3} alt="icon"/>
                                            <span>Возможность получить стипендию за научные разработки</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="descCard">
                                <h3 className="fullDescTitle">Что нужно сделать?</h3>
                                <ul>
                                    <li className="flexString">
                                        <img src={Component_1} alt="icon"/>
                                            <span>Разработать прототип</span>
                                    </li>
                                    <li className="flexString">
                                        <img src={Component_2} alt="icon"/>
                                            <span>Описать прототип в реферате</span>
                                    </li>
                                    <li className="flexString">
                                        <img src={Component_3} alt="icon"/>
                                            <span>Защитить проект на высокий балл</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contacts">
                            <h3>Контакты<br/>Олег Глухих: email@mail.ru</h3>
                        </div>
                        <div className="footerTitle">
                            <div className="skills">
                                <span className="PostreSQL">PostreSQL</span>
                                <span className="Python">Python</span>
                                <span className="AutodeskMaya2020">Autodesk Maya 2020</span>
                            </div>
                            <div className="manCount">4 / 5</div>
                        </div>
                    </div>
                    <button className="btnn" type="submit">ЗАПИСАТЬСЯ НА ПРОЕКТ</button>
                    <p className="OKAY">Заявка отправлена!</p>
                </div>
            </div>
        </section>
    );
}
export default PageOfProjectSection;