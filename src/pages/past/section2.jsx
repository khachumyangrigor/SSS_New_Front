import React from 'react';


class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: this.props.info.diaries_main_link,
        }
    }
    handelSetLink = (link, e) => {
        this.setState({ link: link });
        let obj = this.refs;
        Object.keys(obj).map(function (key) {
            obj[key].classList.remove("dayButtonActiv");
            return null;
        });
        e.currentTarget.classList.add("dayButtonActiv");
    }
    componentWillReceiveProps = nextProps => {
        this.setState({ link: nextProps.info.diaries_main_link });
    }
    render = () => {
        if(this.props.info.baner_title_part1==="Sevan Startup Summit 2016")return(<div></div>);
        const { diaries_button_link } = this.props.info;
        let trip;
        if (this.props.info.baner_title_part1==='Seaside Startup Summit India Goa') {
             trip=(<div>
                    <div className="dayButton" ref={'daybutton' + 8} onClick={(e) => this.handelSetLink('https://www.youtube.com/embed/MfYI1aBP8L4?autoplay=1', e)}>
                        <div><img src='https://i.ytimg.com/vi/MfYI1aBP8L4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDeXar5NQeN57bx-TKMVlxTY08g2A' alt='Seaside Startup Summit Diaries' /></div>
                        <div className="videoInfo">
                            <div>Trip to Seaside Startup Summit India.Goa</div>
                            <div>Seaside Startup Summit</div>
                        </div>
                    </div>
                </div>)
        }
        else if (this.props.info.baner_title_part1==='Seaside Startup Summit UAE RAK') {
            trip=(<div>
                <div className="dayButton" ref={'daybutton' + 8} onClick={(e) => this.handelSetLink('https://www.youtube.com/embed/WKQGJTQH9rE?autoplay=1', e)}>
                    <div><img src='https://i.ytimg.com/vi/WKQGJTQH9rE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDp8hNfos_nUISt0L30epIFk9Lx4Q' alt='Seaside Startup Summit Diaries' /></div>
                    <div className="videoInfo">
                        <div>Trip to UAE: Seaside Startup Summit UAE</div>
                        <div>Seaside Startup Summit</div>
                    </div>
                </div>
            </div>)
        }
        else trip=null;
        return (
            <div className="part2">
                <div className="videoTitle"><h1 className="statisticTitle">{this.props.info.baner_title_part2} Diaries</h1></div>
                <section className="part2Img">
                    <iframe id="dayVideo" title="frame1" width="654" height="365" src={this.state.link} allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </section>
                <section className="part2Text">
                    {trip}
                    {
                        diaries_button_link.map(diarie => (
                            <div key={diarie.id} >
                                <div className="dayButton" ref={'daybutton' + diarie.id} onClick={(e) => this.handelSetLink(diarie.link, e)}>
                                    <div><img src={diarie.img} alt='Sevan Startup Summit Diaries' /></div>
                                    <div className="videoInfo">
                                        <div>DAY{diarie.id}:{diarie.title}</div>
                                        <div>Seaside Startup Summit</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div >
        )

    }
}
export default Videos;