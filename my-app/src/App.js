import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,Navigate,Outlet,RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from './components/navBar/Navbar';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile'
import './style.scss';
import { useContext } from 'react';
import { DarkmodeContext } from './contextApi/Darkmode';
import { AuthContext } from './contextApi/AuthContext';

function App() {
  
const {currentUser} = useContext(AuthContext);
const {darkMode} = useContext(DarkmodeContext);
  const Layout = () => {
    return ( 
    <>
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
        <div style={{ display:"flex"}}>
        <Leftbar />
        <div style={{ flex : 6}}>
        <Outlet />
        </div>
        <Rightbar/>
      </div>
      </div>
      </>
      )
  }

  const ProtectedRoute = ({children}) => {
   if(!currentUser){
    return <Navigate to="/Login" />;
   }
   return children
  };

  const routes = [
    {
      path: "/",
      element:
      <ProtectedRoute>
      <Layout />
      </ProtectedRoute> 
      ,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
