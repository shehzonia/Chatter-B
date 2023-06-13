import React from 'react';
import "./Login.scss";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contextApi/AuthContext';
import { useContext } from "react";

const Login = () => {
  const {login1} = useContext(AuthContext);
  function handleLogin(){
    login1();
  }
  return (
    <>
       <div className='login'>
      <div className='card'>
      <div className='left'>
        <h1>Hello World!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,          
        </p>
        <span>Don't have a account?</span>
        <Link to="/Register">
        <button>Register</button>
        </Link>

        
        
      </div>

      <div className='right'>
        <h2>Login</h2>
        <form>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>


      </div>

     </div>

    </>
   
  )
}

export default Login