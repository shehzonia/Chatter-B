import React from 'react';
import "./Register.scss";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <div className='Register'>
   <div className='card'>
   <div className='left'>
     <h1>Chatter Box </h1>
     <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,          
     </p>
     <span>Do you have a account?</span>
     <Link to="/Login">
        <button>Login</button>
        </Link>
     
     
   </div>

   <div className='right'>
     <h2>Register </h2>
     <form>
       <input type='text' placeholder='Username' />
       <input type='email' placeholder='Email' />
       <input type='password' placeholder='Password' />
       <input type='text' placeholder='Name' />

       <button>Register</button>
     </form>
   </div>


   </div>

  </div>

 </>
  )
}

export default Register