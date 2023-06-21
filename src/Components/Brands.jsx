import React from 'react'
import Prod3 from './Prod3.svg'
import './Brands.css';
import {Link} from 'react-router-dom'
const Brands = () => {
  return (
    <div className="Bback">
        <div className='Nav'>
        <div>
        <Link style={{textDecoration:'none'}} to="/Products">
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
            <Link  style={{textDecoration:'none'}}to="/Athe">
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
        <div className='Bword'> 
            <p>Whether you are a sports clothing/accessory brand, sports equipment brand or a brand that sponsors sports clubs/events - Sponsorlytix proprietary algorithms of a combined 10 different assets will provide the most accurate and rounded brand valuation of your brand’s sponsorships across different sports / leagues.</p>
        </div>
        <div >
            <img className='Bimg' src={Prod3} alt="" />
        </div>
    </div>
  )
}

export default Brands