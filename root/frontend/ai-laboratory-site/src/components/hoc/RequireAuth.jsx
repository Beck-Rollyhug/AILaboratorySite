import { useLocation, Navigate } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

// Проверка авторизации для приватных страниц
// children - любая приватная страница
const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();
    const {role} = useAuth();

    if(!user && !role) {
      return <Navigate to='/login' state={{from: location}} />
    }

    return children;
};

export {RequireAuth};