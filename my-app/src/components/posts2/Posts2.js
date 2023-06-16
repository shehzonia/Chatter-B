import React from 'react';
import './Posts2.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';  
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';  
import { useState } from 'react';      
  
const Posts2 = ( { post } ) => {   
       
  const [liked, setLiked] = useState(false);
  const [likedno, setLikedno] = useState(10);
   const [commentOpen, setcommentOpen] = useState(false);    
          
  //  if(likedno===1) {setLikedno(likedno+1)} else  {likedno - 1};     
        
        

  return (
    <>
    <div className='post'>
    <div className='container'>
    <div className='user'>
        <div className='userInfo'>
        <img src={post.img} alt=""/>
        <div className='details'>
        <Link to ={`/Profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
           <span className='name'>{post.name}</span>
        </Link>
        <span className='date'> 1 min ago</span>
        </div>  
        <MoreHorizOutlinedIcon />
        </div>
        

    </div>
    <div className='content'>
    <p>{post.desc}</p>
    <img src={post.img2} alt=""/>
    </div>

    <div className='info'>
      <div className='item' onClick={() =>  {      
         setLiked(!liked);        
         if(!liked)        
         {setLikedno(likedno+1);     
}          
         else {setLikedno(likedno-1);     
         }          
         
         
}       
        }>
        {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon /> }        
        {likedno}

        </div>
      <div className='item' onClick={()=> setcommentOpen(!commentOpen)}>
        <TextsmsIcon  />
        3 comments 
      </div>
      <div className='item'>
        <ShareIcon />
        Share
      </div>
    </div>       
    {commentOpen && <Comments />}
</div>
    </div>
   
    </>
  )
}
export default Posts2  