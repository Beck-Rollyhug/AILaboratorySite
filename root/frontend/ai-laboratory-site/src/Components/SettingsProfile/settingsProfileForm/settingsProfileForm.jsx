import React from "react";
import n from "./settingsProfileForm.module.css";
import ProfileHeader from "../../Profile/ProfileHeader/profileHeader";
import classNames from 'classnames';

const SettingsProfileForm = () => {
  return(
      <main className={n.formSignin}>
          <form>
              <div className={n.formFloating}>
                  <input type="text" className="form-control" id="floatingName" placeholder="ФИО"
                         value="Иванов Иван Иванович"/>
                      <label htmlFor="floatingName"></label>
              </div>
              <div className={n.formCheck}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className={n.formCheckLabel}htmlFor="flexCheckDefault">
                          Я сейчас учусь
                      </label>
              </div>
              <select className={n.formSelect} aria-label="Default select example">
                  <option selected>Учебное заведение</option>
                  <option value="1">УрФУ</option>
                  <option value="2">КФУ</option>
                  <option value="3">СПбГУ</option>
              </select>
              <div className={n.formFloating}>
                  <input type="text" className="form-control" id="floatingName" placeholder="Академическая группа..."/>
                      <label htmlFor="floatingName"></label>
              </div>
              <div className={n.formFloating}>
                  <input type="text" className="form-control" id="floatingName" placeholder="Курс..."/>
                      <label htmlFor="floatingName"></label>
              </div>
              <div className={n.formFloating}>
                  <input type="text" className="form-control" id="floatingName" placeholder="Направление обучения..."/>
                      <label htmlFor="floatingName"></label>
              </div>
              <div className={n.formFloating}>
                  <input type="email" className="form-control" id="floatingInput" placeholder="Почта..."
                         value="email@mail.ru"/>
                      <label htmlFor="floatingInput"></label>
              </div>
              <div className={n.formFloating}>
                  <input type="email" className="form-control" id="floatingInput" placeholder="Телефон..."/>
                      <label htmlFor="floatingInput"></label>
              </div>
              <div className={n.formFloating}>
                  <input type="email" className="form-control" id="floatingInput"
                         placeholder="Другой тип связи (необязательно)"/>
                      <label htmlFor="floatingInput"></label>
              </div>
              <div className={n.listBtn}>
                  <button className={classNames(n.btnn, n.btnBack)} type="submit">НАЗАД</button>
                  <button className={classNames(n.btnn, n.btnSave)} type="submit">СОХРАНИТЬ</button>
              </div>
          </form>
      </main>
  );
}

export default SettingsProfileForm;