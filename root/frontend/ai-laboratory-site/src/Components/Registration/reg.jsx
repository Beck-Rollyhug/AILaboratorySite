import React from "react";
import style from "./reg.module.css"
import {Link} from "react-router-dom";



class Reg extends React.Component {
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
                <h1>Registration</h1>
                <div>
                    <input/>
                </div>
                <div>
                    <input/>
                </div>
                <div>
                    <button>Зарегистрироваться</button>
                </div>

                <div className={style.centered}>
                    <Link to="/login">Войти</Link>
                </div>
            </div>
        )
    }
}

export default Reg;