import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import '../Styles/Profile.css'
import {Link} from "react-router-dom";

const Profile = (props) => {
    return (
        <div>
            <section className="main-menu">
                <div className="containerMenu">
                    <div className="userProfile">
                        <h1 className="name">Иванов Иван Иванович</h1>
                        <p>УрФУ имени первого Президента России Б.Н.Ельцина
                            Программная Инженерия, 2й курс, РИ-290034</p>
                            <p>Почта: email@mail.ru</p>
                            <p>Номер: +79123456789</p>
                            <p>@telegram_profile</p>
                            <Link className="btnn" to="/profile/edit">НАСТРОИТЬ</Link>
                    </div>
                    <h2 className="listFullProjects">ПРОЕКТЫ</h2>
                    <div className="projects-panel">
                        <div className="project">
                            <Link to="/projects/page">
                                <h3>Разработка динамической карты погоды на 3D-модели Земли</h3>
                                <p className="description">В данном проекте нужно связать нашу БД с заготовленной
                                    3D-моделю Земли, чтобы отображать на ней облачность, температуру и осадки.</p>
                                <div className="footerTitle">
                                    <div className="skills">
                                        <span className="PostreSQL">PostreSQL</span>
                                        <span className="Python">Python</span>
                                        <span className="AutodeskMaya2020">Autodesk Maya 2020</span>
                                    </div>
                                    <div className="manCount">4 / 5</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;