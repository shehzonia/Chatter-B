import React from 'react';
import "./Home.scss";
import Stories from '../../components/stories/Stories';
import Post from '../../components/posts/Post';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <div className='Home'>
    <Stories />
    <Post />
    <Footer />
   </div>
  
    </>
  )
}

export default Home