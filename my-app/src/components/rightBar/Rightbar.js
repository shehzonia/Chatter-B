import React from 'react';
import './Rightbar.scss';
import img1 from '../../assets/rightbar1.jpeg';
import img2 from '../../assets/rightbar2.jpeg';

const Rightbar = () => {
  return (
    <>
    <div className='rightbar'>

      <div className='container'>

      <div className='item'>
        <span>Suggestions for you</span>
        
        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <span> Brandon </span>
        <div className='buttons'>

      <button>Follow</button>
      <button>Dismiss</button>
      </div>
      </div>
        </div>

        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <span> Brandon</span>
        <div className='buttons'>

      <button>Follow</button>
      <button>Dismiss</button>
      </div>
      </div>
        </div>

      </div>

      <div className='item'>
        <span>Latest Activites</span>
        
        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <p><span> Brandon </span>changed their cover picture</p>
        </div>
        <span>1 min ago</span>
        </div>

        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <p><span> Brandon </span>changed their cover picture</p>
        </div>
        <span>1 min ago</span>
        </div>

        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <p><span> Brandon </span>changed their cover picture</p>
        </div>
        <span>1 min ago</span>
        </div>

      </div>

      <div className='item'>
        <span>Online Friends</span>
        
        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <div className='online' />
        <span> Brandon</span>
        </div>
        </div>

        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <div className='online' />
        <span> Brandon</span>
        </div>
        </div>

        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <div className='online' />
        <span> Brandon</span>
        </div>
        </div>

        <div className='User'>
        <div className='userInfo'>
        <img src={img2} alt='' />
        <div className='online' />
        <span> Brandon</span>
        </div>
        </div>

      </div>

      

    



      </div>
    </div>
    </>
  )
}

export default Rightbar