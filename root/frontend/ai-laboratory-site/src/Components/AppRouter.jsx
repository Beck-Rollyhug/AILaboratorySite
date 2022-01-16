import React, {useContext, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Login from "./Login";
import Reg from "./Reg";
import Landing from "./Landing";
import TechSupport from "./TechSupport";
import ContactUs from "./ContactUs";
import Projects from "./Projects";
import ProfileEdit from "./ProfileEdit";
import ProjectPage from "./ProjectPage";
import Navbar from "./UI/Navbar/Navbar";
import {AuthContext} from "../context";


const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {user_id, setUserId} = useState();

    let getUserId = (value) =>
    {
        setUserId(value);
    }

    /*console.log(isAuth)*/

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsAuth(false)
    }, [])

    return (
        isAuth
            ?
            <div>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Landing userId={user_id}/>}/>
                    <Route path='/profile' element={<Profile userId={user_id}/>}/>
                    <Route path='/profile/edit' element={<ProfileEdit userId={user_id}/>}/>
                    <Route path='/projects' element={<Projects userId={user_id}/>}/>
                    <Route path='/projects/page' element={<ProjectPage userId={user_id}/>}/>
                    <Route path='/contact_us' element={<ContactUs userId={user_id}/>}/>
                    <Route path='/tech_support' element={<TechSupport userId={user_id}/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
            :
            <Routes>
                <Route path='/' element={<Landing userId={user_id}/>}/>
                <Route path='/login' element={<Login getUserId={getUserId}/>}/>
                <Route path='/reg' element={<Reg getUserId={getUserId}/>}/>
                <Route path='*' element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;