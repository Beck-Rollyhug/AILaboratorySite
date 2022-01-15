import Header from "./_delete_later/Header/header";
import Information from "./_delete_later/Information/information";
import Partners from "./_delete_later/Partners/partners";
import Footer from "./_delete_later/Footer/footer";
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