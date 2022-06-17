import React, {useContext, useState} from 'react';
import styles from './Reg.module.css'
import iisLogo from "../../../../img/IIS_logo.jpg";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../../context";
/*
async function Auth(credentials) {
    let response = await fetch('/api/reg',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json());
    console.log(response);
    return response;
}*/

const Reg = () => {
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [full_name, setFullName] = useState();

    const HandleForm = async e => {
        e.preventDefault();
        /*
        const response = await Auth(
            {
                'email': email,
                'password': password,
                'full_name': full_name
            }
        );
        getUserId(response.id);*/
        // setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <main className={styles.main}>
            <form className={styles.form}>
                <img className={styles.logo} src={iisLogo} alt="iis-logo"/>
                <h2 className={styles.title}>
                    Регистрация
                </h2>
                <div className={styles.input_box}>
                    <label htmlFor="name" className={styles.label}>
                        ФИО
                    </label>
                    <input
                        type="text"
                        name={'name'}
                        className={styles.input}
                        id="name"
                        placeholder="Иванов Иван Иванович..."/>
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="email" className={styles.label}>
                        Логин
                    </label>
                    <input
                        type="email"
                        name={'email'}
                        className={styles.input}
                        id="email"
                        placeholder="Почта..."/>
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="password" className={styles.label}>
                        Пароль
                    </label>
                    <input
                        type="password"
                        name={'password'}
                        className={styles.input}
                        id="password"
                        placeholder="Пароль..."/>
                </div>
                <button className={styles.button} type="submit">Создать аккаунт</button>
                <Link className={styles.link} to="/login">Авторизация</Link>
                <Link className={styles.link} to="/">На главную</Link>
            </form>
        </main>
    );
};

export {Reg};