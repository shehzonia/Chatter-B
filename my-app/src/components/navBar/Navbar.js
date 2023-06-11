import React from 'react';
import './Navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <div className='leftN'>
      <Link to="/" style={{textDecoration:"none"}}>
      <span>Chatter</span>
      </Link>
      <HomeOutlinedIcon />
      <DarkModeOutlinedIcon />
      <AppsOutlinedIcon />
      <div className='search'>
      <SearchOutlinedIcon />
      <input type='text' placeholder='Search here' />
      </div>

    </div>
    <div className='right'>
      <Person2OutlinedIcon />
      <EmailOutlinedIcon />
      <div className='User'>
      <AccountCircleOutlinedIcon />
      <span>John Doe</span>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Navbar