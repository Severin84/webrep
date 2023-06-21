import React from 'react'
import './Media.css';
import Prod6 from './Prod6.svg'
import {Link} from 'react-router-dom'
const Media = () => {
  return (
    <div className='mback'>
                <div className='Nav'>
        <div>
        <Link style={{textDecoration:'none'}} to="/Products">
          <h2>Sports Club</h2>
          </Link>  
        </div>
        <div>
         <Link  style={{textDecoration:'none'}} to="/FA">
          <h2>Federations
           Associations
          </h2>  
          </Link>
        </div>
        <div>
         <Link style={{textDecoration:'none'}} to="/Brands">
          <h2>Brands</h2>  
          </Link>
        </div>
        <div>
            <Link style={{textDecoration:'none'}} to="/Athe">
          <h2>Athletes</h2> 
          </Link> 
        </div>
        <div>
          <Link style={{textDecoration:'none'}} to="/Es">
          <h2>E-Sports</h2> 
          </Link> 
        </div>
        <div>
          <Link style={{textDecoration:'none'}} to="/md">
          <h2>Media Publishers</h2>  
          </Link>
        </div>
      </div>
        <div className='mimg'>
          <img className='mdimg' src={Prod6} alt="" />
        </div>
        <div className='mword'>
            <p>News outlets, publishers, broadcasters & OTT, content creators and rights holders can create compelling content experiences, drive fan engagement through insight-driven storytelling across all forms of media by using our AI-Powered sports sponsorship data and analytics. Broadcast Media personalities, news outlets and in-venue teams can access detailed team and athletes sponsorship data for editorial, broadcast and social media engagement.</p>
        </div>
    </div>
  )
}

export default Media