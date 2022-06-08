import { createContext, useState} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    const sign_in = (newUser, newRole, cb) => {
        setUser(newUser);
        setRole(newRole)
        cb();
    }
    const sign_out = (cb) => {
        setUser(null);
        setRole(null);
        cb();
    }

    const value = {user, role, sign_in, sign_out};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}