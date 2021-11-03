import './App.css';
import React from "react";
import Politeh from "./img/politeh.jpg"
import URFU from "./img/urfu.jpg"
import SPBGU from "./img/spbgu.jpg"

function App() {
  return (
    <div className="App">
        <header className="main-title">
            <div className="container">
                <div className="menu-top">
                    <button className="burger-menu" type="button">
                        <span className="icon"></span>
                    </button>

                    <nav></nav>
                    <div className="title">
                        <h2>Хочу всё понять.</h2>
                        <p>эта идея создаёт ученых</p>
                    </div>
                </div>
                <p className="promo">ИИС приглашает волонтёров и студентов в свои проекты,
                    с применением искусственного интеллекта
                    в исследовании нашей жизни.</p>
                <a href="#section02" class="scroll">
                    <div className="left"></div>
                    <div className="right"></div>
                </a>
            </div>
        </header>
        <section id="section02" class="information">
            <div className="container">
                <div className="directions">
                    <h1>Чем мы занимаемся?</h1>
                    <ul className="activity">
                        <li>Промышленные роботы (сделать ховеры)</li>
                        <li>NPC в играх</li>
                        <li>Исследования и эксперименты в биологии</li>
                    </ul>
                    <div className="btn"><a href="#">Подробнее</a></div>
                </div>
                {/*<div class="card">
                        <img class="card-img"/>
                        <img src="img/robot_original.jpg" class="card-img-top" alt="Роботы"/>
                        <div class="card-body">
                            <h1>Промышленные роботы</h1>
                            <p>Аропор попртмит пвапыава враоплр олрдлр епопроаоаопроаророа поралавпвяыапф ыапыавпы аврапв пывапвыпыва пывапавыпы авпыавпыавпыпапавы пыавпвапыр прпрпрваы.
                                Аропор попртмит пвапыава враоплр олрдлр епопроаоаопроаророа поралавпвяыапф ыапыавпы аврапв пывапвыпыва пывапавыпы авпыавпыавпыпапавы пыавпвапыр прпрпрваы.
                                Аропор попртмит пвапыава враоплр олрдлр епопроаоаопроаророа поралавпвяыапф ыапыавпы аврапв пывапвыпыва пывапавыпы авпыавпыавпыпапавы пыавпвапыр прпрпрваы.
                                Аропор попртмит пвапыава враоплр олрдлр епопроаоаопроаророа поралавпвяыапф ыапыавпы аврапв пывапвыпыва пывапавыпы авпыавпыавпыпапавы пыавпвапыр прпрпрваы.
                               </p>
                        </div>
                </div>*/}
            </div>
        </section>

        <section className="partners">
            <img src= {Politeh}/>
            <img src={URFU}/>
            <img src={SPBGU}/>
        </section>

        <footer className="footer">
            <p>Техподдержка</p>
        </footer>
    </div>
  );
}

export default App;
