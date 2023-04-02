import React from 'react';
import { Fragment } from 'react';
import { withRouter } from 'react-router-dom';


class Speakers extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            error: '',
            speakers: [],
            id: 0
        }
    }
    handelSpeakersFatch = info => {
        const { API_SPEAKER_URL } = info;
        this.setState({ loading: true });
        fetch(`${API_SPEAKER_URL}=${this.state.id}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { speakers } = data;
                    this.setState({
                        speakers: speakers,
                        loading: false
                    });
                }
            )
    }
    componentWillReceiveProps = nextProps => {
        if (this.props.info.baner_title_part1 !== nextProps.info.baner_title_part1) {
            this.handelSpeakersFatch(nextProps.info);
        }
    }
    componentDidMount = () => {
        this.handelSpeakersFatch(this.props.info);
    }
    render = () => {
        const { API_IMG_URL, spiker_push } = this.props.info;
        const { loading, error, speakers } = this.state;
        if (loading) return <div className="part5Title"><div>Loaging...</div></div>;
        if (error) return <div className="part5Title"><div>Error: {error}</div></div>;
        return (
            <Fragment>
                <div className="upcommingSpeakerNew past">
                    <h2>Learn from top industry leaders</h2>
                    <p>— our previous speakers & mentors —</p>
                </div>
                <div className="part5" >
                    {
                        speakers.map(speaker => (
                            <div className="person" key={speaker.id}>
                                <div className="imgMOre">
                                    <img src={require(`./img/${API_IMG_URL}/speakers/${speaker.img}`)} alt={speaker.name} rel="img" />
                                    {/* <div className="personMore">MORE</div> */}
                                </div>
                                <p className="personName">{speaker.name}</p>
                                <p className="personPosition">{speaker.position}</p>
                                <div className="personalInfo">{speaker.info}</div>
                            </div>
                        ))
                    }
                </div>
                <div className='seeMoreContanier'><div className="seeMore" onClick={() => this.props.history.push(`${spiker_push}/speakers`)}><span>See whole speakers</span><i className="arrow-right"></i></div></div>
            </Fragment >
        )
    }
}
export default withRouter(Speakers);