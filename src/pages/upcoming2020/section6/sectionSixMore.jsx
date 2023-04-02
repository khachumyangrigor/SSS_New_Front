import React from 'react';
import { Fragment } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from 'react-router-dom';
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
    }
    handelSpeakersFatch() {
        const API_SPEAKER_URL = 'https://www.admins.sss.am/api/?method=getInvestors19&id';
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

    handelReLink = link => {
        window.open(link, '_blank');
    }

    render = () => {
        const API_IMG_URL = 'https://admins.sss.am/sevan2019/img';
        const { error, speakers, speakerImge, speakerInfo, showInfo, partShowTime, scrollThreshold } = this.state;
        if (error) return <div className="part5Title"><div>Error: {error}</div></div>;
        return (
            <Fragment>
                <div className="backPage"><Link to='/sevan19/investors'><img src={backArrow} alt="back" /> Back</Link></div>
                <div className={`moreInfo ${showInfo}`} onClick={() => this.setState({ showInfo: '', partShowTime: '' })}>
                    <div>
                        <div><img src={speakerImge} alt="speaker" /></div>
                        {/* <div>
                            <h3>{speakerName}</h3>
                            <h6>{speakerPosition}</h6>
                        </div> */}
                    </div>
                    <p ref="infoBox">{speakerInfo}</p>
                </div>
                <div style={{ marginTop: 120 + 'px' }} className={`part5 ${partShowTime}`} >
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
                                <div className={`person`} key={speaker.id} onClick={() => this.handelReLink(speaker.link)}>
                                    <div className="imgMOre">
                                        <img src={`${API_IMG_URL}/investors/${speaker.img}`} alt='sevan investors' />
                                        <div className="personMore"></div>
                                    </div>
                                    {/* <p className="personName">{speaker.name}</p> */}
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