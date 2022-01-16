import React, {useContext, useState} from 'react';
import style from "./_delete_later/Login/login.module.css";
import {Link} from "react-router-dom";
import {AuthContext, UserContext} from "../context";

async function Auth(credentials) {
    const {user_id, setUserId} = useContext(UserContext);

    let response = await fetch('/api/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json());
    console.log(response.id);
    if (response.status === 10)
    {
        setUserId(response.id);
    }
    return response;
}

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const HandleForm = async e => {
        e.preventDefault();
        const response = await Auth(
            {
                'email': email,
                'password': password
            }
        );
        //getUserId(response.id);
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1>Login</h1>
            <form className={ style.bordered }>
                <label>
                    <p>Почта:</p>
                    <input name='email' type='text' onChange={event => setEmail(event.target.value)}/>
                </label>
                <label>
                    <p>Пароль:</p>
                    <input name='pass' type='text' onChange={event => setPassword(event.target.value)}/>
                </label>
                <button onClick={HandleForm} value={"Login"}>Войти{/*<Link to="/projects">Login</Link>*/}</button>
            </form>

            <div>
                <Link to="/reg">Создать новый аккаунт</Link>
            </div>
        </div>
    );
};

export default Login;