import './slider.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Cloth from "../../assets/images/banner-img-1.png";
import Beauty from "../../assets/images/banner-img-2.png";
import Watch from "../../assets/images/banner-img-3.png";
import Shoe from ".././../assets/images/banner-img-4.png";
import Tablet from "../../assets/images/banner-img-5.png";


const Slider = ({sliderType}) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const imgs = [
            Cloth,
           Beauty,
           Watch,
           Shoe,
           Tablet

    ]
setInterval(() => {
        setSlideIndex((slideIndex + 1) % imgs.length)
}, 5000);
 
const nextSlide = () => {
    if(slideIndex !== imgs.length){
            setSlideIndex(slideIndex + 1);
    }else if(slideIndex === imgs.length){
            setSlideIndex(1);
    }

};
const prevSlide = () => {
    if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
    }else if (slideIndex === 1){
            setSlideIndex(imgs.length)
    }
};
const clickDot = (index) => {
    setSlideIndex(index)
}
    return(
        <div className={`carousel-slider ${sliderType}`}>
                {
                        imgs.map((img, index) =>{
                                return <div className={` ${slideIndex === index + 1 ? "slide active-slide" : "slide"}`}>
                                <img  className='slide-img' src={img} />

                                </div>
                        } )
                }
               
                <FontAwesomeIcon icon={faArrowLeft} className="btn-slide prev"  onClick={prevSlide}/>
                <FontAwesomeIcon icon={faArrowRight} className="btn-slide next" onClick={nextSlide} />

               
                <div className='dots-container'>
                {
                        Array.from({length: 5}).map((item, index) => (
                         <div className={slideIndex === index+1 ? "dot active" : "dot"} onClick={() => clickDot(index + 1)}></div>
                        ))
                }
                </div>
           </div> 
    )
}


export default Slider;