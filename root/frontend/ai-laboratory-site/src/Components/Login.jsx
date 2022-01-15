import React, {useContext} from 'react';
import style from "./_delete_later/Login/login.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = () => {
        setIsAuth(true);
        localStorage.setItem('auth', 'true');

    }
    return (
        <div>
            <h1>Login</h1>
            <form className={ style.bordered }>
                <label>
                    <p>Почта:</p>
                    <input name='email' type='text'/>
                </label>
                <label>
                    <p>Пароль:</p>
                    <input name='pass' type='text'/>
                </label>
                <button onClick={login} value={"Login"}><Link to="/projects">Login</Link></button>
            </form>

            <div>
                <Link to="/reg">Создать новый аккаунт</Link>
            </div>
        </div>
    );
};

export default Login;