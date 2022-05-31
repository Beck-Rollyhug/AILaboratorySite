import React from 'react';

import './ArticleCase.css'

const ArticleCase = ({article}) => {
    return (
        <div className={'card'}>
            {/*<img src={article.img} className={'cardImg'} alt={article.title}/>*/}
            <div className={'cardBody'}>
                <div className={'header'}>
                    <h1>{article.title}</h1>
                </div>
                <div className={'text'}>
                    <p>{article.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCase;