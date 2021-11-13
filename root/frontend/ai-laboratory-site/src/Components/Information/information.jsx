import React from "react";
import n from "./information.module.css"
import Card from "./Card/card";
import {BrowserRouter} from "react-router-dom";

//Пока нет БД можно)
let a = "Промышленные роботы";
let b = "NPC в играх";
let c = "Исследования и эксперименты в биологии";
let d = "тест";

let num = 1;
let name1 = "1";
let name2 = "2";
let name3 = "3";
let name;

console.log(num)
let choose = (num) =>{
    if (num === 1){
        return <Card name = {name1}/>
    }
    else if(num === 2){
        return <Card name = {name2}/>
    }
    else if (num === 3){
        return <Card name = {name3}/>
    }
    else return <Card name = {name1}/>
}

let option1 = () =>{
    console.log("1");
    num = 1;
    return <Card name = {name1}/>
}

let option2 = () =>{
    console.log("2");
    num = 2;
    return <Card name = {name2}/>
}

let option3 = () =>{
    console.log("3");
    num = 3;
}



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
                      <button onClick={option1}>Тест1</button>
                      <button onClick={option2}>Тест2</button>
                      <button onClick={option3}>Тест3</button>
                  </ul>
                  <div className={n.btn}><a href="#">Подробнее</a></div>
              </div>
          </div>
          {choose(num)}
      </section>
  );
}

export default Information;