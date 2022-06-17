import React, {useState} from 'react';
import '../../../../styles/ProjectPage.css'

const ProjectPage = () => {
    const [haveProject, setHaveProject] = useState(false);

    const handleClick = () => {
        setHaveProject(current => !current);
    }
    return (
        <div className="containerMenu">
            <div className="projectsPanel">
                <div className="project">
                    <h2 className={'projectPage'}>Разработка динамической карты погоды на 3D-модели Земли</h2>
                    <p className="description">В данном проекте нужно связать нашу БД с заготовленной 3D-моделю Земли,
                        чтобы отображать на ней облачность, температуру и осадки.</p>
                    <div className="fullDesc">
                        <div className="descCard">
                            <h3 className="fullDescTitle projectPage">От нас</h3>
                            <ul>
                                <li className="flexString">
                                    <img src="img-ds/Component%201.svg" alt="icon"/>
                                        <span>Баллы за проектную деятельность (предмет)</span>
                                </li>
                                <li className="flexString">
                                    <img src="img-ds/Component%202.svg" alt="icon"/>
                                        <span>Регистрация патента под вашим авторством</span>
                                </li>
                                <li className="flexString">
                                    <img src="img-ds/Component%203.svg" alt="icon"/>
                                        <span>Возможность получить стипендию за научные разработки</span>
                                </li>
                            </ul>
                        </div>
                        <div className="descCard">
                            <h3 className="fullDescTitle projectPage">Что нужно сделать?</h3>
                            <ul>
                                <li className="flexString">
                                    <img src="img-ds/Component%201.svg" alt="icon"/>
                                        <span>Разработать прототип</span>
                                </li>
                                <li className="flexString">
                                    <img src="img-ds/Component%202.svg" alt="icon"/>
                                        <span>Описать прототип в реферате</span>
                                </li>
                                <li className="flexString">
                                    <img src="img-ds/Component%201.svg" alt="icon"/>
                                        <span>Защитить проект на высокий балл</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contacts">
                        <h3 className={'projectPage'}>
                            <p>Контакты<br/>
                            Олег Глухих: email@mail.ru</p>
                        </h3>
                    </div>
                    <div className="footerTitle">
                        <div className="skills">
                            <span className="skillCase">PostreSQL</span>
                            <span className="skillCase">Python</span>
                            <span className="skillCase">Autodesk Maya 2020</span>
                        </div>
                        <div className="manCount">4 / 5</div>
                    </div>
                </div>
                {haveProject
                    ? <p className="OKAY">Заявка отправлена!</p>
                    : <button onClick={handleClick} className="btn" id="btnRecord" type="submit">Записаться на проект</button>
                }
            </div>
        </div>
    );
};

export default ProjectPage;