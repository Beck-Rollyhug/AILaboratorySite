import React from "react";
import n from "./information.module.css"
import Card from "./Card/card";
import {BrowserRouter} from "react-router-dom";

//Пока нет БД можно)
let a = "Промышленные роботы";
let b = "NPC в играх";
let c = "Исследования и эксперименты в биологии";
let d = "тест";


const Information = () => {
  return(

      <section id="section02" className={n.information}>
          <div className={n.container}>
              <div className={n.directions}>
                  <h1>Чем мы занимаемся?</h1>
                  <ul className={n.activity}>
                      <li >{a}</li>
                      <li >{b}</li>
                      <li >{c}</li>
                  </ul>

                  <div className={n.btn}><a href="#">Подробнее</a></div>
              </div>
          </div>
          <Card />
      </section>
  );
}

export default Information;