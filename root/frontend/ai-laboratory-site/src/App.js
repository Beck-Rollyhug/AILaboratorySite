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
import Profile from "./Components/Profile/profile";
import SettingsProfile from "./Components/SettingsProfile/settingsProfile";
import PageOfProject from "./Components/PageOfProject/pageOfProject";
import ListOfProjects from "./Components/ListOfProjects/listOfProjects";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settingsProfile" element={<SettingsProfile/>} />
                  <Route path="/pageOfProject" element={<PageOfProject/>} />
                  <Route path="/listOfProjects" element={<ListOfProjects/>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
function App (props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/*<Route path="/" element={<Landing />} />*/}
                    <Route path="/login" element={<Login />} />
                    <Route path="/reg" element={<Reg />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
