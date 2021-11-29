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

export default Login;