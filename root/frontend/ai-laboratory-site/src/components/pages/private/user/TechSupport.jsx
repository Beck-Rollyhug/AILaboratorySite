import React from 'react';
import '../../../styles/TechSupport.css'

const TechSupport = () => {
    return (
        <main className="formSignin">
            <form>
                <label htmlFor="floatingName">Где возникла проблема?</label>
                <div className="formFloating">
                    <input className="formControl-tech" type="text" id="floatingName" placeholder="Тема..."/>
                </div>
                <label htmlFor="floatingTel">Куда вам отправить ответ?</label>
                <div className="formFloating">

                    <input type="email" className="formControl-tech" id="floatingTel" placeholder="Почта..."/>
                </div>
                <label htmlFor="floatingTel">Опишите проблему: </label>
                <div className="formFloating">
                    <textarea name="msg" placeholder="Написать..."/>
                </div>
                <button className="btnn" type="submit">Отправить</button>
            </form>
        </main>
    );
};

export default TechSupport;