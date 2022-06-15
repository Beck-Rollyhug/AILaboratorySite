import React from 'react';
import '../../../styles/ContactUs.css'

const ContactUs = () => {
    return (
        <div className="formSignin">
            <form>
                <label htmlFor="floatingName">Что хотите узнать?</label>
                <div className="formFloating">
                    <input className="formControl-contactUs" type="text" id="floatingName" placeholder="Тема..."/>
                </div>
                <label htmlFor="floatingTel">Куда вам отправить ответ?</label>
                <div className="formFloating">
                    <input type="email" className="formControl-contactUs" id="floatingTel" placeholder="Почта..."/>
                </div>
                <label htmlFor="floatingTel">Расскажите подробнее:</label>
                <div className="formFloating">
                    <textarea name="msg" placeholder="Написать..."/>
                </div>
                <button className="btnn" type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default ContactUs;