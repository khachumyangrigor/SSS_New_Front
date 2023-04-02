import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header.jsx';
import { Fragment } from 'react';
import SocialMenu from '../socialIcons.jsx';
//css
import './attend.css';
//Json
//import jsonData from "./mail.json";

class Attend extends React.Component {
    constructor() {
        super();
        this.mobile = false;
        this.state = {
            popUpMassage: 'none',
        }
    }
    render = () => {
        const { popUpMassage } = this.state;
        return (
            <Fragment>
                <Header />
                <div className='attendSection'>
                    <div className="popUpMassage" style={{ display: popUpMassage }} onClick={() => this.setState({ popUpMassage: 'none' })}>
                        <p>The call has not opened yet</p>
                        <div className="vidoClose"><span onClick={() => this.setState({ popUpMassage: 'none' })}>X</span></div>
                    </div>
                    <div className="attendMiddleContaner">
                        <div className="middleMain">
                            <div className="textPart">
                                <h2>Sevan Startup Summit 2020</h2>
                                <p>Seaside Startup Summit is a global platform for transforming entrepreneurship and connecting founders, investors, startup enthusiasts, and all other decision-makers of the startup ecosystem from the region and around the world. It's the first week-long outdoor startup gathering for intensive learning, genuine relationships, deal-making and immersive conversations about the hottest current topics in entrepreneurship.</p>
                            </div>
                            <div className="buttonpart">
                                <button onClick={() => this.setState({ popUpMassage: 'flex' })}>APPLY AS A STARTUP</button>
                                <button onClick={() => this.setState({ popUpMassage: 'flex' })}>ATTEND AS AN INVESTOR</button>
                            </div>
                        </div>
                        <div className="middleRigth">
                            <p>Attend as a</p>
                            <button onClick={() => this.setState({ popUpMassage: 'flex' })}>SPEAKER</button>
                            <button onClick={() => this.setState({ popUpMassage: 'flex' })}>DEVELOPER</button>
                            <button onClick={() => this.setState({ popUpMassage: 'flex' })}>VISITOR</button>
                            <button onClick={() => this.setState({ popUpMassage: 'flex' })}>VOLUNTEER</button>
                        </div>
                    </div>

                    <div className="sectionFooter">
                        <SocialMenu />
                        <Link to="/sevan20/"><div className="partnersButton">Back</div></Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Attend;
