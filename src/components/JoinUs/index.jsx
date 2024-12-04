import React, {useState} from "react";
import * as EmailValidator from "email-validator";

const JoinUs = () => {
    const [email, setEmail] = useState('');
    const [placeholder, setPlaceholder] = useState("your@gmail.com");

    const submitHandler = (e) => {
        e.preventDefault();

        if (!email || email.trim() === "") {
            setPlaceholder('Please enter your email');
            return;
        } else if (!EmailValidator.validate(email)) {
            setEmail('');
            setPlaceholder('Please enter a valid email address');
            return;
        }

        fetch('https://www.apis.seasidestartupsummit.com/subscribe.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email}), // Wrap email in an object
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.resp === 'ok') {
                    setPlaceholder('You are successfully subscribed.');
                } else if (data.resp === 'exist') {
                    setPlaceholder('This email already exists.');
                } else {
                    setPlaceholder('Something went wrong. Try again.');
                }
                setEmail('');
            })
            .catch(error => {
                console.error('Error:', error);
                setEmail('');
                setPlaceholder('Something went wrong. Try again.');
            });
    };
    return (
        <section className="firstPageJoin">
            <div className="joinTitle">Join our community</div>
            <div className="joinText">In order to get the latest updates from around the world you can
                subscribe to our newsletter.
            </div>
            <div className="joinInputBox">
                <section className="form">
                    <div>
                        <label htmlFor="mailInput">Email</label>
                        <input id="mailInput" type="text" placeholder={placeholder}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <button type="button" onClick={e => submitHandler(e)}>Subscribe</button>
                </section>
            </div>
        </section>
    )
}

export default JoinUs