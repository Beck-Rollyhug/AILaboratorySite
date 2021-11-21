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