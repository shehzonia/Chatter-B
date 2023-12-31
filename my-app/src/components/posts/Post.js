import React from 'react'; 
import './Post.scss';
import Posts2 from '../posts2/Posts2.js';
const Post = () => {

  const TempPosts = [
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
        
    },
    {
        id:4,
        userId:5,
        name:"Sarah Ali",
        img:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/3599576/pexels-photo-3599576.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        
    },
    {
        id: 5,
        userId:6,
        name:"Antonella ",
        img: "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        
    },
]
  return (
    <>
     <div className='Posts'>
      {TempPosts.map(post=>{return <Posts2 post={post} key ={post.id} />})}
     </div>
    </>
   
  )
}

export default Post