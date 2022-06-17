//import {useContext} from "react";
import PostService from "../../../../api/UserService";
//import {useNavigate} from "react-router-dom";
import Robot from "../../../../img/robot_original.jpg";

import firstPic from "../../../styles/design/images/first.png";
import secondPic from "../../../styles/design/images/second.png";
import thirdPic from "../../../styles/design/images/third.png";
import partnerUrfu from "../../../styles/design/images/urfu.png"

import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {useAuth} from "../../../hooks/useAuth";
/*import {Context} from "../index";*/

import styles from './Landing.module.css'

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

const Landing = () => {
    /*const {user} = useContext(Context);*/
    //const navigate = useNavigate();

    const {user} = useAuth();

    const uuid = PostService.Check_uuid();
    if (uuid.status === 400)
    {
        /*user.setIsAuth(false);*/
        //navigate('/login')
    }
    /*
        <Link className="link" to="/user/:id/profile">Профиль</Link>
        <Link className="link" to="/login">Войти</Link>
        <Link className="link" to="/reg">Регистрация</Link>
        <h1>Is Login: {user.isAuth}</h1>
        <Header />
        <Articles articles={landing.articles}/>
        <Partners partners={landing.partners}/>
        <Footer />
    */
    return (
        <body className={styles.body}>
            <header className={styles.header}>
                <div className={styles.container_header}>
                    <div className={styles.headerInner}>
                        <nav>
                            {!user
                                ?
                                <div className={styles.auth}>
                                    <Link className={styles.link} to={'/login'}>Вход</Link>
                                    <Link className={styles.link} to={'/reg'}>Регистрация</Link>
                                </div>
                                :
                                <div className={styles.container_header}>
                                    <Link className={styles.link} to={'/user/:id/projects'}>Вернуться в портал</Link>
                                </div>
                            }
                            <div className={styles.container_header}>
                                <div className={styles.iisText}>
                                    <span>
                                        <h1>Интеллектуальные информационные системы</h1>
                                    </span>
                                </div>
                            </div>
                        </nav>
                        <div className={styles.headTitle}>
                            <p>
                                <span className={styles.titleHead}>
                                ( Хочу всё понять )
                                </span>
                            </p>
                            <p>
                                <span className={styles.titleText}>
                                    эта идея создаёт учёных
                                </span>
                            </p>
                        </div>
                        <div className={styles.headText}>
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
                <div className={styles.container}>
                    <div className={styles.doing}>
                        <h2 className='land'>ЧЕМ МЫ ЗАНИМАЕМСЯ?</h2>
                        {
                            landing.articles.map(article =>
                                <div>
                                    {article.id % 2 !== 0
                                        ? <div className={styles.doingItem}>
                                                <div className={styles.doingItemText}>
                                                    <div className={styles.doingItemTextInner}>
                                                        <h3 className={styles.land}>{article.title}</h3>
                                                        <p>{article.text}</p>
                                                    </div>
                                                </div>
                                                <div className={styles.doingItemImg}>
                                                    <img src={article.img} alt={article.title}/>
                                                </div>
                                            </div>
                                        : <div className={styles.doingItem}>
                                                <div className={styles.doingItemImg}>
                                                    <img src={article.img} alt={article.title}/>
                                                </div>
                                                <div className={styles.doingItemText}>
                                                    <div className={styles.doingItemTextInner}>
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
                    <div className={styles.partners}>
                        <h2>Партнёры</h2>
                        <div className={styles.partnersItem}>
                            <div><img src={partnerUrfu} alt="URFU"/></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className="footerInner">
                        <div className="footerLinks">
                            <p>Политика конфиденциальности</p>
                            <p>Договор оферты</p>
                        </div>
                        <div className={styles.footerData}>
                            <p>ИП Высоцкий Егор Владимирович</p>
                            <p>ОГРНИП 468245021954256</p>
                            <p>ИНН 375024057290</p>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
    )
}

export {Landing};