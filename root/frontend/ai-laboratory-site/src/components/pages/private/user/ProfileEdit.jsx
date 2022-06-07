import React from 'react';
import {Link} from "react-router-dom";

const ProfileEdit = () => {
    return (
        <main className="formSignin">
            <form>
                <div className="formFloating">
                    <input className="formControl" type="text" id="floatingName" placeholder="ФИО"
                           value="Иванов Иван Иванович"/>
                        <label htmlFor="floatingName"></label>
                </div>
                <div className="formCheck">
                    <input className="formCheckInput" type="checkbox" id="flexCheckDefault"/>
                        <label className="formCheckLabel" htmlFor="flexCheckDefault">
                            Я сейчас учусь
                        </label>
                </div>
                <select className="formSelect selectEdu" aria-label="Default select example">
                    <option selected>Учебное заведение</option>
                    <option value="1">УрФУ</option>
                    <option value="2">КФУ</option>
                    <option value="3">СПбГУ</option>
                </select>
                <div className="formFloating">
                    <input type="text" className="formControl" id="floatingGroup" placeholder="Академическая группа..."/>
                        <label htmlFor="floatingGroup"></label>
                </div>
                <div className="formFloating">
                    <input type="text" className="formControl" id="floatingCourse" placeholder="Курс..."/>
                        <label htmlFor="floatingCourse"></label>
                </div>
                <div className="formFloating">
                    <input type="text" className="formControl" id="floatingDirStudy"
                           placeholder="Направление обучения..."/>
                        <label htmlFor="floatingDirStudy"></label>
                </div>
                <div className="formFloating">
                    <input type="email" className="formControl" id="floatingEmail" placeholder="Почта..."
                           value="email@mail.ru"/>
                        <label htmlFor="floatingEmail"></label>
                </div>
                <div className="formFloating">
                    <input type="tel" className="formControl" id="floatingTel" placeholder="Телефон..."/>
                        <label htmlFor="floatingTel"></label>
                </div>
                <div className="formFloating">
                    <input type="text" className="formControl" id="floatingOtherCommun"
                           placeholder="Другой тип связи (необязательно)"/>
                        <label htmlFor="floatingOtherCommun"></label>
                </div>
                <div className="listBtn">
                    <Link className="btnn btnBack" to='/user/:id/profile'>Назад</Link>
                    <button className="btnn btnSave" type="submit">Сохранить</button>
                </div>
            </form>
        </main>
    );
};

export default ProfileEdit;