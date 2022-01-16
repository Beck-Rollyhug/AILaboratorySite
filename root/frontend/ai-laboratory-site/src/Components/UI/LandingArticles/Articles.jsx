import React from 'react';
import {Link} from "react-router-dom";

import ArticleCase from "./ArticleCase/ArticleCase";

const Articles = ({articles}) => {
    return (
        <div className={'color'}>
            <section id="section02" className={'information'}>
                <div className={'container'}>
                    <div className={'directions'}>
                        <h1>Чем мы занимаемся?</h1>
                        <ul className={'activity'}>
                            {articles.map((article) =>
                                <ArticleCase article={article} key={article.id}/>
                            )}
                        </ul>
                        <div className={'btn'}><Link to="/projects">Подробнее</Link></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Articles;