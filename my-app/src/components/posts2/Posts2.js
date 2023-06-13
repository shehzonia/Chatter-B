import React from 'react';
import './Posts2.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
const Posts2 = ( { post } ) => { 
  return (
    <>
    <div className='post'>
    <div className='container'>
    <div className='user'>
        <div className='userInfo'>
        <img src={post.img} />
        <div className='details'>
        <Link to ={`/Profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
           <span>{post.name}</span>
           <span className='date'> 1 min ago</span>
        </Link>
        </div>
        </div>
        <MoreHorizOutlinedIcon />

    </div>
    <div className='content'>

    </div>
    <div className='info'>
    </div>       
    </div>
    </div>
    </>
  )
}
// {}
export default Posts2  