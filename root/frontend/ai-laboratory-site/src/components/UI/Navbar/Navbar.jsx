import React from 'react';
import styles from './Navbar.module.css'
import {Link, useNavigate} from "react-router-dom";
import iisLogo from "../../../img/IIS_logo.jpg";
import {useAuth} from "../../hooks/useAuth";

const Navbar = () => {
    const {sign_out} = useAuth();
    const navigate = useNavigate();

    {/*
    <header className={styles.naviHead}>
            <div className="containerTop">
                <nav className="navi">
                    <div className="flexContainer">
                        <Link className="naviLink" to={'/'}>Главная</Link>
                        <Link className="naviLink" to={'/user/1/projects'}>Проекты</Link>
                        <Link className="naviLink" to={'/user/1/profile/'}>Профиль</Link>
                    </div>
                    <div className="flexContainer">
                        <img className="logo-IIS" src={iisLogo} alt={'logo'}/>
                    </div>
                    <div className="flexContainer">
                        <Link className="naviLink" to={'/user/1/contact_us'}>Связаться с нами</Link>
                        <Link className="naviLink" to={'/user/1/tech_support'}>Техподдержка</Link>
                        <button className="naviLink" onClick={() => sign_out(() => navigate('/login', {replace: true}))}>Выйти</button>
                    </div>
                </nav>
            </div>
        </header>
    */}

    return (
        <nav className={styles.nav}>
            <div className={styles.flexContainerLeft}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/user/1/projects'}>Проекты</Link>
                <Link to={'/user/1/profile/'}>Профиль</Link>
            </div>
            <div className={styles.flexContainerCenter}>
                <img className="logo-IIS" src={iisLogo} alt={'logo'}/>
            </div>
            <div>
                <Link to={'/user/1/contact_us'}>Связаться с нами</Link>
                <Link to={'/user/1/tech_support'}>Техподдержка</Link>
                <button onClick={() => sign_out(() => navigate('/login', {replace: true}))}>Выйти</button>
            </div>
        </nav>
    );
};

export {Navbar};