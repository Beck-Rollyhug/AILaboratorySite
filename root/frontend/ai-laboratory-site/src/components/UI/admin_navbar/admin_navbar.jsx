import React, {useContext} from 'react';
import './admin_navbar.css'
import {Link, useNavigate} from "react-router-dom";
import iisLogo from "../../../img/IIS_logo_admin.png";
import {useAuth} from "../../hooks/useAuth";
/*import {Context} from "../../../index";*/

const AdminNavbar = () => {
    const {sign_out} = useAuth();
    const navigate = useNavigate();


    /*const {user} = useContext(Context);*/
    const logout = () => {
        /*user.setIsAuth(false);*/
        localStorage.removeItem('auth');
    }
    return (
        <header className={'naviHead'}>
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
                        <button className="navLink" onClick={() => sign_out(() => navigate('/login', {replace: true}))}>Выйти</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default AdminNavbar;