import React from 'react';
import TermsComponent from "../Terms/TermsComponent.jsx";
import {engData} from "../Terms/EngData/EngData";
class TermsEn extends React.Component {
    render = () => {
        return (
            <TermsComponent data={engData}/>
        ) 
    }
}

export default TermsEn;