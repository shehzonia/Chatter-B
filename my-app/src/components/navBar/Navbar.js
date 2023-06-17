import React from 'react';
import './Navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkmodeContext } from '../../contextApi/Darkmode';
import { AuthContext } from '../../contextApi/AuthContext';

const Navbar = () => {
  const { Toggle, darkMode } = useContext(DarkmodeContext);
  const { currentUser } = useContext(AuthContext);
   return (
    <>
    <div className='navbar'>
    <div className='leftN'>
      <Link to="/" style={{textDecoration:"none"}}>
      <span>Chatter</span>
      </Link>
      <div>
      <Link to="/home" className='links'>
      <HomeOutlinedIcon />
      </Link>
      </div>
      {darkMode ? <Brightness5OutlinedIcon  onClick={Toggle} style={{cursor:"pointer"}} /> : <DarkModeOutlinedIcon onClick={Toggle} style={{cursor:"pointer"}} />}    
      <AppsOutlinedIcon />
      <div className='search'>
      <SearchOutlinedIcon />
      <input type='text' placeholder='Search here' />
      </div>

    </div>
    <div className='right'>
      <div>
      <Link to= "/Profile/:id" className='links'>
      <Person2OutlinedIcon />
      </Link>
      </div>
      <EmailOutlinedIcon />
      <div className='User'>
      <AccountCircleOutlinedIcon />
      {currentUser && currentUser ? (
              <span>{currentUser}</span>
            ) : (
              <span>Guest</span>
            )}
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Navbar