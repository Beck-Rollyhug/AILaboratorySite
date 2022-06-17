import React from 'react';
import Landing from "../../public/landing/Landing";
import {Link} from "react-router-dom";
import partnerUrfu from "../../../styles/design/images/urfu.png";
import firstPic from "../../../styles/design/images/first.png";
import secondPic from "../../../styles/design/images/second.png";
import thirdPic from "../../../styles/design/images/third.png";

const landing = {
    articles: [
        {
            id: 1,
            title: "Статья 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae blanditiis nobis et libero ab voluptatum quia veritatis fugiat eveniet, harum dolorum quisomnis, accusamus autem qui. Reprehenderit, dignissimos molestiae.",
            img: firstPic
        },
        {
            id: 2,
            title: "Статья 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae blanditiis nobis et libero ab voluptatum quia veritatis fugiat eveniet, harum dolorum quisomnis, accusamus autem qui. Reprehenderit, dignissimos molestiae.",
            img: secondPic
        },
        {
            id: 3,
            title: "Стятья 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae blanditiis nobis et libero ab voluptatum quia veritatis fugiat eveniet, harum dolorum quisomnis, accusamus autem qui. Reprehenderit, dignissimos molestiae.",
            img: thirdPic
        },
        {
            id: 4,
            title: "Стятья 4",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae blanditiis nobis et libero ab voluptatum quia veritatis fugiat eveniet, harum dolorum quisomnis, accusamus autem qui. Reprehenderit, dignissimos molestiae.",
            img: secondPic
        }
    ],
    partners: [
        {
            id: 1,
            name: 'Urfu',
            sourceImg: {partnerUrfu}
        }
    ]
}

const LendingEditor = () => {
    return (
        <body className={'landing'}>
        <header>
            <div className="container">
                <div className="headerInner">
                    <div className={'flexContainer-land'}>
                        <div className="iisText">
                            <span className="iisSpan"><h1>Интеллектуальные информационные системы</h1></span>
                        </div>
                    </div>
                    <div className="headTitle">
                        <p><span className="titleHead">( Хочу всё понять )</span></p>
                        <p><span className="titleText">эта идея создаёт учёных</span></p>
                    </div>
                    <div className="headText">
                        <p>
                            ИИС приглашает волонтёров и студентов
                            в свои проекты, с применением
                            искусственного интеллекта
                            в исследовании нашей жизни.
                        </p>
                    </div>

                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="doing">
                    <h2 className='land'>ЧЕМ МЫ ЗАНИМАЕМСЯ?</h2>
                    {
                        landing.articles.map(article =>
                            <div>
                                {article.id % 2 !== 0
                                    ? <div className="doingItem ed">
                                        <div className="doingItemText">
                                            <div className="doingItemTextInner">
                                                <h3 className={'land'}>{article.title}</h3>
                                                <p>{article.text}</p>
                                            </div>
                                        </div>
                                        <div className="doingItemImg">
                                            <img src={article.img} alt={article.title}/>
                                        </div>
                                    </div>
                                    : <div className="doingItem">
                                        <div className="doingItemImg">
                                            <img src={article.img} alt={article.title}/>
                                        </div>
                                        <div className="doingItemText">
                                            <div className="doingItemTextInner">
                                                <h3>{article.title}</h3>
                                                <p>{article.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
                <div className="partners">
                    <h2>НАШ ПАРТНЕР</h2>
                    <div className="partnersItem">
                        <div className="partnersImg"><img src={partnerUrfu} alt="URFU"/></div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="container">
                <div className="footerInner">
                    <div className="footerLinks">
                        <p>Политика конфиденциальности</p>
                        <p>Договор оферты</p>
                    </div>
                    <div className="footerData">
                        <p>ИП Высоцкий Егор Владимирович</p>
                        <p>ОГРНИП 468245021954256</p>
                        <p>ИНН 375024057290</p>
                    </div>
                </div>
            </div>
        </footer>
        </body>
    );
};

export default LendingEditor;