import React from "react";
import style from "./login.module.css";
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
    }

    async isLogged() {

        let response = await fetch("/api/check_uuid")

        if (response.ok)
        {
            let json = await response.json();
            let status = json['status']
            if (status === 210)
                alert('Авторизован')
            else if (status === 400)
                alert('Не авторизован')
            else {
                alert('Не могу проверит авторизацию, status:' + status)
            }
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    async getAccount(props) {

        let response = await fetch("/api/login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': props.email,
                    'pass': props.pass
                })
            })
        if (response.ok)
        {
            let json = await response.json();
            console.log(response.status, json['status']);
            let status = json['status']
            if (status === 0)
                alert('Пользователь не найден')
            else if (status === 10)
                alert('Найден Пользователь')
            else if (status === 20)
                alert('Найден Организатор')
            else {
                alert('Cannot read status')
            }
        } else {
            alert("Ошибка HTTP: " + response.status);
        }

        await this.isLogged()
    }

    render() {
    return (
        <div>
            <h1>Login</h1>

            <form className={ style.bordered }>
                <label>
                    <p>Почта:</p>
                    <input name='email' type='text'
                           value={this.state.email}
                           onChange={ this.handleChange }/>
                </label>
                <label>
                    <p>Пароль:</p>
                    <input name='pass' type='text'
                           value={this.state.pass}
                           onChange={ this.handleChange }/>
                </label>
                <input type={"button"} value={"Login"} onClick={ () => { this.getAccount(this.state) } }/>
            </form>

            <div>
                <Link to="/reg">Создать новый аккаунт</Link>
            </div>
        </div>
    )
}}

export default Login;