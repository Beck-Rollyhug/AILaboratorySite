import React from 'react';
import {Route, Routes} from "react-router-dom";

import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Landing from "./pages/Landing";
import TechSupport from "./pages/TechSupport";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import ProfileEdit from "./pages/ProfileEdit";
import ProjectPage from "./pages/ProjectPage";


const AppRouter = () => {
    /*const {user} = useContext(Context);
    console.log(user);

    useEffect(() => {
        if(!localStorage.getItem('auth')) {
            user.setIsAuth(true)
        }
    }, [])*/
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

    return (
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/profile/:id' element={<Profile/>}/>
                <Route path='/profile/:id/edit' element={<ProfileEdit/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/project/:id' element={<ProjectPage/>}/>
                <Route path='/contact_us' element={<ContactUs/>}/>
                <Route path='/tech_support' element={<TechSupport/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reg' element={<Reg/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
    );
};

export default AppRouter;