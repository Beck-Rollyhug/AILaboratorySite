import { useLocation, Navigate } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

async function check_uuid() {
    try {
        console.log('7-got-into-check_uuid');

        let response = await fetch("/api/check_uuid")
            .then(data => data.json())
            .then(data => {
                const location = useLocation();
                const {user} = useAuth();
                let check = data.status === 210;

                console.log('9-got-user');

                if(!user) {
                    console.log('10-checking-went-bad');
                    return <Navigate to='/login' state={{from: location}} />
                }
                if(!check) {
                    console.log('10-checking-went-bad');
                    return <Navigate to='/login' state={{from: location}} />
                }
                console.log('8-got-response');
                //console.log(data.status);
                //return data.status === 210;
            })
    } catch (e) {}
}

// Проверка авторизации для приватных страниц
// children - любая приватная страница
function RequireAuth ({children}) {
    console.log('6-got-into-require-auth');

    check_uuid();
    /*
    const location = useLocation();
    const {user} = useAuth();
    let check = check_uuid();

    console.log('9-got-user');

    if(!user) {
        console.log('10-checking-went-bad');
        return <Navigate to='/login' state={{from: location}} />
    }
    if(!check) {
        console.log('10-checking-went-bad');
        return <Navigate to='/login' state={{from: location}} />
    }
    */
    console.log('10-checking-ok');

    return children;
};

export {RequireAuth};