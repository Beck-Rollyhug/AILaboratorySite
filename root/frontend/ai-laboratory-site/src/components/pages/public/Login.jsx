import React from 'react';
import '../../styles/Login.css'
import iisLogo from "../../../img/IIS_logo.jpg";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

async function findUser(credentials) {
    try {
        console.log('1-findUser');

        let newUser = await fetch("/api/login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            .then(data => data.json());

        console.log('2-got-response');

        return newUser;
    } catch (e) {}
}


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {sign_in, user} = useAuth();

    const fromUserPage = location.state?.from?.pathname || '/user/:id/projects'
    //const fromAdminPage = location.state?.from?.pathname || '/admin/:id/projects_manager'

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = await findUser({
            email: email,
            password: password
        });

        console.log('3-start-sign-in');

        sign_in(newUser.id, () => navigate('/user/' + newUser.id + '/projects', {replace: true}));

        //sign_in(credentials, () => navigate('/user/:id/projects', {replace: true}));
        /*
        if (role === 'user') {
            sign_in('Alex', role, () => navigate(fromUserPage, {replace: true}));
        }
        if (role === 'admin') {
            sign_in('Alex', role, () => navigate(fromAdminPage, {replace: true}));
        }
        */
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
        <div className={'formSignin-login'}>
            <form onSubmit={handleSubmit} className={'login'}>
                <img className="logoMenu" src={iisLogo} alt="iis-logo"/>
                <h2 className="title">Авторизация</h2>
                <div className="formFloating">
                    <input
                        type="email"
                        name={'email'}
                        className="formControl-login"
                        id="floatingInput"
                        placeholder="Почта..."/>
                    <label htmlFor="floatingInput"></label>
                </div>
                <div className="formFloating">
                    <input
                        type="password"
                        name={'password'}
                        className="formControl-login"
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