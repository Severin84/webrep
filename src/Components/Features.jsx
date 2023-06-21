import React,{useRef} from 'react'
import "./Features.css";
import Fimg1 from "./FeaturesImg/Fimg1.svg";
import Fimg2 from "./FeaturesImg/Fimg2.svg";
import Fimg3 from "./FeaturesImg/Fimg3.svg";
import Fimg4 from "./FeaturesImg/Fimg4.svg";
import Fimg5 from "./FeaturesImg/Fimg5.svg";
import Fimg6 from "./FeaturesImg/Fimg6.svg";
import Fimg7 from "./FeaturesImg/Fimg7.svg";
import Fimg8 from "./FeaturesImg/Fimg8.svg";
import Fimg9 from "./FeaturesImg/Fimg9.svg";
import ImageSlider from './ImageSlider';
const Features = () => {
   
      
     const slides=[
      ["/static/media/Fimg1.d3fe7d350365772cf5139722d7f6867a.svg"],
      ["/static/media/Fimg2.3d001a7372e45f3a5911d1caddebdbd3.svg"],
      ["/static/media/Fimg3.f2ada3757492a6060c23e5297e792e4e.svg"],
      ["/static/media/Fimg4.7e92dd2aa75dc436d5547f595460aa8c.svg"],
      ["/static/media/Fimg5.a212e956dd13d27ea6f5b74f6524afb8.svg"],
      ["/static/media/Fimg6.bd14b2dc8f0d534114293a06c3297e56.svg"],
      ["/static/media/Fimg7.da798e9f0603ecfd67cc23c15657b167.svg"],
      ["/static/media/Fimg8.88e37493ab262ba6041761f843bbd586.svg"],
      ["/static/media/Fimg9.5922f7ff5baa03a0b9a83ac778da4e6b.svg"]
   ];

     const containerStyles={
      width:'500px',
      height:'280px',
      margin:"0 auto"
     }
  return (
    <div>
        <div className='FeatureTitle'>
            <h2 className="feat">
              Features
            </h2>
        </div>
       
        <div>
          <div style={containerStyles}>
          {/* <img src={Fimg1} alt="" /> */}
             <ImageSlider slides={slides}/>
             {/* <img src={Fimg1} alt="" /> */}
          </div>
          
        </div>
    </div>
  )
}

export default Features