import React from "react";
import style from "./reg.module.css"
import {Link} from "react-router-dom";



class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.email)
    }

    addAccount = (props) => {
        const email = this.state.email;
        const pass = this.state.pass;
        const name = this.state.name
        console.log(email, pass);
        fetch("/api/reg",
            {
                method: 'POST',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'pass': pass,
                    'name': name
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
                <h1>Registration</h1>

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
                    <label>
                        <p>Имя (ФИО):</p>
                        <input name='name' type='text'
                               value={this.state.name}
                               onChange={ this.handleChange }/>
                    </label>
                    <input type={"button"} value={"Sign up"} onClick={ () => { this.addAccount(this.state) } }/>
                </form>

                <div className={style.centered}>
                    <Link to="/login">Войти</Link>
                </div>
            </div>
        )
    }
}

export default Reg;