import React from 'react';

export class Apply extends React.Component{
    render=()=>{
        return(
            <div className="guid" ref="guid">
            <h3 className="subtitle">How To Apply</h3>
            <div className="guidItems">
                <div onMouseOver={()=>this.refs.i1.classList.add('scaleBig')} onMouseOut={()=>this.refs.i1.classList.remove('scaleBig')}>
                    <div><img src={require('./img/icon/guid1.png')} alt="guid1" /></div>
                    <h4>— Application —</h4>
                    <p>In order to apply, you will need to fill in our application form. Please keep in mind, that provision of accurate information is important helps us to provide you the best experience</p>
                </div><i ref="i1"/>
                <div onMouseOver={()=>this.refs.i2.classList.add('scaleBig')} onMouseOut={()=>this.refs.i2.classList.remove('scaleBig')}>
                    <div><img src={require('./img/icon/guid2.png')} alt="guid2" /></div>
                    <h4>— Assessment & Selection —</h4>
                    <p>All the applied startup teams pass a screening process and the accepted teams based on their level of development and fields of operations (Tracks) will be distributed into one of two programs: Starter and Booster. The distribution into Starter and Booster is done by the SSS steering committee</p>
                </div><i ref="i2"/>
                <div>
                    <div><img src={require('./img/icon/guid3.png')} alt="guid3" /></div>
                    <h4>— Time to work —</h4>
                    <p>During the 7 days of the event you will have access to our specially designed program, which will end-up with startups battle</p>
                </div>
            </div>
        </div>
        )
    }
}