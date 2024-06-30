import React from 'react';

import termsImg from './img/terms.jpg'
import termsMobileImg from './img/termsMobile.jpg'

import './style.css'
class TermsArm extends React.Component {
    render = () => {
        return (
            <div className="termsEnContainer">
                <img
                    src={termsImg}
                    alt="Terms and Conditions"
                    className="termsEnPic"
                />
                <img
                    src={termsMobileImg}
                    alt="Terms and Conditions"
                    className="termsEnPicMobile"
                />
            </div>
        )
    }
}

export default TermsArm;