import React from 'react';
import '../../styles/Login.css'
import iisLogo from "../../../img/IIS_logo.jpg";
import {Link, useHistory, useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
//import {observer} from "mobx-react-lite";

/*
async function Login(credentials) {
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
}*/

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {sign_in} = useAuth();

    const fromPage = location.state?.from?.pathname || '/user/:id/projects'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.email.value; // Для валидации

        sign_in(user, () => navigate(fromPage, {replace: true}));
    }

    /*const {user} = useContext(Context);
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const HandleForm = async e => {

        e.preventDefault();
        const response = await Login(
            {
                'email': email,
                'password': password
            }
        );
        if (response.status === 10)
        {
            console.log('user founded')
            const id = response.id;
            user.setUser({id});
            console.log(user);
            alert(document.cookie)
            user.setIsAuth(true);
            //localStorage.setItem('auth', 'true');
            history.push('/projects')
        }
    }*/
    return (
        <div className="formSignin">
             <form onSubmit={handleSubmit}>
                <img className="logoMenu" src={iisLogo} alt="iis-logo"/>
                <h2 className="title">Авторизация</h2>
                <div className="formFloating">
                    <input
                        type="email"
                        name={'email'}
                        className="formControl"
                        id="floatingInput"
                        placeholder="Почта..."/>
                    <label htmlFor="floatingInput"></label>
                </div>
                <div className="formFloating">
                    <input
                        type="password"
                        className="formControl"
                        id="floatingPassword"
                        placeholder="Пароль..."/>
                    <label htmlFor="floatingPassword"></label>
                </div>
                <button className="btn" type="submit">Войти</button>
                 <Link className="linkReg" to="/reg">Регистрация</Link>
                 <Link className="linkReg" to="/">На главную</Link>
            </form>
        </div>
    );
};

export default Login;