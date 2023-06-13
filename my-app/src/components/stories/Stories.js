import React from 'react';
import './Stories.scss';
import Spencer from '../../assets/pexels.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../contextApi/AuthContext';

const Stories = () => {
    const { currentUser } = useContext(AuthContext);
    const TempStories = [
        {
            id: 1,
            name: "Hillary",
            img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        },
        {
            id: 2,
            name: "Alex Volkov",
            img: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=600",

        },
        {
            id: 3,
            name: "Kehl Viva",
            img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        },
        {
            id: 4,
            name: "Sarah Ali",
            img:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        },
        {
            id: 5,
            name: "Antonella ",
            img: "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        },
    ]
  return (
    <div className='Stories'>
         <div className='story'>
            <img src={Spencer} alt ="" />
            <span>{currentUser}</span>
            <button>+</button>
            </div>
        {TempStories.map(Story => (
            <div className='story' key={Story.id}>
            <img src={Story.img} alt ="" />
            <span >{Story.name}</span>
            </div>
         ))}</div>
  )
}

export default Stories