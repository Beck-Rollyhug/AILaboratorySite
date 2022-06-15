import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //const [role, setRole] = useState(null);
    //const [haveProject, setHaveProject] = useState(false);

    const sign_in = (id, cb) => {
        console.log('4-got-into-sign-in');

        //const newRole = response.role_info;
        //setRole(newRole);

        setUser(id);
        console.log('5-set-newUser');
        cb();
    }
    const sign_out = (cb) => {
        setUser(null);
        //setRole(null);
        cb();
    }
    /*
    const addProject = () => {
        setHaveProject(true);
    }
    */

    const value = { user, sign_in, sign_out };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}