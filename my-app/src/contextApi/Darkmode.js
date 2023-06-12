import { createContext,useEffect, useState } from "react";

export const DarkmodeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
 const [darkMode, setdarkMode] = useState
 (JSON.parse(localStorage.getItem("darkMode")) || false);

 const Toggle = () => {
    setdarkMode(!darkMode);
 }
    useEffect(() => {
        localStorage.setItem("darkMode",darkMode)
    }, [darkMode]);
    
    return (
        <DarkmodeContext.Provider value={{darkMode,Toggle}}>
            {children}
        </DarkmodeContext.Provider>
    )
}