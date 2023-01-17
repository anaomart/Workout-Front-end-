import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
export const authReducer = (state , action )=> {
    switch (action.type) {
        case LOGIN : 
            return {user: action.payload}

        case LOGOUT :
            return {user : null }

        default: 
            return state ;
    }
}
export const AuthContextProvider = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user') )|| null;
    const [state , dispatch] = useReducer(authReducer, {user})
    console.log('authContext State ' , state )

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContext;
