import React from 'react';
import { Fragment } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, withRouter } from 'react-router-dom';
import FixedMenu from '../section_menu/menu.jsx';
// import Img from 'react-image';
// import { ImgLoade } from './loader.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// 
import './diaries.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
// 
import backArrow from "../img/icon/back-arrow.svg";
//


class Diaries extends React.Component {
    constructor() {
        super();
        this.state = {
            dayText: "This is the final pitching day. All the winners were announced during the closing ceremony. The overall prize fund of #SSS19 reached $100,000. Another $100,000 investment fund will be distributed between 2 or 3 startups. Soon we'll announce the deals. We hope that you enjoyed this week with us. Stay tuned as we have many announcements coming soon.",
            dayVideo: 'https://www.youtube.com/embed/Rj_rot6Tsvg',
            photoDate: '03th of Aug',
            fatchlink: 'day7',
            image: [],
            hasMore: false,
            id: 0,
            btn1: '',
            btn2: '',
            btn3: '',
            btn4: '',
            btn5: '',
            btn6: '',
            btn7: 'dayBtnBoxActive',
            scrollThreshold: '1000px',
            scroll: true
        }
    }

    componentDidMount = () => {
        this.handelImageFatch();
        this.handelScreenUpdate();
        window.addEventListener("resize", this.handelScreenUpdate);
        window.addEventListener("scroll", this.handelScroll);
    }

