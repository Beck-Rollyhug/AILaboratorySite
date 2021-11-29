
import React, {useState} from "react";
import n from "./login.module.css"
import {Link} from "react-router-dom";
import iisLogo from "../../img/IIS logo.png"
import ComponentsHeader from "./componentsHeader";


const Login = () => {
    return (
        //Компонента заголовок
    <body>
    <main className={n.formSignin}>
        <form>
            <img className={n.logoMenu} src={iisLogo}/>
            <h2 className={n.title}>Авторизация</h2>
            <div className="formFloating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                {/*<label htmlFor={n.floatingInput}>Почта...</label>*/}
            </div>
            <div className={n.formFloating}>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Пароль"/>
                {/*<label htmlFor={n.floatingPassword}>Пароль...</label>*/}
            </div>
            <Link to="/profile"><button className={n.btnn} type="submit">ВОЙТИ</button></Link>
            <Link to="/registration" className={n.linkReg}>Регистрация</Link>
        </form>
    </main>
{/*    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>*/}
    </body>
    )
}

import React from "react";
import style from "./login.module.css"
import {Link} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.email)
    }

    getAccount = (props) => {
        const email = this.state.email;
        const pass = this.state.pass;
        console.log(email, pass);
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
                console.log('ok', data);
            })
    }


    render() {
    return (
        <div className={style.centered}>
            <p>
                {this.state.email}
            </p>
            <h1>Login</h1>
            <form>
                <label>
                    Почта:
                    <input name='email' type='text' value={this.state.email} onChange={this.handleChange}/>
                </label>

                <input name='pass' type='text' value={this.state.pass} onChange={this.handleChange}/>
                <input type='submit' value='Войти' onSubmit={this.getAccount}/>
            </form>

            <div className={style.centered}>
                <Link to="/reg">Создать новый аккаунт</Link>
            </div>
        </div>
    )
}}


export default Login;