import Header from "./UI/LandingHeader/Header";
import Articles from "./UI/LandingArticles/Articles";
import Partners from "./UI/LandingPartners/Partners";
import Footer from "./UI/LandingFooter/Footer";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context";

const Landing = ({landing}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
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