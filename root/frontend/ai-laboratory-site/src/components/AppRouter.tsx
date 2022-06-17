import React from 'react';
import {Route, Routes} from "react-router-dom";

import AdminProfile from "./pages/private/admin/Profile";
import NotFound from "./pages/system/NotFound";
import Login from "./pages/public/Login";
import Reg from "./pages/public/Reg";
import Landing from "./pages/public/Landing";
import TechSupport from "./pages/private/user/TechSupport";
import ContactUs from "./pages/private/user/ContactUs";
import {Projects} from "./pages/private/user/projects";
import {ProfileEdit} from "./pages/private/user/profile_edit";
import ProjectPage from "./pages/private/user/ProjectPage";
import ManageProjects from "./pages/private/admin/ManageProjects";
import UsersManager from "./pages/private/admin/UsersManager";
import {Profile} from "./pages/private/user/profile";
import GeneralSettings from "./pages/private/admin/GeneralSettings";
import {RequireAuth} from "./hoc/RequireAuth";
import {Navbar} from "./UI/Navbar";
import {AuthProvider} from "./hoc/AuthProvider";
import AdminNavbar from './UI/admin_navbar/admin_navbar'
import LendingEditor from "./pages/private/admin/LendingEditor";


const AppRouter = () => {
    /*const {user} = useContext(Context);
    console.log(user);

    useEffect(() => {
        if(!localStorage.getItem('auth')) {
            user.setIsAuth(true)
        }
    }, [])*/

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reg' element={<Reg/>}/>
                <Route path='user/:id'>
                    <Route path='profile' element={
                        <RequireAuth>
                            <Navbar/>
                            <Profile/>
                        </RequireAuth>
                    }/>
                    <Route path='profile_edit' element={
                        <RequireAuth>
                            <Navbar/>
                            <ProfileEdit/>
                        </RequireAuth>
                        }/>
                    <Route path='projects' element={
                        <RequireAuth>
                            <Navbar/>
                            <Projects/>
                        </RequireAuth>
                        }/>
                    <Route path='project/:project_id' element={
                        <RequireAuth>
                            <Navbar/>
                            <ProjectPage/>
                        </RequireAuth>
                    }/>
                    <Route path='contact_us' element={
                        <RequireAuth>
                            <Navbar/>
                            <ContactUs/>
                        </RequireAuth>
                        }/>
                    <Route path='tech_support' element={
                        <RequireAuth>
                            <Navbar/>
                            <TechSupport/>
                        </RequireAuth>
                        }/>
                </Route>
                <Route path={'/admin/:id'}>
                    <Route path='landing_settings' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <LendingEditor/>
                        </RequireAuth>
                    }/>
                    <Route path='users_manager' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <UsersManager/>
                        </RequireAuth>
                    }/>
                    <Route path='projects_manager' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <ManageProjects/>
                        </RequireAuth>}
                    />
                    <Route path='project_page/:project_id' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <ManageProjects/>
                        </RequireAuth>
                        }/>
                    <Route path='project_editor/:project_id' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <ManageProjects/>
                        </RequireAuth>
                        }/>
                    <Route path='project_creator' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <ManageProjects/>
                        </RequireAuth>
                        }/>
                    <Route path='profile' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <AdminProfile/>
                        </RequireAuth>
                        }/>
                    <Route path='general_settings' element={
                        <RequireAuth>
                            <AdminNavbar/>
                            <GeneralSettings/>
                        </RequireAuth>
                        }/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </AuthProvider>
    );
};

export default AppRouter;