    handelImageFatch = () => {
        const API_Diaries_URL = 'https://www.apis.seasidestartupsummit.com/diaries/?method=getDiaries19&id';
        fetch(`${API_Diaries_URL}=${this.state.id}&day=${this.state.fatchlink}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { image } = data;
                    this.setState({
                        image: this.state.image.concat(image),
                        hasMore: true,
                    });
                }
            )
            .catch(
                error => console.log(
                    console.clear()
                )
            )
    }
    handelMoreImage = () => {
        let imageArr = this.state.image;
        let lastIndex = imageArr.length;
        let lastId = this.state.image[lastIndex - 1].id;
        if (lastIndex % 4 !== 0) {
            this.setState({
                hasMore: false
            });
        }
        else {
            if (lastId !== this.state.id) {
                this.setState({
                    id: lastId
                }, () => this.handelImageFatch());
            }
            else {
                setTimeout(() => {
                    this.handelMoreImage();
                }, 1000);
            }
        }

    }
    handelScreenUpdate = () => {
        if (!this.resize) {
            if (window.innerWidth >= 1920 && this.state.image !== []) {
                setTimeout(() => {
                    let imageArr = this.state.image;
                    let lastIndex = imageArr.length;
                    let lastId = this.state.image[lastIndex - 1].id;
                    this.setState({
                        id: lastId,
                        scrollThreshold: '1000px',
                    }, () => this.handelImageFatch());
                    this.resize = true;
                }, 1000);
            }
        }
    }
    handelDayChange = day => {
        switch (day) {
            case 1:
                this.setState({
                    dayText: 'The fourth annual tent-based "Sevan Startup Summit" has started today on the shores of Lake Sevan, with 120 startups from Armenia and 45 countries of the world. More than 100 mentors and successful entrepreneurs, venture and angel investors have arrived in Armenia within the frameworks of Summit, who will share their experiences with the startups during 7 days, deliver lectures, and help to uncover the most efficient development secrets and best ways to enter international markets. The introduction of startups and participants was followed by the opening ceremony, during which our organizers, partners and sponsors were also present.',
                    dayVideo: 'https://www.youtube.com/embed/plEjdCeqhRA',
                    fatchlink: 'day1',
                    photoDate: '28th of July',
                    image: [],
                    hasMore: false,
                    id: 0,
                    btn1: 'dayBtnBoxActive',
                    btn2: '',
                    btn3: '',
                    btn4: '',
                    btn5: '',
                    btn6: '',
                    btn7: '',
                }, this.handelImageFatch);
                break;
            case 2:
                this.setState({
                    dayText: 'The 2nd day was full of educational activities and special visits. The participants were already distributed between the tracks and were attending their sessions. The Starters have workshops and mentorship sessions and the Boosters are already taking part into the mini acceleration programme.',
                    dayVideo: 'https://www.youtube.com/embed/uTjN4eQQYjM',
                    fatchlink: 'day2',
                    photoDate: '29th of July',
                    image: [],
                    hasMore: false,
                    id: 0,
                    btn1: '',
                    btn2: 'dayBtnBoxActive',
                    btn3: '',
                    btn4: '',
                    btn5: '',
                    btn6: '',
                    btn7: '',
                }, this.handelImageFatch);
                break;
            case 3:
                this.setState({
                    dayText: 'All the startups are already deep into the educational programme and getting ready for their pitches on Friday and Saturday. On that day #SSS19 was attended by local entrepreneurs and celebritites. Artur Janibekyan, the co-founder of Seaside Startup Summit and Comedy Club Production, had a Big CampFire Talk on that day.',
                    dayVideo: 'https://www.youtube.com/embed/WS8FUKmGK78',
                    fatchlink: 'day3',
                    photoDate: '30th of July',
                    image: [],
                    hasMore: false,
                    id: 0,
                    btn1: '',
                    btn2: '',
                    btn3: 'dayBtnBoxActive',
                    btn4: '',
                    btn5: '',
                    btn6: '',
                    btn7: '',
                }, this.handelImageFatch);
                break;
            case 4:
                this.setState({
                    dayText: 'The day started with a master class by Vahe Kuzoyan, Successful Armenian entrepreneur located in the USA. He is the co-founder of Service Titan, 1.6 bln valued unicorn. All the meetings of the day aimed to help the startups to understand that hardworking will lead to success.',
                    dayVideo: 'https://www.youtube.com/embed/Ky-HXtHUuIs',
                    fatchlink: 'day4',
                    photoDate: '31th of July',
                    image: [],
                    hasMore: false,
                    id: 0,
                    btn1: '',
                    btn2: '',
                    btn3: '',
                    btn4: 'dayBtnBoxActive',
                    btn5: '',
                    btn6: '',
                    btn7: '',
                }, this.handelImageFatch);
                break;
            case 5:
                this.setState({
                    dayText: "Sevan Startup Summit is also about fun. The main idea to organize the Summits in the seaside areas is to bring the meeting into life. But the fact that we're far doesn't mean that there can be any borders. On the 5th day, we had a video call with the president of the Republic of Armenia, Armen Sarkissian.",
                    dayVideo: 'https://www.youtube.com/embed/uHNipxY5Ljc',
                    fatchlink: 'day5',
                    photoDate: '01th of Aug',
                    image: [],
                    hasMore: false,
                    id: 0,
                    btn1: '',
                    btn2: '',
                    btn3: '',
                    btn4: '',
                    btn5: 'dayBtnBoxActive',
                    btn6: '',
                    btn7: '',
                }, this.handelImageFatch);
                break;
            case 6:
                this.setState({
                    dayText: 'The semi-finals have started and the pressure is on top. There are 4 pitching battles going simultaneously and at the same time in the big auditorium the Prime Minister of the Republic of Armenia, Nikol Pashinyan, is launching the Ministry of IT. The event was attended by local and international authorities.',
                    dayVideo: 'https://www.youtube.com/embed/9ETJ9XYdGRY',
                    fatchlink: 'day6',
                    photoDate: '02th of Aug',
                    image: [],
                    hasMore: false,
                    id: 0,
                    btn1: '',
                    btn2: '',
                    btn3: '',
                    btn4: '',
                    btn5: '',
                    btn6: 'dayBtnBoxActive',
                    btn7: '',
                }, this.handelImageFatch);
                break;
            case 7:
                this.setState({
                    dayText: "This is the final pitching day. All the winners were announced during the closing ceremony. The overall prize fund of #SSS19 reached $100,000. Another $100,000 investment fund will be distributed between 2 or 3 startups. Soon we'll announce the deals. We hope that you enjoyed this week with us. Stay tuned as we have many announcements coming soon.",
                    dayVideo: 'https://www.youtube.com/embed/Rj_rot6Tsvg',
                    fatchlink: 'day7',
                    photoDate: '03th of Aug',
                    image: [],
                    hasMore: false,
                    id: 0,
                    btn1: '',
                    btn2: '',
                    btn3: '',
                    btn4: '',
                    btn5: '',
                    btn6: '',
                    btn7: 'dayBtnBoxActive',
                }, this.handelImageFatch);
                break;
            default:
                this.setState({
                    dayText: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel nibh eget nunc elementum pharetra eget quis nulla. Fusce scelerisque gravida eros, fermentum ornare diam ullamcorper ut. Sed nisi eros, semper vitae mollis eget, aliquet ac diam. In suscipit hendrerit dolor, consequat congue massa mattis at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel nibh eget nunc elementum pharetra eget quis nulla.',
                    dayVideo: 'https://www.youtube.com/embed/MLIOtkr8jr8',
                    fatchlink: 'day1',
                    image: [],
                    images: [],
                    hasMore: false,
                    id: 0
                });
                break;

        }
    }
    handelScroll = () => {
        let elem = this.refs.photoDate;
        if (elem !== undefined) {
            if (this.state.scroll) {
                if (window.scrollY + 52 >= elem.offsetTop) {
                    elem.style.position = "fixed";
                    this.setState({ scroll: false });
                }
            }
        }
    }
    render = () => {
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/diaries/img';
        const { dayText, dayVideo, photoDate, image, scrollThreshold } = this.state;
        return (
            <Fragment>
                <FixedMenu />
                <div className="backPage"><Link to='/sevan19/'><img src={backArrow} alt="back" /> Back</Link></div>
                <div className="diaries">
                    <div className="head">#sss19 diaries</div>
                    <div className="dayBtnBox">
                        <div className={`daybtn  ${this.state.btn1}`} onClick={() => this.handelDayChange(1)}>DAY<span> 1</span></div>
                        <div className={`daybtn  ${this.state.btn2}`} onClick={() => this.handelDayChange(2)} > DAY < span > 2</span></div>
                        <div className={`daybtn  ${this.state.btn3}`} onClick={() => this.handelDayChange(3)}>DAY<span> 3</span></div>
                        <div className={`daybtn  ${this.state.btn4}`} onClick={() => this.handelDayChange(4)}>DAY<span> 4</span></div>
                        <div className={`daybtn  ${this.state.btn5}`} onClick={() => this.handelDayChange(5)} > DAY < span > 5</span></div>
                        <div className={`daybtn  ${this.state.btn6}`} onClick={() => this.handelDayChange(6)}>DAY<span> 6</span></div>
                        <div className={`daybtn  ${this.state.btn7}`} onClick={() => this.handelDayChange(7)}>DAY<span> 7</span></div>
                    </div>
                    <div className="daysMiddle">
                        <div>
                            <p>{dayText}</p>
                        </div>
                        <div>
                            <iframe title="frame4" src={dayVideo} allow="encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="photoHead">FIND YOURSELF</div>
                    <div className="photoHeadDate" ref="photoDate">{photoDate}</div>
                    <div className="photoBox">
                        <InfiniteScroll
                            hasMore={this.state.hasMore}
                            dataLength={this.state.id}
                            next={this.handelMoreImage}
                            scrollThreshold={scrollThreshold}
                            endMessage={<p className='loader'>Stay tuned! We're adding more every day. </p>}
                        >
                            {
                                image.map(img => (
                                    <div className={`photo`} key={img.id}>
                                        <a href={`${API_IMG_URL}/${img.name}`} target='_blank' rel="dofollow noopener noreferrer" >
                                            {/* <img src={`${API_IMG_URL}/${img.name}`} alt="find yourself" /> */}
                                            {/* <Img src={`${API_IMG_URL}/${img.name}`} loader={<ImgLoade />} /> */}
                                            <LazyLoadImage
                                                src={`${API_IMG_URL}/${img.name}`} // use normal <img> attributes as props
                                                visibleByDefault={false}
                                                delayTime={600000}
                                                threshold={1}
                                            />
                                        </a>
                                    </div>
                                ))
                            }
                        </InfiniteScroll>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default withRouter(Diaries);
