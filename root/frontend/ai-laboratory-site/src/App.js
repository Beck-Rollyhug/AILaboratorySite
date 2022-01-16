import './App.css';
import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context";


function App () {
    const [isAuth, setIsAuth] = useState(false);
    const [userID, setUserID] = useState(-1);
    return (
        <AuthContext.Provider value={
            [
                {
                    isAuth: isAuth,
                    setIsAuth: setIsAuth,
                    userID: userID,
                    setUserID: setUserID
                }
            ]
        }>
            <div className="App">
                <BrowserRouter>
                        <AppRouter/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
