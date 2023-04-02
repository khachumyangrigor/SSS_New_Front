import React from 'react';
import * as EmailValidator from 'email-validator';

class Subscribe extends React.Component{
    constructor() {
        super();
        this.state = {
            mailAdded: ''
        };
    }
    subscribe=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        if (email === "") {
            this.setState({ mailAdded: 'Please enter your email' });
            return;
        }
        else if (EmailValidator.validate(email) !== true) {
            this.setState({ mailAdded: 'Please enter correct email' })
            return;
        }

        fetch('https://www.apis.seasidestartupsummit.com/merch/subscribe.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email}),
        })
        .then(resp => resp.json().then(jsonResp => {
            return resp.ok ? jsonResp : Promise.reject(jsonResp);
        })
        )
        .then(
            data => {
                if (data.resp === 'ok') { this.setState({ mailAdded: 'You are successfully subscribed.' }) }
                else if (data.resp === 'exist') { this.setState({ mailAdded: 'This mail already exist' }) }
                else { this.setState({ mailAdded: 'Something Wrong. Try again.' }) };
            }
        )   
        .catch(error => console.log(error));
    }
    render=()=>{
        return(
            <div className="subscribe">
                <div>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>About our latest products and special offers</p>
                    <form className="form" onSubmit={(e)=>{this.subscribe(e)}}>
                        <div>
                            <label htmlFor="mailInput">Email</label>
                            <input id="mailInput" type="text" name="email" placeholder="your@gmail.com" />
                        </div>
                        <button type="submit">Subscribe</button>
                    </form>
                    <small>{this.state.mailAdded}</small>
                </div>
            </div>
        )
    }
}

export default Subscribe;