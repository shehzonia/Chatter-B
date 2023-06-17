import React from 'react';
import "./Profile.scss";
import FacebookIcon from '@mui/icons-material/Facebook';         
import LinkedInIcon from '@mui/icons-material/LinkedIn';                  
import InstagramIcon from '@mui/icons-material/Instagram';                  
import TwitterIcon from '@mui/icons-material/Twitter';                  
import PinterestIcon from '@mui/icons-material/Pinterest';                  
import PlaceIcon from '@mui/icons-material/Place';                 
import LanguageIcon from '@mui/icons-material/Language';                  
import EmailIcon from '@mui/icons-material/Email';                  
import MoreVertIcon from '@mui/icons-material/MoreVert';                  
import Post from '../../components/posts/Post';     
import Footer from '../../components/Footer/Footer';                       
// {}               
                  
         
const Profile = () => {
  return (                  
      <>                  
              
      <div className='profile'>                  
      <div className='images'>             
      <img src='https://images.pexels.com/photos/4993220/pexels-photo-4993220.jpeg?auto=compress&cs=tinysrgb&w=600'  alt = '' className='cover' />                      
      <img src='https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=600' alt = '' className='profilePic' /> 
                     
      </div>               
      <div className='profContain' >
      <div className='uInfo' >
      <div className='left' >
        <a href='https://www.facebook.com/'> <FacebookIcon fontSize='medium' /></a>
        <a href='https://www.instagram.com/'> <InstagramIcon fontSize='medium' /> </a>
        <a href='https://www.twitter.com/'> <TwitterIcon fontSize='medium' /> </a>
        <a href='https://www.linkedin.com/'> <LinkedInIcon fontSize='medium' /> </a>
        <a href='https://www.pinterest.com/'> <PinterestIcon fontSize='medium' /> </a>
        </div>  
        <div className='center'>
          <span>Jane Doe</span>
          <div className='info'>
            <div className='item'>
              <PlaceIcon />
              <span>USA</span>
            </div>
            <div className='item'>
              <LanguageIcon />
              <span>Sheh</span>
            </div>
          </div>
          <button>Follow</button>
        </div>
        <div className='right'>
        <EmailIcon />
        <MoreVertIcon />
        </div>     
        
     </div>       
     <Post />    <Footer />     
     </div>                        
      </div>           
                  
                  
       
                  
                  
             
      </>            
                  
                  
                  
                  
                  // .center{                  
      
 
                  // }                 
                  
                  
      
    
  )
}

export default Profile