import React from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import EgyptIndividual from './individual.jsx';
import FootterNew from '../firstPageNew/firstPageNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
// import './page.css';

class EgyptIndividualPage extends React.Component{
    render=()=>{
        return(
            <Fragment>
                <Helmet>
                    <title>SSSHolidays Egypt</title>
                </Helmet>

                <div className="upcommingNew_coaches">
                    <EgyptIndividual/>
                </div>
            </Fragment>
        );
    }
}
export default EgyptIndividualPage;





















