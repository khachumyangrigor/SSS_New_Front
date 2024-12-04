import React from 'react';
import TermsComponent from "../Terms/TermsComponent.jsx";
import {armData} from "../Terms/ArmData/ArmData";
class TermsArm extends React.Component {
    render = () => {
        return (
            <TermsComponent data={armData}/>
        )
    }
}

export default TermsArm;