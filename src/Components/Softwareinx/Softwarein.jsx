import React,{useState} from 'react';
import soft1 from "./soft1.svg"
import soft2 from "./soft2.svg"
import soft3 from "./soft3.svg"
import soft4 from "./soft4.svg"
import soft5 from "./soft5.svg"
import soft6 from "./soft6.svg"
import soft7 from "./soft7.svg"
import soft8 from "./soft8.svg"
import soft9 from "./soft9.svg"
import soft10 from "./soft10.svg"
import ImageSlider from '../ImageSlider';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import './soft1.css'
const rightArrowStyles={
    position: "absolute",
  top: "98%",
  transform: "translate(0, -50%)",
  right: "15rem",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
}

const leftArrowStyles={
    position: "absolute",
  top: "98%",
  transform: "translate(0, -50%)",
  left: "60rem",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
}

const dotsContainerStyles = {
    // display: "flex",
    // flexDirection:"vertical",
    justifyContent: "center",

  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "1rem",
    // marginTop:"17rem"
 };

  const slideStyles={
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
const Softwarein = () => {
   
    //console.log(soft7)



    const slidess=[
        // // ["soft1","soft2","soft3"],
        [
            {text:"Sponsorlytix utilizes a set of AI & Machine Learning techniques that quickly build, train and deploys sponsorship analytics models at scale. Providing sports clubs, federations/associations, sports brands, athletes, e-sports and rights holders sponsorship brand valuations in near-realtime.",
             img:"/static/media/soft1.188419ea7a7431949594d148cf15481e.svg",
             title:'1. Artificial Intelligence'
            }
        ],

        [
            {text:"Our computer vision and logo detection technology automatically detects and measures sponsors’ brand values whether it is on linear broadcast, OTT, Social Media, LED boards, shirts, gaming or marquee signage.",
            img:"/static/media/soft2.865c2dd57f4c0197cf53b427afad09ea.svg",
            title:'2. Computer Vision'
           }
        ],

        [
            {text:"Sponsorlytix’s proprietary algorithms of a combined 10 different assets, provides the most accurate and rounded brand valuation of sports sponsors.",
            img:"/static/media/soft3.de5e945ac4542bd9f5192cf6f2bb1d96.svg",
            title:'3. Proprietary Algorithms'
           }
        ],
        
        [
            {text:"Our proprietary software and platforms can programmatically collect and evaluate brand values in near-realtime using AI, Machine Learning, Computer Vision and Logo Detection technologies.",
            img:"/static/media/soft4.28a35121de8a6f59da6aae3432f16f98.svg",
            title:'4. Near-Realtime Measurement'
           }
        ],

        [
            {text:"Sponsorlytix’s dashboard provides the most in-depth and detailed analytics of every single social media post (official & fan posts), broadcast, news media and more with near-realtime data and insights.",
            img:"/static/media/soft5.5cfb4713f76750eeb24db1b8036a34c1.svg",
            title:'5. In-depth Analytics'
           }
        ],

        [
            {text:"Generate customised and detailed reports with key metrics relating to a single sponsor and placement or all sponsors in a single or multiple asset. With a click on a button, reports can be downloaded in PDF or XL.",
            img:"/static/media/soft6.000d0b39c36440366d96017a594ec917.svg",
            title:'6. Customized Reports'
           }
        ],

        [
            {text:"With a flexible pricing strategy, Sponsorlytix is the most cost effective sports sponsorship analytics software in the market. Our vision is to create economic opportunity for every sports club, brand, governing body or event, at any level of the game through the power of intelligent sponsorship analytics. ",
            img:"/static/media/soft7.bcad649d2c421fb6855642eb20499eff.svg",
            title:'7. Cost Effective'
           }
        ],

        [
            {text:"Sponsorlytix’s proprietary algorithms will be explained in detail to the clients, providing a total transparency in our brand valuation and analytics methodology and technology.",
            img:"/static/media/soft8.595761d1afa864d170d9ae182c130317.svg",
            title:'8. Transparency'
           }
        ],

        [
            {text:"Sponsorlytix’s proprietary algorithms, Computer Vision, Machine Learning and Logo Detection technology - combined with the our 10 different assets, provides the most accurate and rounded brand valuation of sports sponsors.",
            img:"/static/media/soft9.782b2faac1dd4d42a42a9187ff189e12.svg",
            title:'9. Most Accurate Brand Valuation'
           }
        ],

        [
            {text:"Sponsorlytix’s mission is to improve global sponsorship effectiveness by providing the most comprehensive and trusted source of intelligent data. Sports Clubs, Sports Federations/Associations, Governing Bodies, Sports Brands, Athletes, E-Sports - at any level of the sport.",
            img:"/static/media/soft10.898d2388c297bebbccbaf112b29f2030.svg",
            title:'10. Sports Industry & E-Sports'
           }
        ],

    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    
    function goToPrevious () {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slidess.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastSlide = currentIndex === slidess.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        
      };
  return (



    <div className="div" style={{backgroundColor:"#F8F9FE" }}>
    <div style={{position:"fixed",bottom:"0",right:'0'}} >
        
         <div>
            <div className='left' onClick={goToPrevious} style={leftArrowStyles}>
              <AiOutlineArrowLeft style={{height:"3rem",color:'black'}}/>
            </div>
            <div className='right' onClick={goToNext} style={rightArrowStyles}>
               <AiOutlineArrowRight  style={{height:"3rem",color:'black'}}/>
            </div>
        </div>
       
       <div className="div">
        {
            slidess[currentIndex].map((idx)=>(
              
                  <div style={slideStylesWidthBackground}>
                  <div className='cont' style={{height:'70vh',width:'50vw', marginLeft:'40rem'}}>
                        <img className='img'src={idx.img} alt="" />
                        <p>{idx.text}</p> 
                  </div>
                  </div>
             
            ))
        }
       </div>


        <div className='dotsContainerStyles' style={dotsContainerStyles}>
            {
             slidess.map((slide,slideIndex)=>(
             
                <div style={dotStyle} key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
                    
                        {slidess[slideIndex].map((idx)=>(
                            <p>{idx.title}</p>
                        )) }
                        
                    
                </div>
               
         ) 
         )
         }
        </div>

        
    </div>
    </div>
  )
}

export default Softwarein