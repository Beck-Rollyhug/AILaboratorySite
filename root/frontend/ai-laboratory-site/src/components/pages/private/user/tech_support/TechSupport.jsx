import React from 'react';
import styles from './TechSupport.module.css'

const TechSupport = () => {
    return (
        <main className={styles.main}>
            <form className={styles.form}>
                <h1 className={styles.title}>
                    Техподдержка
                </h1>
                <div className={styles.input_box}>
                    <label htmlFor="topic" className={styles.label}>
                        Тема
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        id="topic"
                        placeholder="Заголовок..."/>
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="message" className={styles.label}>
                        Описание
                    </label>
                    <textarea
                        className={styles.text_area}
                        id="message"
                        placeholder="Текст..."/>
                </div>
                <div className={styles.buttons}>
                    <button type="submit" className={styles.button_save}>
                        Отправить
                    </button>
                </div>
            </form>
        </main>
    );
};

export {TechSupport};