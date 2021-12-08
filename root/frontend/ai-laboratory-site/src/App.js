import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./Components/landing";
import Login from "./Components/Login/login";
import Registration from "./Components/Registration/registration";
import Profile from "./Components/Profile/profile";
import SettingsProfile from "./Components/SettingsProfile/settingsProfile";
import PageOfProject from "./Components/PageOfProject/pageOfProject";
import ListOfProjects from "./Components/ListOfProjects/listOfProjects";
import ContactUs from "./Components/ContactUs/contactUs";
import TechSupport from "./Components/TechSupport/techSupport";


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
                  <Route path="/contactus" element={<ContactUs/>} />
                  <Route path="/techsupport" element={<TechSupport/>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
