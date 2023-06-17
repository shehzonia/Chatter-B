import { createContext,  useEffect , useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState
    ( JSON.parse(localStorage.getItem("user")) || "John Doe");
  
    const login1 = () => {
        
      setCurrentUser({
        id: 1,
        name: "John Doe",
        // img: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=600",
      });
    };
  
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser));
    //   localStorage.setItem("profilePic",JSON.parse)
    }, [currentUser]);
    console.log(currentUser);
  
    return (
      <AuthContext.Provider value={{ currentUser, login1 }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

