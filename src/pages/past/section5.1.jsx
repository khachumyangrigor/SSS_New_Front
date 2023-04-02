import React from 'react';
import { Fragment } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../loader/loader.jsx';
import { Info_Past1, Info_Past2, Info_Past3, Info_Past4, Info_Past5 } from './eventArray/array.jsx';
import backArrow from "../upcoming/img/icon/back-arrow.svg";

class Sevan2018Startups extends React.Component {
    constructor() {
        super();
        this.state = {
            error: '',
            startups: [],
            hasMore: false,
            startupImge: '',
            startupName: '',
            startupPosition: '',
            startupInfo: '',
            showInfo: '',
            partShowTime: '',
            id: 0
        }
    }
    getInfo = () => {
        let location = this.props.history.location.pathname;
        if (location === '/sevan18/startups') return Info_Past1;
        else if (location === '/sevan17/startups') return Info_Past2;
        else if (location === '/sevan16/startups') return Info_Past3;
        else if (location === '/uae18/startups') return Info_Past4;
        else if (location === '/india18/startups') return Info_Past5;
    }
    handelStartupFatch() {
        const { API_STARTUP_URL } = this.getInfo();
        fetch(`${API_STARTUP_URL}=${this.state.id}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    if (typeof (data.Error) != 'undefined') this.setState({ error: data.Error, loading: false });
                    else {
                        const { startups } = data;
                        this.setState({
                            error: '',
                            startups: startups,
                            loading: false,
                        });
                    }
                }
            )
    }



    handelMoreStartups = () => {
        let startupArr = this.state.startups;
        let lastIndex = startupArr.length;
        let lastId = this.state.startups[lastIndex - 1].id;
        if (lastIndex % 6 !== 0) {
            this.setState({
                hasMore: false
            });
        }
        else {
            if (lastId !== this.state.id) {
                this.setState({
                    id: lastId
                }, () => this.handelStartupFatch());
            }
            else {
                setTimeout(() => {
                    this.handelMoreStartups();
                }, 1000);
            }
        }

    }
    componentDidMount = () => {
        this.handelStartupFatch();
    }

    handelGetinfo = (e) => {
        let imgMore = e.currentTarget.children[0];
        let img = imgMore.children[0].getAttribute("src");
        let name = e.currentTarget.children[1].innerHTML;
        let position = e.currentTarget.children[2].innerHTML;
        let info = e.currentTarget.children[3].innerHTML;
        this.setState({
            startupImge: img,
            startupName: name,
            startupPosition: position,
            startupInfo: info,
            showInfo: 'moreInfoshow',
            partShowTime: 'partShowTime'
        });
    }

    render = () => {
        const { API_IMG_URL } = this.getInfo();
        const { error, startups, startupImge, startupName, startupInfo, showInfo, partShowTime } = this.state;
        if (error) return <div className="part6Title"><div></div></div>;
        return (
            <Fragment>
                <div className="backPage" onClick={() => this.props.history.goBack()}><img src={backArrow} alt="back" /> Back </div>
                <div className={`moreInfo ${showInfo}`} onClick={() => this.setState({ showInfo: '', partShowTime: '' })}>
                    <div>
                        <div><img src={startupImge} alt="startups" /></div>
                        <div className="speakerLeftName">
                            {startupName}
                        </div>
                    </div>
                    <p>{startupInfo}</p>
                    <div className="vidoClose"><span onClick={() => this.setState({ showInfo: '', partShowTime: '' })}>X</span></div>
                </div>
                <div className={`part6 ${partShowTime}`} >
                    <InfiniteScroll
                        hasMore={this.state.hasMore}
                        dataLength={this.state.id}
                        next={this.handelMoreStartups}
                        scrollThreshold="200px"
                        loader={<Loading />}
                        endMessage={<p className='loader'>No More Startups</p>}
                    >
                        {
                            startups.map(startup => (
                                <div className={`person`} key={startup.id} onClick={(e) => this.handelGetinfo(e)}>
                                    <div className="imgMOre">
                                        <img src={require(`./img/${API_IMG_URL}/startups/${startup.img}`)} alt={startup.name} rel="img" />
                                        <div className="personMore"></div>
                                    </div>
                                    <p className="personName">{startup.name}</p>
                                    <p className="personPosition">{startup.position}</p>
                                    <div className="personalInfo">{startup.info}</div>
                                </div>
                            ))
                        }
                    </InfiniteScroll>
                </div>
            </Fragment >
        )
    }
}
export default Sevan2018Startups;