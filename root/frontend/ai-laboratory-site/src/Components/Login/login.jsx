import React, {useState} from "react";
import style from "./login.module.css"
import {Link} from "react-router-dom";
import * as Console from "console";



const Login = () => {

    const email = ''
    document.getElementById('email').value = email
    const pass = ''
    document.getElementById('pass').value = pass

    const getAccount = () => {
        fetch("http://localhost:3000/api/login",
            {
                method: 'POST',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    pass: pass
                })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.status);
            })
    }

    return (
        <div className={style.centered}>
            <h1>Login</h1>
            <div>
                <input id='email' type='text'/>
            </div>
            <div>
                <input id='pass' type='text'/>
            </div>
            <div>
                <button onClick={getAccount()}>Войти</button>
            </div>

            <div className={style.centered}>
                <Link to="/api/reg">Создать новый аккаунт</Link>
            </div>
        </div>
    )
}

export default Login;