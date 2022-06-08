import React, {useContext} from 'react';
import './Navbar.css'
import {Link, useNavigate} from "react-router-dom";
import iisLogo from "../../../img/IIS_logo.jpg";
import {useAuth} from "../../hooks/useAuth";
/*import {Context} from "../../../index";*/

const Navbar = () => {
    /*const {user} = useContext(Context);*/

    const {sign_out} = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        /*user.setIsAuth(false);*/
        localStorage.removeItem('auth');
    }
    return (
        <header className={'naviHead'}>
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
                        <Link className="naviLink" to={'/user/1/tech_support'}>Тех.Поддержка</Link>
                        <button className="naviLink" onClick={() => sign_out(() => navigate('/login', {replace: true}))}>Выйти</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;