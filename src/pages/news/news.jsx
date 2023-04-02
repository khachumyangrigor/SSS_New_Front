import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import Head from '../headNew/head.jsx';
import FootterNew from '../footterNew/footterNew.jsx';
import { Helmet } from "react-helmet";
//social
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, LinkedinIcon, TwitterIcon, TelegramIcon, WhatsappIcon } from 'react-share';
//css
import "./news.css";
//img
import sherBtn from './img/share.png';

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            error: '',
            news: [],
            hasMore: false,
            id: 100000,
            scrollThreshold: '200px',
        }
        this.resize = false;
        this.WscrollY = 0;
    }
    handelNewsFatch() {
        const API_SPEAKER_URL = 'https://www.apis.seasidestartupsummit.com/news/?method=getNews&id';
        fetch(`${API_SPEAKER_URL}= ${this.state.id}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { news } = data;
                    this.setState({
                        news: this.state.news.concat(news),
                        hasMore: true,
                    });
                }
            )
            .catch(console.clear())
    }

    handelMoreNews = () => {
        let newsArr = this.state.news;
        let lastIndex = newsArr.length;
        let lastId = this.state.news[lastIndex - 1].id;
        if (lastIndex % 6 !== 0) {
            this.setState({
                hasMore: false
            });
        }
        else {
            if (lastId !== this.state.id) {
                this.setState({
                    id: lastId
                }, () => this.handelNewsFatch());
            }
            else {
                setTimeout(() => {
                    this.handelMoreNews();
                }, 1000);
            }
        }

    }
    componentDidMount = () => {
        this.handelNewsFatch();
        this.handelScreenUpdate();
        window.addEventListener("resize", this.handelScreenUpdate);
    }

    handelScreenUpdate = () => {
        if (!this.resize) {
            if (window.innerWidth >= 1920 && this.state.news !== []) {
                setTimeout(() => {
                    let newsArr = this.state.news;
                    let lastIndex = newsArr.length;
                    let lastId = this.state.news[lastIndex - 1].id;
                    this.setState({
                        id: lastId,
                        scrollThreshold: '600px',
                    }, () => this.handelNewsFatch());
                    this.resize = true;
                }, 1000);
            }
        }
    }


    render = () => {
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/news/img/newsimg';
        const { error, news, scrollThreshold } = this.state;
        if (error) return <div className="newsBox"><div>Error: {error}</div></div>;
        return (
            <Fragment>
                <Helmet>
                    <title>Startup Blog | Seaside Startup Summit</title>
                    <meta name="description" content="Stay updated in with our blog.News and announcements of events." />
                    <meta property="og:title" content="Startup Blog | Seaside Startup Summit" />
                    <meta property="og:url" content={`https://www.seasidestartupsummit.com/blog`} />
                    <meta property="og:description" content="Stay updated in with our blog.News and announcements of events." />
                </Helmet>
                <Head />
                <div className="newsBox" ref="news">
                    {/* <div className="underMenu"><div className="underMenuItem" /></div> */}
                    <div className="newsHeader"><div className="preTitle" /><h2>Stay updated with our <span><br />news</span></h2></div>
                    <div className="newsMiddle">
                        <InfiniteScroll
                            hasMore={this.state.hasMore}
                            dataLength={this.state.id}
                            next={this.handelMoreNews}
                            scrollThreshold={scrollThreshold}
                            loader={<p className='loader'>Loading...</p>}
                            endMessage={<p className='loader'>Congratulations! You have reached to the end.</p>}
                        >
                            {
                                news.map(newsItem => (
                                    <Link to={`/blog/${newsItem.url}`} key={newsItem.id}>
                                        <div className="newsItem">
                                            <div className="image"><img src={`${API_IMG_URL}/${newsItem.imgHead}`} alt="News" /></div>
                                            <div className="newsItemFooter">
                                                <div className="title">
                                                    {newsItem.title}
                                                    <i>
                                                        <img src={sherBtn} alt="Shere" />
                                                        <div>
                                                            <FacebookShareButton url={`https://www.seasidestartupsummit.com/blog/${newsItem.url}`}>
                                                                <FacebookIcon size={20} round={false} />
                                                            </FacebookShareButton>
                                                            <LinkedinShareButton url={`https://www.seasidestartupsummit.com/blog/${newsItem.url}`}>
                                                                <LinkedinIcon size={20} round={false} />
                                                            </LinkedinShareButton>
                                                            <TwitterShareButton url={`https://www.seasidestartupsummit.com/blog/${newsItem.url}`}>
                                                                <TwitterIcon size={20} round={false} />
                                                            </TwitterShareButton>
                                                            <TelegramShareButton url={`https://www.seasidestartupsummit.com/blog/${newsItem.url}`}>
                                                                <TelegramIcon size={20} round={false} />
                                                            </TelegramShareButton>
                                                            <WhatsappShareButton url={`https://www.seasidestartupsummit.com/blog/${newsItem.url}`}>
                                                                <WhatsappIcon size={20} round={false} />
                                                            </WhatsappShareButton>
                                                        </div>
                                                    </i>
                                                </div>
                                                <div className="date">{newsItem.data}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </InfiniteScroll>
                    </div>
                </div>
                <FootterNew />
            </Fragment >
        )
    }
}
export default News;