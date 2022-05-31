//import Login from "../Login/login.jsx";
//import Reg from "../Registration/reg.jsx";
import Profile from "../Profile";
import Projects from "../Projects";
import NotFound from "../NotFound";

export const routes = [
    {path: '/', component: Profile, exact: true},
    //{path: '/login', component: Login, exact: true},
    //{path: '/reg', component: Reg, exact: true},
    {path: '/profile/', component: Profile, exact: true},
    {path: '/projects/', component: Projects, exact: true},
    {path: '*', component: NotFound, exact: true},
]