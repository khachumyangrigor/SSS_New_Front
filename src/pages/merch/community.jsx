import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={'slick-arrow slick-prev'}
        onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={'slick-arrow slick-next'}
        onClick={onClick}
        />
    );
}
class Community extends React.Component{
    render=()=>{
        const slider_settings = {
            dots: false,
            autoplay: false,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll:-1,
            swipe:true,
            draggable:false,
            pauseOnHover: true,
            pauseOnFocus: false,
            focusOnSelect: false,
            nextArrow: <SampleNextArrow  />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    autoplay: true,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                    draggable:true,
                    swipe:true,
                  }
                }
            ]
        };
        return(
            <div className="community">
                <div className="text">
                    <h3>#SSScommunity</h3>
                    <p>
                        SSS Merch is not just a set of products. It’s about bringing together people through recognizable items. The #SSScommunity serves	as a bridge that connects You with like-minded enthusiasts around the world.
                    </p>
                </div>
                <div className="imgBox"  onTouchStart={()=>document.body.classList.add("stop-scrolling")} onTouchEnd={()=>document.body.classList.remove("stop-scrolling")}>
                    <Slider {...slider_settings}>
                        <div>
                            <img src={require('./img/slider/1.png')} alt="community" />
                        </div>
                        <div>
                            <img src={require('./img/slider/2.png')} alt="community" />
                        </div>
                        <div>
                            <img src={require('./img/slider/3.png')} alt="community" />
                        </div>
                        <div>
                            <img src={require('./img/slider/4.png')} alt="community" />
                        </div>
                        <div>
                            <img src={require('./img/slider/5.png')} alt="community" />
                        </div>
                        <div>
                            <img src={require('./img/slider/6.png')} alt="community" />
                        </div>
                        <div>
                            <img src={require('./img/slider/7.png')} alt="community" />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Community;