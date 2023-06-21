import React from 'react'
import "./HomePage.css";
import logo from "../utils/logo.svg";
import HomePageBanner from "../utils/HomePageBanner.svg";
import background from "../utils/HomePagebackground.svg";
import {AiOutlineMenu} from "react-icons/ai"
import {Link} from 'react-router-dom'
const HomePage = () => {

    


  return (
    <div className='outer' style={{backgroundImage:'url'+('${background}')}}>
        <div className='tabs'  style={{fontSize:'1.1rem',justifyContent:'space-between',gap:'1rem'}}>
            <Link style={{textDecoration:'none'}} to={"/soft"}>
            <div>Software</div>
            </Link>
            <Link style={{textDecoration:'none'}} to={"/Products"}>
            <div>Product</div>
            </Link>
            <div>AI</div>
            <div>Industry</div>
            <Link style={{textDecoration:'none'}} to={"/Features"}>
            <div>Features</div>
            </Link>
            <div>Case study</div>
            <div>
                <button className='resb'>Reaquest Demo</button>
                </div>
            <div>
                <button className='clie'>
                Client Login
                </button></div>
            
        </div>
        <div className='menu'><AiOutlineMenu/></div>
        <div className='Logo'>
           <div>
            <img src={logo} alt="" />
           </div>
        </div>
        <div className='Banners'> 
        <div className="bannerTeaxt">
            <div className='firstText'>
                <h3>AI-Powered Sports
Sponsorship Analytics</h3>
            </div >
            <div className='secondtext'>
            <div  style={{marginTop:'10rem'}}>
                <p>Near real-time analytical & valuation platform</p>
            </div>
            <div >
                <button className="butt">Request Demo</button>
            </div>
            </div>
        </div>
        <div className='Homepagebanner'>
           <img src={HomePageBanner} alt="" />
        </div>
        </div>
    </div>
  )
}

export default HomePage