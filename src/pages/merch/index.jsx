import React from 'react';
import Header from '../headNew/head.jsx';
import FootterNew from '../footterNew/footterNew.jsx';
import Cover from './cover.jsx';
import About from './about.jsx';
import Included from './included.jsx';
import Community from './community.jsx';
import Subscribe from './subscribe.jsx';

import './merch.css';

class Merch extends React.Component{
    render=()=>{
        return(
            <div className="merch">
                <Cover/>
                <Header/>
                <About/>
                <Included/>
                <Community/>
                <Subscribe/>
                <FootterNew/>
            </div>
        )
    }
}

export default Merch;