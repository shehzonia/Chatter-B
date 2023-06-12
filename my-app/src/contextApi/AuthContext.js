import { createContext,useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
 const [currentUser, setCurrentUser] = useState
 (JSON.parse(localStorage.getItem("user")) || null );

 const Login = () => { // take data from API 
 }
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser]);
    
    return (
        <AuthContext.Provider value={{currentUser,Login}}>
            {children}
        </AuthContext.Provider>
    )
}