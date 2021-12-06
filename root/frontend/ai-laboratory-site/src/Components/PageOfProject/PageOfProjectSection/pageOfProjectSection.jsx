import React from "react";
import n from "./pageOfProjectSection.module.css";


const PageOfProjectSection = () => {
    return(
        <section className={n.mainMenu}>
            <div className={n.containerMenu}>
                <div className={n.projectsPanel}>
                    <div className={n.project}>
                        <h2>Разработка динамической карты погоды на 3D-модели Земли</h2>
                        <p className={n.description}>В данном проекте нужно связать нашу БД с заготовленной 3D-моделю
                            Земли, чтобы отображать на ней облачность, температуру и осадки.</p>
                        <div className={n.fullDesc}>
                            <div className={n.descCard}>
                                <h3 className={n.fullDescTitle}>От нас</h3>
                                <div className={n.asdf}>
                                    <ul className={n.listBenefits}>
                                        <li>
                                            <span>Баллы за проектную деятельность (предмет)</span>
                                        </li>
                                        <li>

                                            <span>Регистрация патента под вашим авторством</span>
                                        </li>
                                        <li>

                                            <span>Возможность получить стипендию за научные разработки</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={n.descCard}>
                                <h3 className={n.fullDescTitle}>Что нужно сделать?</h3>
                                <ul className={n.listWorkPlan}>
                                    <li>

                                        <span>Разработать прототип</span>
                                    </li>
                                    <li>

                                        <span>Описать прототип в реферате</span>
                                    </li>
                                    <li>

                                        <span>Защитить проект на высокий балл</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={n.contacts}>
                            <h3>Контакты
                                Олег Глухих: email@mail.ru</h3>
                        </div>
                        <div className={n.footerTitle}>
                            <div className={n.skills}>
                                <span className={n.PostreSQL}>PostreSQL</span>
                                <span className={n.Python}>Python</span>
                                <span className={n.AutodeskMaya2020}>Autodesk Maya 2020</span>
                            </div>
                            <div className={n.manCount}>4 / 5</div>
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