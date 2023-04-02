import React from 'react';
import { Fragment } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import FixedMenu from '../section_menu/menu.jsx';
//img
import backArrow from "../img/icon/back-arrow.svg";

class PastSpeakers extends React.Component {
    constructor() {
        super();
        this.state = {
            error: '',
            speakers: [],
            hasMore: false,
            speakerImge: '',
            speakerName: '',
            speakerPosition: '',
            speakerInfo: '',
            showInfo: '',
            partShowTime: '',
            id: 0,
            scrollThreshold: '200px',
        }
        this.resize = false;
        this.WscrollY = 0;
    }
    handelSpeakersFatch() {
        const API_SPEAKER_URL = 'https://www.apis.seasidestartupsummit.com/speakers/?method=getSpeakers19&id';
        fetch(`${API_SPEAKER_URL}= ${this.state.id}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { speakers } = data;
                    this.setState({
                        speakers: this.state.speakers.concat(speakers),
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



    handelMoreSpeakers = () => {
        let speakersArr = this.state.speakers;
        let lastIndex = speakersArr.length;
        let lastId = this.state.speakers[lastIndex - 1].id;
        if (lastIndex % 6 !== 0) {
            this.setState({
                hasMore: false
            });
        }
        else {
            if (lastId !== this.state.id) {
                this.setState({
                    id: lastId
                }, () => this.handelSpeakersFatch());
            }
            else {
                setTimeout(() => {
                    this.handelMoreSpeakers();
                }, 1000);
            }
        }

    }
    componentDidMount = () => {
        this.handelSpeakersFatch();
        this.handelScreenUpdate();
        window.addEventListener("resize", this.handelScreenUpdate);
    }

    handelScreenUpdate = () => {
        if (!this.resize) {
            if (window.innerWidth >= 1920 && this.state.speakers !== []) {
                setTimeout(() => {
                    let speakersArr = this.state.speakers;
                    let lastIndex = speakersArr.length;
                    let lastId = this.state.speakers[lastIndex - 1].id;
                    this.setState({
                        id: lastId,
                        scrollThreshold: '600px',
                    }, () => this.handelSpeakersFatch());
                    this.resize = true;
                }, 1000);
            }
        }
    }

    handelGetinfo = (e) => {
        if (window.innerWidth < 850) {
            this.WscrollY = window.scrollY;
            this.refs.part5.style.position = "fixed";
        }
        this.refs.infoBox.scrollTo(0, 0);
        let imgMore = e.currentTarget.children[0];
        let img = imgMore.children[0].getAttribute("src");
        let name = e.currentTarget.children[1].innerHTML;
        let position = e.currentTarget.children[2].innerHTML;
        let info = e.currentTarget.children[3].innerHTML;
        this.setState({
            speakerImge: img,
            speakerName: name,
            speakerPosition: position,
            speakerInfo: info,
            showInfo: 'moreInfoshow',
            partShowTime: 'partShowTime'
        });
    }
    handelCloseInfo = () => {
        this.refs.part5.style.position = "relative";
        this.setState({ showInfo: '', partShowTime: '' });
        if (window.innerWidth < 850) window.scrollTo(0, this.WscrollY);
    }
    render = () => {

        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/speakers/speakers_name/img';
        const { error, speakers, speakerName, speakerPosition, speakerImge, speakerInfo, showInfo, partShowTime, scrollThreshold } = this.state;
        if (error) return <div className="part5Title"><div>Error: {error}</div></div>;
        return (
            <Fragment>
                <FixedMenu />
                <div className="backPage" onClick={() => this.props.history.goBack()}><img src={backArrow} alt="back" /> Back </div>
                <div className={`moreInfo ${showInfo}`} >
                    <div>
                        <div><img src={speakerImge} alt={speakerName} rel="img" /></div>
                        <div className="speakerLeftName">
                            {speakerName}
                        </div>
                        <div className="speakerLeftPosition">
                            {speakerPosition}
                        </div>
                    </div>
                    <p ref="infoBox">{speakerInfo}</p>
                    <div className="vidoClose"><span onClick={() => this.handelCloseInfo()}>X</span></div>
                </div>
                <div className={`part5 ${partShowTime}`} ref="part5">
                    <InfiniteScroll
                        hasMore={this.state.hasMore}
                        dataLength={this.state.id}
                        next={this.handelMoreSpeakers}
                        scrollThreshold={scrollThreshold}
                        loader=''
                        endMessage={<p className='loader'>Stay tuned! We're adding more every week. </p>}
                    >
                        {
                            speakers.map(speaker => (
                                <div className={`person`} key={speaker.id} onClick={(e) => this.handelGetinfo(e)}>
                                    <div className="imgMOre">
                                        <img src={`${API_IMG_URL}/${speaker.img}`} alt='sevan speakers' />
                                        <div className="personMore"></div>
                                    </div>
                                    <p className="personName">{speaker.name}</p>
                                    <p className="personPosition" hidden={true}>{speaker.position}</p>
                                    <div className="personalInfo">{speaker.info}</div>
                                </div>
                            ))
                        }
                    </InfiniteScroll>
                </div>
            </Fragment >
        )
    }
}
export default PastSpeakers;