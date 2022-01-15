import React, {useContext} from 'react';
import './Styles/Reg.css'
import {Link} from "react-router-dom";
import {AuthContext} from "../context";

const Reg = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = () => {
        setIsAuth(true);
        localStorage.setItem('auth', 'true');

    }
    return (
        <main className="formSignin">
            <form>
                {/*<img className="logoMenu" src="img-ds/IIS%20logo.png" alt="iis-logo"/>*/}
                    <h2 className="title">Регистрация</h2>
                    <div className="formFloating">
                        <input type="text" className="formControl" id="floatingName" placeholder="ФИО..."/>
                            <label htmlFor="floatingName"></label>
                    </div>
                    <div className="formFloating">
                        <input type="email" className="formControl" id="floatingInput" placeholder="Почта..."/>
                            <label htmlFor="floatingInput"></label>
                    </div>
                    <div className="formFloating">
                        <input type="password" className="formControl" id="floatingPassword" placeholder="Пароль..."/>
                            <label htmlFor="floatingPassword"></label>
                    </div>
                    <div className="formCheck">
                        <input className="form-check-inline" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="formCheckLabel" htmlFor="flexCheckDefault">
                                Я сейчас учусь
                            </label>
                    </div>
                    <button className="btn" onClick={login} type="submit"><Link to="/profile">ЗАРЕГИСТРИРОВАТЬСЯ</Link></button>
                    <Link className="link" to="/login">Войти</Link>
            </form>
        </main>
    );
};

export default Reg;