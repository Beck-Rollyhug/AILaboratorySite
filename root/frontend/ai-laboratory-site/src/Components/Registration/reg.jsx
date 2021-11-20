import React, {useState} from "react";
import style from "./reg.module.css"
import {Link} from "react-router-dom";



const Reg = () => {
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
                <Link to="/api/login">Войти</Link>
            </div>
        </div>
    )
}

export default Reg;