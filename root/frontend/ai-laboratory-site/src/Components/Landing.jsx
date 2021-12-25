import Header from "./Header/header";
import Information from "./Information/information";
import Partners from "./Partners/partners";
import Footer from "./Footer/footer";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context";

const Landing = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div>
            <Header />
            <h1>Is Auth: {isAuth}</h1>
            <Information />
            <Partners />
            <Footer />
        </div>
    )
}

export default Landing;