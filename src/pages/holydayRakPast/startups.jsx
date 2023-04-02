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
            startups: [],
            error: '',
            startupsSelected:{
                info:'',
                zoom:'',
                pic1:'',
                pic2:'',
                pic3:'',
            }
        }
    }

    handelInvestorsFatch() {
        const API_SPEAKER_URL = 'https://www.apis.seasidestartupsummit.com/past/startups/?method=getStartupsRak22&id=0';
        fetch(`${API_SPEAKER_URL}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { startups } = data;
                    this.setState({
                        startups: startups,
                        startupsSelected:{
                            info:startups[0].info,
                            zoom:startups[0].pic1,
                            pic1:startups[0].pic1,
                            pic2:startups[0].pic2,
                            pic3:startups[0].pic3
                        },
                    },()=>{
                        document.getElementsByClassName('investor')[0].classList.add("active");
                    });
                }
            )
            .catch(
                error => console.clear()
            )
    }
    
    handelReLink =(e, id) => {
        const { startups } = this.state;
        const selected= startups.find(x => x.id === id);
        this.setState({
            startupsSelected:{
                info:selected.info,
                zoom:selected.pic1,
                pic1:selected.pic1,
                pic2:selected.pic2,
                pic3:selected.pic3
            },
        });
        document.getElementsByClassName('imageList_img')[0].classList.add("active");
        document.getElementsByClassName('imageList_img')[1].classList.remove("active");
        document.getElementsByClassName('imageList_img')[2].classList.remove("active");
        
        const startupCount=document.getElementsByClassName('investor').length;
        for(let i=0; i<startupCount; i++){
            document.getElementsByClassName('investor')[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    }

    setZoom = (e, pic) => {
        const { startupsSelected } = this.state;
        startupsSelected.zoom = pic;
        this.setState({
            startupsSelected
        });
        document.getElementsByClassName('imageList_img')[0].classList.remove("active");
        document.getElementsByClassName('imageList_img')[1].classList.remove("active");
        document.getElementsByClassName('imageList_img')[2].classList.remove("active");
        e.currentTarget.classList.add("active");
    }

    componentDidMount = () => {
        this.handelInvestorsFatch();
    }


    render=()=>{
        const { startups,startupsSelected } = this.state;
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/startups/startups_name/img';
        const slider_settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow:4,
            swipe:true,
            slidesToScroll: -1,
            draggable:false,
            // focusOnSelect: true,
            // pauseOnHover: true,
            lazyLoad: true,
            nextArrow: <SampleNextArrow  />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    swipe:true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots:true,
                    swipe:true,
                  }
                }
            ]
        };
        return(
            <div className="startups">  
                <h2>Startups of SSSholidays</h2>
                <div className="first_floor">
                    <div className="left">
                        <p>{startupsSelected.info}</p>
                        <div className='imageList'>
                            <img src={`${API_IMG_URL}/${startupsSelected.pic1}`} alt="Startup" onClick={(e)=>this.setZoom(e,startupsSelected.pic1)}  className="imageList_img active"/>
                            <img src={`${API_IMG_URL}/${startupsSelected.pic2}`} alt="Startup" onClick={(e)=>this.setZoom(e,startupsSelected.pic2)}  className="imageList_img" />
                            <img src={`${API_IMG_URL}/${startupsSelected.pic3}`} alt="Startup" onClick={(e)=>this.setZoom(e,startupsSelected.pic3)}  className="imageList_img" />
                        </div>
                    </div>
                    <div className="right">
                        <img src={`${API_IMG_URL}/${startupsSelected.zoom}`} alt="Startup" />
                    </div>
                </div>
                <div className="second_floor"  onTouchStart={()=>document.body.classList.add("stop-scrolling")} onTouchEnd={()=>document.body.classList.remove("stop-scrolling")}>
                    <Slider {...slider_settings}>
                        {
                            startups.map(startups => (
                                <div className="investor" key={startups.id} onClick={(e) => this.handelReLink(e, startups.id)}>
                                    <div className="imgBox">
                                        <img src={`${API_IMG_URL}/${startups.img}`} alt="startup" rel="index nofollow noopener noreferer" />
                                    </div>
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