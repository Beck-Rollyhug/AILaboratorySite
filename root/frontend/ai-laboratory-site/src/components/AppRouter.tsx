import React from 'react';
import {Route, Routes} from "react-router-dom";

import LendingEditor from "./pages/private/admin/LendingEditor";
import AdminProfile from "./pages/private/admin/Profile";
import {ManageProjects} from "./pages/private/admin/manage_projects";
import UsersManager from "./pages/private/admin/UsersManager";
import GeneralSettings from "./pages/private/admin/GeneralSettings";
import AdminNavbar from './UI/admin_navbar/admin_navbar';

import {Login} from "./pages/public/login";
import {Reg} from "./pages/public/reg";
import {Landing} from "./pages/public/landing";

import {TechSupport} from "./pages/private/user/tech_support";
import {ContactUs} from "./pages/private/user/contact_us";
import {Projects} from "./pages/private/user/projects";
import {ProfileEdit} from "./pages/private/user/profile_edit";
import {Profile} from "./pages/private/user/profile";
import {Navbar} from "./UI/Navbar";

import NotFound from "./pages/system/NotFound";

import {AuthProvider} from "./hoc/AuthProvider";
import {RequireAuth} from "./hoc/RequireAuth";


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