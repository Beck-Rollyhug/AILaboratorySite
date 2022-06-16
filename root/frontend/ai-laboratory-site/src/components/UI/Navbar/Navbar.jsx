import React from 'react';
import styles from './Navbar.module.css'
import {Link, useNavigate} from "react-router-dom";
import iisLogo from "../../../img/IIS_logo.jpg";
import {useAuth} from "../../hooks/useAuth";

const Navbar = () => {
    const {sign_out} = useAuth();
    const navigate = useNavigate();

    return (
        <nav className={styles.nav}>
            <div className={styles.flex_container_left}>
                <Link className={styles.link} to={'/'}>Главная</Link>
                <Link className={styles.link} to={'/user/1/projects'}>Проекты</Link>
                <Link className={styles.link} to={'/user/1/profile/'}>Профиль</Link>
            </div>
            <div className={styles.flex_container_center}>
                <img className="logo-IIS" src={iisLogo} alt={'logo'}/>
            </div>
            <div className={styles.flex_container_right}>
                <Link className={styles.link} to={'/user/1/contact_us'}>Связаться с нами</Link>
                <Link className={styles.link} to={'/user/1/tech_support'}>Техподдержка</Link>
                <button
                    className={styles.link}
                    onClick={() => sign_out(() => navigate('/login', {replace: true}))}
                >Выйти</button>
            </div>
        </nav>
    );
};

export {Navbar};