import React, {useContext} from 'react';
import {AuthContext} from "../hoc/AuthProvider";

// Позволяет удобнее использовать элементы из AuthProvider
export function useAuth() {
    return useContext(AuthContext);
}