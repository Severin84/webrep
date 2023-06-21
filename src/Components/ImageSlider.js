import { useState } from "react";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
import './ImageS.css';
const slideStyles={
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const rightArrowStyles={
    position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-200px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
}

const leftArrowStyles={
    position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
}

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    marginTop:"17rem"
  };

const ImageSlider=({slides})=>{

const [currentIndex, setCurrentIndex] = useState(0);


  function goToPrevious () {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
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
    
    <div style={sliderStyles}>

        
        <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
              <AiOutlineArrowLeft className="arrowL" style={{height:"3rem",color:'black',marginLeft:'-10rem'}}/>
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
               <AiOutlineArrowRight  className="arrowR" style={{height:"3rem",color:'black',marginleft:'70rem'}}/>
            </div>
        </div>
        <div style={slideStylesWidthBackground}>
          <div >
            <img className="slideimg" src={slides[currentIndex]}/>
          </div>
            
        </div>
        <div className="dots" style={dotsContainerStyles}>
            {slides.map((slide,slideIndex)=>(
                <div style={dotStyle} key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
                     *
                </div>
            ))}
        </div>
    </div>
)
          
}

export default ImageSlider;