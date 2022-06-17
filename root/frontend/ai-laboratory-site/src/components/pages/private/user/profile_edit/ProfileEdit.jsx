import styles from './ProfileEdit.module.css';

import React from 'react';
import {Link} from "react-router-dom";

const ProfileEdit = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Редактирование профиля
            </h1>
            <form className={styles.form}>
                <div className={styles.section}>
                    <div className={styles.col}>
                        <h3 className={styles.title_col}>
                            Общая информация
                        </h3>
                        <div className={styles.input_box}>
                            <label htmlFor="name" className={styles.label}>
                                ФИО
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                id="name"
                                placeholder="ФИО"
                                value="Иванов Иван Иванович"/>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <h3 className={styles.title_col}>
                            Образование (получили / учитесь)
                        </h3>
                        <div className={styles.input_box}>
                            <label htmlFor="uni" className={styles.label}>
                                Учебное заведение
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                id="uni"
                                placeholder="Полное название..."/>
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="group" className={styles.label}>
                                Академическая группа
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                id="group"
                                placeholder="Номер..."/>
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="grade" className={styles.label}>
                                Курс
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                id="grade"
                                placeholder="Номер..."/>
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="program" className={styles.label}>
                                Направление обучения
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                id="program"
                                placeholder="Полное название..."/>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <h3 className={styles.title_col}>
                            Ваши контакты
                        </h3>
                        <div className={styles.input_box}>
                            <label htmlFor="mail" className={styles.label}>
                                Электронная почта
                            </label>
                            <input
                                type="email"
                                className={styles.input}
                                id="mail"
                                placeholder="Адрес..."
                                value="email@mail.ru"/>
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="phone" className={styles.label}>
                                Телефон
                            </label>
                            <input
                                type="tel"
                                className={styles.input}
                                id="phone"
                                placeholder="+7 (___) ___-__-__"/>
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="other_contact" className={styles.label}>
                                Другой вариант
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                id="other_contact"
                                placeholder="Адрес..."/>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link to='/user/:id/profile' className={styles.button_back}>
                        Назад
                    </Link>
                    <button type="submit" className={styles.button_save}>
                        Сохранить
                    </button>
                </div>
            </form>

        </main>
    );
};

export {ProfileEdit};