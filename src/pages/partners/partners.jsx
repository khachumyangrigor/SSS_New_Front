import React from 'react';
import Head from '../headNew/head.jsx';
import Why from './why.jsx';
import {Carusel1, Carusel2} from './carusel.jsx';
import How from './how.jsx';
import InndividualPartner from './individual.jsx';
import Footer from '../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import './partners.css';

class Partners extends React.Component{
    render=()=>{
        return(
            <Fragment>
            <Helmet>
                <title>Partners | Seaside Startup Summit</title>
            </Helmet>
            <div className="partnersNew">
                <div className="partner_banner">
                    <div>
                        <h3>Alone we can do so little;</h3>
                        <h3>together we can do so much</h3>
                        <h2>Join the Family</h2>
                    </div>
                </div>
                <Head/>
                <Why/>
                {/* <Carusel1/> */}
                <div className="colorDivider"></div>
                <How/>
                <InndividualPartner/>
                <Carusel1/>
                <Footer/>
            </div>
            </Fragment>
        );    
    }
}

export default Partners; 