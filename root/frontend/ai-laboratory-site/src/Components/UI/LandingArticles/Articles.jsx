import React, {useState} from 'react';
import n from "../../_OldVersion/Information/information.module.css";
import Card from "../../_OldVersion/Information/Card/card";
import Robot from "../../img/robot_original.jpg";
import ArticleCase from "./ArticleCase/ArticleCase";

const Articles = () => {
    const [articles, setArticles] = useState([
            {
                id: 1,
                title: "Промышленные роботы",
                text: "Много роботов Много роботов Много роботов Много роботов Много роботов.",
                img: {Robot}
            },
            {
                id: 2,
                title: "NPC в играх",
                text: "Games Games Games Games Games Games Games Games Games Games.",
                img: {Robot}
            },
            {
                id: 3,
                title: "Исследования и эксперименты в biology",
                text: "Biology, biology, Biology, biology, Biology, biology, Biology, biology.",
                img: {Robot}
            }
        ])

    const currentArticle = articles[0];

    return (
        <div className={n.color}>
            <section id="section02" className={n.information}>
                <div className={n.container}>
                    <div className={n.directions}>
                        <h1>Чем мы занимаемся?</h1>
                        <ul className={n.activity}>
                            {articles.map((article) =>
                                <li key={article.id}>{article.title}</li>
                            )}
                        </ul>
                        <div className={n.btn}><a href="/projects">Подробнее</a></div>
                    </div>
                </div>
                <ArticleCase article={currentArticle}/>
                {/*<Card name="Роботы" text="Много роботов Много роботов Много роботов Много роботов Много роботов" img={Robot}/>*/}
            </section>
        </div>
    );
};

export default Articles;