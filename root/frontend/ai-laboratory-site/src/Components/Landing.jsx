import Header from "./UI/LandingHeader/Header";
import Articles from "./UI/LandingArticles/Articles";
import Partners from "./UI/LandingPartners/Partners";
import Footer from "./UI/LandingFooter/Footer";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context";
import PostService from "../api/UserService";
import {useNavigate} from "react-router-dom";
import Robot from "../img/robot_original.jpg";

const landing = {
    articles: [
        {
            id: 1,
            title: "Статья 1",
            text: "Описание 1",
            img: {Robot}
        },
        {
            id: 2,
            title: "Статья 2",
            text: "Описание 2",
            img: {Robot}
        },
        {
            id: 3,
            title: "Стятья 3",
            text: "Описание 3",
            img: {Robot}
        }
    ],
    partners: [
        'partner image source 1',
        'partner image source 2',
        'partner image source 3'
    ]
}

const Landing = ({userId}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();

    const uuid = PostService.Check_uuid();
    if (uuid.status === 400)
    {
        setIsAuth(false);
        navigate('/login')
    }

    return (
        <div>
            <h1>Is Auth: {isAuth}</h1>
            <Header />
            <Articles articles={landing.articles}/>
            <Partners partners={landing.partners}/>
            <Footer />
        </div>
    )
}

export default Landing;