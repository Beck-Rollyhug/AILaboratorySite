import './App.css';
import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context";


function App () {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth: setIsAuth
        }}>
            <div className="App">
                <BrowserRouter>
                        <AppRouter/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
