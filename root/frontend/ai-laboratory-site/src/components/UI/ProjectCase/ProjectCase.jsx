import React, {useState} from 'react';
import {Link} from "react-router-dom";

import styles from './ProjectCase.module.css';

const ProjectCase = ({project, link}) => {
    const [isActive, setIsActive] = useState(null);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    return (
        <div className={styles.project}>
            <div onClick={() => handleClick()}>
                {
                    isActive ?
                    <div>
                        <h2 className={styles.name}>{project.title}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.details}>
                            <div className={styles.request_reward}>
                                <div className={styles.reward}>
                                    <div className={styles.title}>
                                        Для Вас
                                    </div>
                                    <div className={styles.section}>
                                        <div className={styles.icon}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5 12.5L16.5 10.5V22" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p>
                                            Предоставим работу для проектной деятельности в Вашем вузе
                                        </p>
                                    </div>
                                    <div className={styles.section}>
                                        <div className={styles.icon}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.2375 11.8375C13.5071 11.2008 13.9884 10.6768 14.5998 10.3541C15.2113 10.0314 15.9155 9.92985 16.5933 10.0666C17.271 10.2033 17.8807 10.5699 18.3193 11.1045C18.7578 11.639 18.9983 12.3086 19 13C19.0027 13.5973 18.824 14.1814 18.4875 14.675V14.675L13 22H19" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p>
                                            Зарегистрируем патент работы с Вашим соавторством
                                        </p>
                                    </div>
                                    <div className={styles.section}>
                                        <div className={styles.icon}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 10.5H19L15.5 15.5C16.0756 15.5 16.6422 15.642 17.1498 15.9134C17.6574 16.1847 18.0902 16.577 18.41 17.0556C18.7297 17.5342 18.9265 18.0842 18.9829 18.657C19.0393 19.2298 18.9536 19.8077 18.7333 20.3394C18.513 20.8712 18.165 21.3404 17.7201 21.7055C17.2752 22.0707 16.7471 22.3204 16.1826 22.4327C15.6181 22.545 15.0347 22.5164 14.4839 22.3493C13.9331 22.1823 13.432 21.882 13.025 21.475" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p>
                                            Откроем возможность получения стипендии за научные разработки
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.request}>
                                    <div className={styles.title}>
                                        Что нужно сделать?
                                    </div>
                                    <div className={styles.section}>
                                        <div className={styles.icon}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#555555" stroke-width="2" stroke-miterlimit="10"/>
                                                <path d="M13.5 12.5L16.5 10.5V22" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p>
                                            Доработать прототип проекта
                                        </p>
                                    </div>
                                    <div className={styles.section}>
                                        <div className={styles.icon}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#555555" stroke-width="2" stroke-miterlimit="10"/>
                                                <path d="M13.2375 11.8375C13.5071 11.2008 13.9884 10.6768 14.5998 10.3541C15.2113 10.0314 15.9155 9.92985 16.5933 10.0666C17.271 10.2033 17.8807 10.5699 18.3193 11.1045C18.7578 11.639 18.9983 12.3086 19 13C19.0027 13.5973 18.824 14.1814 18.4875 14.675V14.675L13 22H19" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p>
                                            Описать прототип в реферате
                                        </p>
                                    </div>
                                    <div className={styles.section}>
                                        <div className={styles.icon}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#555555" stroke-width="2" stroke-miterlimit="10"/>
                                                <path d="M13 10.5H19L15.5 15.5C16.0756 15.5 16.6422 15.642 17.1498 15.9134C17.6574 16.1847 18.0902 16.577 18.41 17.0556C18.7297 17.5342 18.9265 18.0842 18.9829 18.657C19.0393 19.2298 18.9536 19.8077 18.7333 20.3394C18.513 20.8712 18.165 21.3404 17.7201 21.7055C17.2752 22.0707 16.7471 22.3204 16.1826 22.4327C15.6181 22.545 15.0347 22.5164 14.4839 22.3493C13.9331 22.1823 13.432 21.882 13.025 21.475" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p>
                                            Защитить проект в своём вузе на высокий балл
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.tutor_info}>
                                <p className={styles.p}>Куратор:</p>
                                <p className={styles.p}>Михаилов Михаил Михаилович</p>
                                <p className={styles.p}>misha_mihailov@mail.ru</p>
                            </div>
                        </div>
                        <div className={styles.parameters}>
                            <div className={styles.skills}>
                                {project.skills.map(skill =>
                                    <span className={styles.skill_box} key={skill.id}>{skill.name}</span>
                                )}
                            </div>
                            <button className={styles.button}>
                                Записаться
                            </button>
                            <div className={styles.counter}>
                                <p className={styles.counter_text}>{project.users_count}</p>
                                <p className={styles.counter_text}>/</p>
                                <p className={styles.counter_text}>{project.users_limit}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className={styles.name}>{project.title}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.parameters}>
                            <div className={styles.skills}>
                                {project.skills.map(skill =>
                                    <span className={styles.skill_box} key={skill.id}>{skill.name}</span>
                                )}
                            </div>
                            <div className={styles.counter}>
                                <p className={styles.counter_text}>{project.users_count}</p>
                                <p className={styles.counter_text}>/</p>
                                <p className={styles.counter_text}>{project.users_limit}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export {ProjectCase};