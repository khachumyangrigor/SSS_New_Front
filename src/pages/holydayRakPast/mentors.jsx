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

class Startups extends React.Component{
    constructor() {
        super();
        this.state = {
            mentors: [],
            error: '',
            id: 0
        }
    }

    handelMentorsFatch = () => {
        const API_MENTORS_URL = 'https://www.apis.seasidestartupsummit.com/past/speakers/?method=getSpeakersRak22&id=0';
        fetch(`${API_MENTORS_URL}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { speakers } = data;
                    this.setState({
                        mentors: speakers,
                    });
                }
            )
            .catch(
                error => console.clear()
            )
    }

    componentDidMount = () => {
        this.handelMentorsFatch();
    }


    render=()=>{
        const { mentors } = this.state;
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/speakers/speakers_name/img';
        const slider_settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow:5,
            slidesToScroll: -1,
            swipe:true,
            lazyLoad: false,
            draggable:false,
            // pauseOnHover: true,
            // focusOnSelect: true,
            nextArrow: <SampleNextArrow  />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                  }
                }
            ]
        };
        return(
            <div className="mentors">  
                <h3>Learn from top industry leaders</h3>
                <h4>— speakers & mentors —</h4>
                <div className="second_floor" onTouchStart={()=>document.body.classList.add("stop-scrolling")} onTouchEnd={()=>document.body.classList.remove("stop-scrolling")}>
                    <Slider {...slider_settings} >
                        {
                            mentors.map(mentor => (
                                <div className="mentor" key={mentor.id}>
                                    <div className="imgBox">
                                        <img src={`${API_IMG_URL}/${mentor.img}`} alt={mentor.name} rel="img" />
                                    </div>
                                    <p className="name">{mentor.name}</p>
                                    <p className="position">{mentor.position}</p>
                                    <a href={mentor.link} target="_blank" rel="noopener noreferrer" ><i /></a>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Startups;