import React from 'react'
import './Es.css';
import Prod5 from './Prod5.svg';
import {Link} from 'react-router-dom'
const Es = () => {
  return (
    <div className='eback'>
    <div className='Nav'>
        <div>
        <Link  style={{textDecoration:'none'}} to="/Products">
          <h2>Sports Club</h2>
          </Link>  
        </div>
        <div>
         <Link style={{textDecoration:'none'}} to="/FA">
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
        <div >
            <img className='eimg' src={Prod5} alt="" />
        </div>
        <div className='eword'>
            <p>Whether you are a gamer who live streams or a sports club that wants to measure the value of your sponsors in esports or if you are an e-sports tournament - Sponsorlytix measures the brand value of sponsors through online game streaming from three of the major platforms: Twitch, Youtube Gaming and PC Gaming.</p>
        </div>
    </div>
  )
}

export default Es