import React, {useState} from "react";
import n from "./registration.module.css"
import Login from "../Login/login"
import {Link} from "react-router-dom";
import iisLogo from "../../../../../../../../../OneDrive/Desktop/AILaboratorySite-react-new-testing/root/frontend/ai-laboratory-site/src/img/IIS logo.png"

const Registration = () => {
    return (
        <body className={n.body}>
        <header className="header-top" aria-label="menu">
            <div className="container">

            </div>
        </header>
        <main className={n.formSignin}>
            <form>
                <img className={n.logoMenu} src={iisLogo}/>
                    <h2 className={n.title}>Регистрация</h2>
                    <div className={n.formFloating}>
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            {/*<label htmlFor="floatingInput">Почта...</label>*/}
                    </div>
                    <div className={n.formFloating}>
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Пароль"/>
                            {/*<label htmlFor={n.floatingPassword}>Пароль...</label>*/}
                    </div>
                    <div className={n.formFloating}>
                        <input type="text" className="form-control" id="floatingName" placeholder="ФИО"/>
                            {/*<label htmlFor="floatingName"></label>*/}
                    </div>
                    <div className={n.formCheck}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className={n.formCheckLabel} htmlFor="flexCheckDefault">
                                Я сейчас учусь
                            </label>
                    </div>
                    <button className={n.btnn} type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                <Link to="/login" className={n.linkReg}>Войти</Link>
            </form>
        </main>
        </body>
    )
}

export default Registration;