import React, {useContext, useState} from 'react';
import './Styles/Reg.css'
import {Link} from "react-router-dom";
import {AuthContext} from "../context";

async function Auth(credentials) {
    let response = await fetch('/api/reg',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json());
    console.log(response);
    return response;
}

const Reg = ({getUserId}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [full_name, setFullName] = useState();

    const HandleForm = async e => {
        e.preventDefault();
        const response = await Auth(
            {
                'email': email,
                'password': password,
                'full_name': full_name
            }
        );
        getUserId(response.id);
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <main className="formSignin">
            <form>
                {/*<img className="logoMenu" src="img-ds/IIS%20logo.png" alt="iis-logo"/>*/}
                    <h2 className="title">Регистрация</h2>
                    <div className="formFloating">
                        <input type="text" onChange={event => setFullName(event.target.value)} className="formControl" id="floatingName" placeholder="ФИО..."/>
                            <label htmlFor="floatingName"></label>
                    </div>
                    <div className="formFloating">
                        <input type="email" onChange={event => setEmail(event.target.value)} className="formControl" id="floatingInput" placeholder="Почта..."/>
                            <label htmlFor="floatingInput"></label>
                    </div>
                    <div className="formFloating">
                        <input type="password" onChange={event => setPassword(event.target.value)} className="formControl" id="floatingPassword" placeholder="Пароль..."/>
                            <label htmlFor="floatingPassword"></label>
                    </div>
                    <div className="formCheck">
                        <input className="form-check-inline" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="formCheckLabel" htmlFor="flexCheckDefault">
                                Я сейчас учусь
                            </label>
                    </div>
                    <button className="btn" onClick={HandleForm} type="submit"><Link to="/profile">ЗАРЕГИСТРИРОВАТЬСЯ</Link></button>
                    <Link className="link" to="/login">Войти</Link>
            </form>
        </main>
    );
};

export default Reg;