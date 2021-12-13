import React from "react";
import "./contact-us.css";

const ContactUsSection = () => {
  return(
      <main className="formSignin">
          <form>
              <div className="formFloating">
                  <input className="formControl" type="text" id="floatingName" placeholder="Ваше имя..."/>
                      <label htmlFor="floatingName"></label>
              </div>
              <select className="formSelect selectProject" aria-label="Default select example">
                  <option selected>Проект</option>
                  <option value="1">Разработка динамической карты погоды на 3D-модели Земли</option>
                  <option value="2">Программирование механики робота-паука</option>
                  <option value="3">Система распознавания раковых опухолей</option>
              </select>
              <div className="formFloating">
                  <input type="tel" className="formControl" id="floatingTel" placeholder="Телефон..."/>
                      <label htmlFor="floatingTel"></label>
              </div>
              <div className="formFloating">
                  <textarea name="msg" placeholder="Текст..."></textarea>
              </div>
              <button className="btnn" type="submit">ОТПРАВИТЬ</button>
          </form>
      </main>
  );
}

export default ContactUsSection;