import React, {useContext} from 'react';
import './admin_navbar.css'
import {Link} from "react-router-dom";
import iisLogo from "../../../img/IIS_logo_admin.png";
/*import {Context} from "../../../index";*/

const AdminNavbar = () => {
    /*const {user} = useContext(Context);*/
    const logout = () => {
        /*user.setIsAuth(false);*/
        localStorage.removeItem('auth');
    }
    return (
        <header>
            <div className="containerTop">
                <nav className="nav">
                    <div className="flexContainer">
                        <Link className="navLink" to={'/admin/1/landing_settings'}>Главная</Link>
                        <Link className="navLink" to={'/admin/1/users_manager'}>Пользователи</Link>
                        <Link className="navLink" to={'/admin/1/projects_manager'}>Менеджер проектов</Link>
                    </div>
                    <div className="flexContainer">
                        <img className="logo-IIS" src={iisLogo} alt={'logo'}/>
                    </div>
                    <div className="flexContainer">
                        <Link className="navLink" to={'/admin/1/profile'}>Профиль</Link>
                        <Link className="navLink" to={'/admin/1/general_settings'}>Общие настройки</Link>
                        <button className="navLink" onClick={logout}>Выйти</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default AdminNavbar;