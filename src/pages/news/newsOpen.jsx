import React from 'react';
import { Fragment } from 'react';
// import Header from "../header/header.jsx";
import Head from '../headNew/head.jsx';
import FootterNew from '../footterNew/footterNew.jsx';
//img
import "./news.css";
//social
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, LinkedinIcon, TwitterIcon, TelegramIcon, WhatsappIcon } from 'react-share';
// import { FacebookShareCount, LinkedinShareCount, TwitterShareCount, TelegramShareCount, WhatsappShareCount } from 'react-share';

import restoreData from '../../assets/plugins/restoreData';
import { Helmet } from 'react-helmet';

class News extends React.Component {
    constructor(props) {
        super(props);
// SSR API
        let news = {};
        let data = restoreData(props.staticContext);
        if(data){
            news = data.news[0];
        }
//END SSR API

        this.state = {
            error: '',
            news,
            url: '',
            id: '',
        }
        this.resize = false;
        this.WscrollY = 0;
    }

    handelNewsFatch = () => {
        const API_NEWS_URL = 'https://www.apis.seasidestartupsummit.com/news/?method=getNewsOne&id';
        fetch(`${API_NEWS_URL}=${this.state.id}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    this.setState({ news: data.news[0]});
                }
            )
            .catch(console.clear())
    }


    componentDidMount = () => {
        if(Object.keys(this.state.news).length === 0){
            let url = `https://www.seasidestartupsummit.com/blog/${this.props.match.params.id}`;
            this.setState({
                id: this.props.match.params.id,
                url: url
            }, this.handelNewsFatch);
        }
    }

    render = () => {
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/news/img/newsimg';
        const { error, news, url } = this.state;
        if (error) return <div className="newsBox"><div>Error: {error}</div></div>;
        return (
            <Fragment>
                <Helmet>
                    <title>{news.metaTitle}</title>
                    <meta name="description" content={news.head} />
                    <meta name="keywords" content={news.title} />
                    <meta property="og:title" content={news.metaTitle} />
                    <meta property="og:url" content={`https://www.seasidestartupsummit.com/blog/${news.url}`} />
                    <meta property="og:image" content={`${API_IMG_URL}/${news.imgHead}`} />
                    <meta property="og:type" content="articl" />
                    <meta property="og:description" content={news.head} />
                </Helmet>
                <Head />
                <div className="newsBox" ref="news">
                    {/* <div className="underMenu"><div className="underMenuItem" /></div> */}
                    <div className="newsOneHeader">
                        <h1>{news.title}</h1>
                        {/* <span ref="newsHead" dangerouslySetInnerHTML={{__html:news.head}}></span> */}
                        <div className="social">
                            <FacebookShareButton url={url}>
                                <FacebookIcon size={25} round={true} />
                            </FacebookShareButton>
                            <LinkedinShareButton url={url}>
                                <LinkedinIcon size={25} round={true} />
                            </LinkedinShareButton>
                            <TwitterShareButton url={url}>
                                <TwitterIcon size={25} round={true} />
                            </TwitterShareButton>
                            <TelegramShareButton url={url}>
                                <TelegramIcon size={25} round={true} />
                            </TelegramShareButton>
                            <WhatsappShareButton url={url}>
                                <WhatsappIcon size={25} round={true} />
                            </WhatsappShareButton>
                        </div>
                    </div>
                    <div className="newsOneMiddle">
                        <div className="newsOneRigth" ref="newsText">
                            <div className="newsOneLeft">
                                <img src={`${API_IMG_URL}/${news.imgHead}`} alt="News" rel={`${API_IMG_URL}/${news.imgHead}`} />
                                <span>{news.data} {news.time}</span>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: this.state.news.text1}}></div>
                        </div>
                    </div>
                </div>
                <FootterNew />
            </Fragment >
        )
    }
}
export default News;