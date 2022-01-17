import React, {useContext} from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";
import iisLogo from "../../../img/IIS logo.png";
/*import {Context} from "../../../index";*/

const Navbar = () => {
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
                        <Link className="navLink" to={'/'}>Главная</Link>
                        <Link className="navLink" to={'/projects'}>Проекты</Link>
                        <Link className="navLink" to={'/profile'}>Профиль</Link>
                    </div>
                    <div className="flexContainer">
                        <img className="logo-IIS" src={iisLogo} alt={'logo'}/>
                    </div>
                    <div className="flexContainer">
                        <Link className="navLink" to={'/contact_us'}>Связаться с нами</Link>
                        <Link className="navLink" to={'/tech_support'}>Тех.Поддержка</Link>
                        <button className="navLink" onClick={logout}>Выйти</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;