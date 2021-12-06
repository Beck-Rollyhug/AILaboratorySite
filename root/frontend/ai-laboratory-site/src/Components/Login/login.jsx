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

    getAccount(props) {
        let response = fetch("http://localhost:3000/api/login",
            {
                    method: 'POST',
                    headers: {
                        'ContentType': 'application/json'
                    },
                    body: JSON.stringify({
                        email: props.email,
                        pass: props.pass
                    })
            })
            .then((responses) => responses.json())
            .then((data) => {
                console.log('ok', data);
            })

        if (response.ok) {
            alert( "OK" )
            let json = response.json();
        }
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
                {/*<button onClick={ this.getAccount }>Войти</button>*/}
                <input type={"button"} value={"Login"} onClick={ () => { this.getAccount(this.state) } }/>
            </form>

            <div>
                <Link to="/reg">Создать новый аккаунт</Link>
            </div>
        </div>
    )
}}

export default Login;