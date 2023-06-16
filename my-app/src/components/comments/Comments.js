import React from 'react';
import './Comments.scss';
import Spencer from '../../assets/pexels.jpg';

const Comments = () => {
const Comms = [
    {
        id:1,
        name:"Hillary",
        userId:2,
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        
    },
    {
        id:2,
        name:"Alex Volkov",
        userId:3,
        img:"https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/3991321/pexels-photo-3991321.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        id:3,
        userId:4,
        name:"Kehl Viva",
        img:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        
    }
]
  return (
    <>
     <div className='comments'>
        <div className='write'>
         <img src={Spencer} alt='' />
        <input type='text' placeholder='Write comments ..' />         
         <button>Send</button>
        </div>
        {Comms.map(comment => (<div className='comment'>  
         
          <img src={comment.img} alt='' />  
         <div className='info'>  
         <span className='name'>{comment.name}</span>
          <p>{comment.desc}</p> 
         
           
         
         </div>
         <span className='date'>1 hour ago</span>
         
         
         
         
       
         
        </div>) )}
     </div>
    </>
   
  )
}
// {}
export default Comments  