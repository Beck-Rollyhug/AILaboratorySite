/*import './App.css';*/
import React from "react";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Information from "./Components/Information/information";
import Partners from "./Components/Partners/partners";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./Components/landing";
import Login from "./Components/Login/login";
import Registration from "./Components/Registration/registration";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
