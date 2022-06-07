import { createContext, useState} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const sign_in = (newUser, cb) => {
        setUser(newUser);
        cb();
    }
    const sign_out = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, sign_in, sign_out};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}