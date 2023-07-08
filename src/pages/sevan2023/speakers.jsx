import React from 'react';
import { Link } from 'react-router-dom';
//css
import './upcommingNew.css';
//Media


class Speakers extends React.Component {
    
    constructor() {
        super();
        this.state = {
            speakers: [],
            error: '',
            id: 0
        }
    }


    handelSpeakersFatch() {
        const API_STARTUP_URL = 'https://www.apis.seasidestartupsummit.com/upcomming/speakers/?method=getSpeakers2022&id';
        fetch(`${API_STARTUP_URL}=${this.state.id}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    if (typeof (data.Error) != 'undefined') this.setState({ error: data.Error, loading: false });
                    else {
                        const speakers = data.speakers;
                        this.setState({
                            error: '',
                            speakers: this.state.speakers.concat(speakers),
                            loading: false,
                        });
                    }

                }
            )
    }
    componentDidMount = () => {
        this.handelSpeakersFatch();
    }
    handelMoreSpeaker = () => {
        let startupArr = this.state.speakers;
        let lastIndex = startupArr.length;
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
                    this.handelMoreSpeaker();
                }, 1000);
            }
        }
    }


    caruselPrev = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        if(window.navigator.userAgent.indexOf("Edge") > -1){
            elem.scrollLeft=elem.scrollLeft + inter;
        }
        else elem.scrollTo({
            left: elem.scrollLeft + inter,
            behavior: "smooth",
        });
    }
    caruselNext = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        if(window.navigator.userAgent.indexOf("Edge") > -1){
            elem.scrollLeft=elem.scrollLeft - inter;
        }
        else elem.scrollTo({
            left: elem.scrollLeft - inter,
            behavior: "smooth",
        });
    }



    render = () => {
        const { speakers } = this.state;
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/speakers/speakers_name/img';
        return (
            <div className="upcommingSpeakerNew">
                <h2>Learn from top industry leaders</h2>
                <p>— our previous speakers & mentors —</p>
                <div className="upcommingSpeakerNew_middle">
                    <div className="left">
                        <div className="upcommingSpeakerNewPrev" onClick={() => this.caruselPrev(this.refs.upcommingSpeakerImg, 500)}><b /></div>
                        <div className="upcommingSpeakerNewImg" ref="upcommingSpeakerImg">
                            {
                                speakers.map(speakers => (
                                    <div className="speaker" key={speakers.id}>
                                        <div className="imgBox">
                                            <img src={`${API_IMG_URL}/${speakers.img}`} alt={speakers.name} rel="img" />
                                        </div>
                                        <p className="name">{speakers.name}</p>
                                        <p className="position">{speakers.position}</p>
                                        <a href={speakers.link} target="_blank" rel="noopener noreferrer" ><i /></a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="upcommingSpeakerNewNext" onClick={() => this.caruselNext(this.refs.upcommingSpeakerImg, 500)}><b /></div>
                    </div>
                    <div className="right">
                        <iframe title="part8Frame" src="https://www.youtube.com/embed/2EQFRmIHSBs" frameBorder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="footter">
                    <Link to="/upcoming-events/sevan-2022/speakers">Become a Speaker</Link>
                </div>
            </div>
        )
    }
}
export default Speakers;