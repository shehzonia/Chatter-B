import React from 'react';
import './Leftbar.scss';
import Ac from "../../assets/ac.png";
import Friends from '../../assets/fr.png';
import Group from '../../assets/gr.png';
import Mm from '../../assets/mm.png';
import Vd from '../../assets/video.png';
import RL from '../../assets/Rl.png';
import Courses from '../../assets/Co.png';
import Tut from '../../assets/tut.png';
import Ev from '../../assets/Ev.png';
import gall from '../../assets/gall.png';
import fund from '../../assets/fund.png';
import games from '../../assets/games.png';
import Mess from '../../assets/message.png';


const Leftbar = () => {
  return (
      <>
      <div className="leftbar">
        <div className="container">
          <div className='Menu'>

          <div className='item1'>
          <img src={Ac} alt='' />
          <span>John Doe</span>
          </div>

          <div className='item'>
          <img src={Friends} alt='' />
          <span>Friends</span>
          </div>

          <div className='item'>
          <img src={Group} alt='' />
          <span>Groups</span>
          </div>

          <div className='item'>
          <img src={Mm} alt='' />
          <span>Marketplace</span>
          </div>

          <div className='item'>
          <img src={Vd} alt='' />
          <span>Watch</span>
          </div>

          <div className='item'>
          <img src={RL} alt='' />
          <span>Memories</span>
          </div>
          </div>

          <hr />
         

          <div className="Menu">
            <span>Your Shortcuts</span>
          <div className='item'>
          <img src={Ev} alt='' />
          <span>Events</span>
          </div>

          <div className='item'>
          <img src={games} alt='' />
          <span>Gaming</span>
          </div>

          <div className='item'>
          <img src={gall} alt='' />
          <span>Gallery</span>
          </div>

          <div className='item'>
          <img src={Vd} alt='' />
          <span>Videos</span>
          </div>

          <div className='item'>
          <img src={Mess} alt='' />
          <span>Messages</span>
          </div>
          </div>
          <hr />

           <div className="Menu">
            <span>Others</span>
          <div className='item'>
          <img src={fund} alt='' />
          <span>Fundraisers</span>
          </div>

          <div className='item'>
          <img src={Courses} alt='' />
          <span>Courses</span>
          </div>

          <div className='item'>
          <img src={Tut} alt='' />
          <span>Tutorials</span>
          </div>
          </div>


        </div>


      </div>
    
    </>
  )
}

export default Leftbar