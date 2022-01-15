import React, {useContext, useEffect} from 'react';
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
import Robot from "../img/robot_original.jpg";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])


    const profile = {
        full_name: 'Иванов Иван Иванович',
        uni_name: 'УрФУ имени первого Президента России Б.Н.Ельцина',
        study_program: 'Программная Инженерия',
        study_year: '1',
        study_group: 'РИ-290034',
        email: 'email@mail.ru',
        phone_number: '+79123459999',
        other_contact: '@telegram_profile',
        projects: [
            {
                id: '2',
                title: 'Проект 2',
                description: 'Описание 2',
                manCountCurrent: '4',
                users_limit: '5',
                skills: [
                    'skill 1',
                    'skill 2'
                ]
            }
        ]
    }

    const projects = [
        {
            id: '1',
            title: 'Проект 1',
            description: 'Описание 1',
            manCountCurrent: '5',
            users_limit: '5',
            skills: [
                'skill 1',
                'skill 2',
                'skill 3'
            ]
        },
        {
            id: '2',
            title: 'Проект 2',
            description: 'Описание 2',
            manCountCurrent: '4',
            users_limit: '5',
            skills: [
                'skill 1',
                'skill 2'
            ]
        },
        {
            id: '3',
            title: 'Проект 3',
            description: 'Описание 3',
            manCountCurrent: '3',
            users_limit: '5',
            skills: [
                'skill 1'
            ]
        }
    ]

    const landing = {
        articles: [
            {
                id: 1,
                title: "Статья 1",
                text: "Описание 1",
                img: {Robot}
            },
            {
                id: 2,
                title: "Статья 2",
                text: "Описание 2",
                img: {Robot}
            },
            {
                id: 3,
                title: "Стятья 3",
                text: "Описание 3",
                img: {Robot}
            }
        ],
        partners: [
            'partner image source 1',
            'partner image source 2',
            'partner image source 3'
        ]
    }

    return (
        isAuth
            ?
            <div>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Landing landing={landing}/>}/>
                    <Route path='/profile' element={<Profile profile={profile}/>}/>
                    <Route path='/profile/edit' element={<ProfileEdit/>}/>
                    <Route path='/projects' element={<Projects projects={projects}/>}/>
                    <Route path='/projects/page' element={<ProjectPage/>}/>
                    <Route path='/contact_us' element={<ContactUs/>}/>
                    <Route path='/tech_support' element={<TechSupport/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
            :
            <Routes>
                <Route path='/' element={<Landing landing={landing}/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/reg' element={<Reg/>}/>
                <Route path='*' element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;