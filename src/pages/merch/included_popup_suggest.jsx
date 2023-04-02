import React from 'react';

class PopupSuggestion extends React.Component{
    constructor(props){
        super();
        this.state={
            open:props.open,
            mailAdded:''
        }
    }
    UNSAFE_componentWillReceiveProps=(props)=>{
        this.setState({
            open:props.open
        })
    }
    handelSuggestion=(e)=>{
        e.preventDefault();
        const item=e.target.item.value;
        const comment=e.target.comment.value;
        if (item === "") {
            this.setState({ mailAdded: 'Please enter item name' });
            return;
        }
        fetch('https://www.apis.seasidestartupsummit.com/merch/suggest.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item,
                comment,
                date: new Date().toDateString()
            }),
        })
        .then(resp => resp.json().then(jsonResp => {
            return resp.ok ? jsonResp : Promise.reject(jsonResp);
        })
        )
        .then(
            data => {
                if (data.resp === 'ok') { this.setState({ mailAdded: 'Suggestion successfully send' }) }
                else { this.setState({ mailAdded: 'Something Wrong. Try again' }) };
            }
        )   
        .catch(error => console.log(error));
    }
    render=()=>{
        const {open} = this.state;
        return (
            <div className={`popup ${open?'open':''}`} onClick={()=>this.props.handeling()}>
                <div className="suggest" onClick={(e)=>e.stopPropagation()}>
                    <div className="closeLine"><img src={require('./img/icons/close.png')}  onClick={()=>this.props.handeling()}/></div>
                    <div>
                        <div className="line"/>
                        <h4>SSS Merch</h4>
                        <div className="line"/>
                    </div>
                    <div>
                        <p>Name the item you would like to be included in the SSSMerch</p>
                    </div>
                    <div>
                        <form onSubmit={(e)=>this.handelSuggestion(e)}>
                            <input type="text" placeholder="items" name="item"/>
                            <textarea placeholder="Other comments" name="comment"></textarea>
                            <button type="submit">Submit</button>
                            <small>{this.state.mailAdded}</small>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupSuggestion;
