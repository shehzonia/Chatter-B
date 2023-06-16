import React from 'react';
import "./Home.scss";
import Stories from '../../components/stories/Stories';
import Post from '../../components/posts/Post';

const Home = () => {
  return (
    <>
    <div className='Home'>
    <Stories />
    <Post />
   </div>
  
    </>
  )
}

export default Home