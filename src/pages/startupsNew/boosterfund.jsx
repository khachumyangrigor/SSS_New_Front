import React from 'react';

export class Fund extends React.Component {
    render = () => {
        return (
            <div className="boosterfund" >
                <h3 className="subtitle">SSS Booster Fund</h3>
                <div>
                    <div className="fundItem">
                        <div>
                            <div><img src={require('./img/icon/fund1.png')} alt="Booster"/></div>
                            <h4>About <br/> Booster Fund</h4>
                        </div>
                        <div><p>Booster Fund is an integral part of the SSS Platform. It is formed in Scope of the Booster Program and has a mandate to invest in SSS participating teams. During each SSS Event Separate Fund is raised.</p></div>
                    </div>
                    <div className="fundItem">
                        <div>
                            <div><img src={require('./img/icon/fund2.png')} alt="Booster"/></div>
                            <h4>The target <br/> of the fund</h4>
                        </div>
                        <div>
                            <p><i/>US$500K Fund for each SSS event</p>
                            <p><i/>UP TO US$100K per investment</p>
                        </div>
                    </div>
                    <div className="fundItem">
                        <div>
                            <div><img src={require('./img/icon/fund3.png')} alt="Booster"/></div>
                            <h4>Participation <br/> benefits</h4>
                        </div>
                        <div>
                            <p><i/>Access to SSS global network</p>
                            <p><i/>Access to professionally managed Investment fund</p>
                            <p><i/>Access to Global Market</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}