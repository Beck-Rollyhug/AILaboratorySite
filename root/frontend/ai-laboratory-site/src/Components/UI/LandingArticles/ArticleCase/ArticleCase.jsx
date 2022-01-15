import React from 'react';
import n from "../../../_OldVersion/Information/Card/card.module.css";

const ArticleCase = ({article}) => {
    return (
        <div className={n.card}>
            <img src={article.img} className={n.cardImg} alt={article.title}/>
            <div className={n.cardBody}>
                <div className={n.header}>
                    <h1>{article.title}</h1>
                </div>
                <div className={n.text}>
                    <p>{article.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCase;