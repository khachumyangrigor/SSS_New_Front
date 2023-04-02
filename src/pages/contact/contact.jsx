import React from 'react';
import Header from '../header/header.jsx';
import { Fragment } from 'react';
//css
import './contact.css';


class Contactus extends React.Component {
    render = () => {
        return (
            <Fragment>
                <Header />
                <div className="contactSecion">
                    <div className="underMenu"><div className="underMenuItem"></div></div>
                    <div className="middle">
                        <div className="map">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12191.263770368092!2d44.5038689!3d40.1909094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc58aeafd4e41931e!2sSeaside%20Startup%20Summit!5e0!3m2!1sen!2s!4v1574246244558!5m2!1sen!2s" frameBorder={0} allowFullScreen={true}></iframe>
                        </div>
                        <div className="contact">
                            <p><span>Address: </span> <span>12 Proshyan Street, Yerevan</span> </p>
                            <p><span>Hours:</span> <span>Weekdays 10AM-6PM</span> </p>
                            <p><span>Phone:</span> <span>+374 98 80 20 28</span> </p>
                            <p><span>E-Mail:</span> <span>info@sss.am</span> </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contactus;