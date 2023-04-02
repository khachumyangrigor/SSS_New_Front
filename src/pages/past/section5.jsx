import React from 'react';
import { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class Startups extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            error: '',
            startups: [],
            id: 0,
        }
    }


    handelStartupsFatch = info => {
        const { API_STARTUP_URL } = info
        this.setState({ loading: true });
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
    componentWillReceiveProps = nextProps => {
        if (this.props.info.baner_title_part1 !== nextProps.info.baner_title_part1) {
            this.handelStartupsFatch(nextProps.info);
        }
    }
    componentDidMount = () => {
        this.handelStartupsFatch(this.props.info);
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
        const { API_IMG_URL } = this.props.info;
        const { loading, error, startups } = this.state;
        if (startups === undefined) return <div className="part6Title"><div></div></div>
        if (loading) return <div className="part6Title"><div>Loaging...</div></div>;
        if (error) return <div className="part6Title"><div></div></div>;
        return (
            <Fragment>
                <div className="upcommingInvestorNew upcommingInvestorNew_Startup">
                    <h2>Join the gang of tommorow’s unicorns</h2>
                    <p>— our alumni —</p>
                    <div className="left">
                        <div className="upcommingInvestorNewPrev" onClick={() => this.caruselPrev(this.refs.upcommingInvestorImg, 500)}><b /></div>
                        <div className="upcommingInvestorNewImg" ref="upcommingInvestorImg">
                            {
                                startups.map(startups => (
                                    <div className="investor" key={startups.id}>
                                        <div className="imgBox">
                                            <img src={require(`./img/${API_IMG_URL}/startups/${startups.img}`)} alt="startup" rel="index nofollow noopener nnoreferer" />
                                        </div>
                                        <p className="name">{startups.name}</p>
                                        <p className="info">{startups.info}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="upcommingInvestorNewNext" onClick={() => this.caruselNext(this.refs.upcommingInvestorImg, 500)}><b /></div>
                    </div>
                </div>
            </Fragment >
        )
    }
}
export default withRouter(Startups);