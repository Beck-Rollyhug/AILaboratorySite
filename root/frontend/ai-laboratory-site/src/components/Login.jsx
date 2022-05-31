import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";

async function Auth(credentials) {
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
    return response;
}

const Login = observer(() => {
    /*const {user} = useContext(Context);*/
    /*const history = useHistory();*/
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const HandleForm = async e => {
        /*e.preventDefault();*/
        const response = await Auth(
            {
                'email': email,
                'password': password
            }
        );
        if (response.status === 10)
        {
            console.log('user founded')
            const id = response.id;
            /*user.setUser({id});
            console.log(user);*/
            /*alert(document.cookie)*/
            /*user.setIsAuth(true);*/
            localStorage.setItem('auth', 'true');
            /*history.push('/projects');*/
        }
    }
    return (
        <div>
            <header>
                <div className="containerHeader">
                    {/*<button type="button" style={"width: 40px; height: 30px;"}></button>*/}
                </div>
            </header>
            <main className="formSignin">
                <form>
                    <img className="logoMenu" src="img-ds/IIS%20logo.png" alt="iis-logo"/>
                        <h2 className="title">Авторизация</h2>
                        <div className="formFloating">
                            <input type="email" className="formControl" id="floatingInput" placeholder="Почта..."/>
                            {{/*<label htmlFor="floatingInput"></label>*/}}
                        </div>
                        <div className="formFloating">
                            <input type="password" className="formControl" id="floatingPassword" placeholder="Пароль..."/>
                            {{/*<label htmlFor="floatingPassword"></label>*/}}
                        </div>
                        <button className="btn" type="submit">ВОЙТИ</button>
                        <Link className="linkReg" to="/reg">Регистрация</Link>
                </form>
            </main>
        </div>
    );
});

export default Login;