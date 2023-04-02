import React from 'react';
import { Fragment } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../loader/loader.jsx';
import { Info_Past1, Info_Past2, Info_Past3, Info_Past4, Info_Past5, Info_Past6 } from './eventArray/array.jsx';
import backArrow from "../upcoming/img/icon/back-arrow.svg";

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
    }
    getInfo = () => {
        let location = this.props.history.location.pathname;
        if (location === '/sevan19/speakers' || location === '/sevan19/speakers/') return Info_Past6;
        else if (location === '/sevan18/speakers' || location === '/sevan18/speakers/') return Info_Past1;
        else if (location === '/sevan17/speakers' || location === '/sevan17/speakers/') return Info_Past2;
        else if (location === '/sevan16/speakers' || location === '/sevan16/speakers/') return Info_Past3;
        else if (location === '/uae18/speakers' || location === '/uae18/speakers/') return Info_Past4;
        else if (location === '/india18/speakers' || location === '/india18/speakers/') return Info_Past5;
    }
    handelSpeakersFatch() {
        const { API_SPEAKER_URL } = this.getInfo();
        fetch(`${API_SPEAKER_URL}=${this.state.id}`)
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

    render = () => {
        const { API_IMG_URL } = this.getInfo();
        console.log()
        const { error, speakers, speakerImge, speakerInfo, speakerName, speakerPosition, showInfo, partShowTime, scrollThreshold } = this.state;
        if (error) return <div className="part5Title"><div>Error: {error}</div></div>;
        return (
            <Fragment>
                <div className="backPage" onClick={() => this.props.history.goBack()}><img src={backArrow} alt="back" /> Back</div>
                <div className={`moreInfo ${showInfo}`} >
                    <div>
                        <div><img src={speakerImge} alt="speaker" /></div>
                        <div className="speakerLeftName">
                            {speakerName}
                        </div>
                        <div className="speakerLeftPosition">
                            {speakerPosition}
                        </div>
                    </div>
                    <p>{speakerInfo}</p>
                    <div className="vidoClose"><span onClick={() => this.setState({ showInfo: '', partShowTime: '' })}>X</span></div>
                </div>
                <div className={`part5 ${partShowTime}`} >
                    <InfiniteScroll
                        hasMore={this.state.hasMore}
                        dataLength={this.state.id}
                        next={this.handelMoreSpeakers}
                        scrollThreshold={scrollThreshold}
                        loader={<Loading />}
                        endMessage={<p className='loader'>No More Speakers</p>}
                    >
                        {
                            speakers.map(speaker => (
                                <div className={`person`} key={speaker.id} onClick={(e) => this.handelGetinfo(e)}>
                                    <div className="imgMOre">
                                        <img src={require(`./img/${API_IMG_URL}/speakers/${speaker.img}`)} alt={speaker.name} rel="img" />
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