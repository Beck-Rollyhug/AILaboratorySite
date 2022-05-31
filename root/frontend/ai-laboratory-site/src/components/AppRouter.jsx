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
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    /*const {user} = useContext(Context);*/
    /*console.log(user);*/

    /*useEffect(() => {
        if(!localStorage.getItem('auth')) {
            user.setIsAuth(true)
        }
    }, [])*/

    return (
            <div>

                {/*user.isAuth
                ?
                <div>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Landing/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/profile/edit' element={<ProfileEdit/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route path='/projects/page' element={<ProjectPage/>}/>
                        <Route path='/contact_us' element={<ContactUs/>}/>
                        <Route path='/tech_support' element={<TechSupport/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
                :
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/reg' element={<Reg/>}/>
                    <Route path='*' element={<Login/>}/>
                </Routes>*/}

                <Navbar/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/profile/edit' element={<ProfileEdit/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/projects/page' element={<ProjectPage/>}/>
                    <Route path='/contact_us' element={<ContactUs/>}/>
                    <Route path='/tech_support' element={<TechSupport/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/reg' element={<Reg/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
    );
});

export default AppRouter;