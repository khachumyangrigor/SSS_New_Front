import React from 'react';

class PopupComingSoon extends React.Component{
    constructor(props){
        super();
        this.state={
            open:props.open,
        }
    }
    UNSAFE_componentWillReceiveProps=(props)=>{
        this.setState({
            open:props.open
        })
    }

    render=()=>{
        const {open} = this.state;
        return (
            <div className={`popup ${open?'open':''}`} onClick={()=>this.props.handeling()}>
                <div className="soon" onClick={(e)=>e.stopPropagation()}>
                    <div className="closeLine"><img src={require('./img/icons/close.png')}  onClick={()=>this.props.handeling()}/></div>
                    <div>
                        <div className="line"/>
                        <img src={require('./img/amazon.png')} alt="amazon" />
                        <div className="line"/>
                    </div>
                    <div>
                        <h3>Coming Soon!</h3>
                        <p>We are currently working on this feature <br/> and will launch soon</p>
                    </div>
                    <div><div className="line"/></div>
                </div>
            </div>
        )
    }
}

export default PopupComingSoon;
