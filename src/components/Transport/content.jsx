import React from 'react';

export const ShuttleContent = () => (
    <>
        <p>
            <b>This year our transportation partner gg is organizing convenient ggShuttle group rides from Yerevan to
                SSS.</b>
        </p>
        <p>Reserve your seat in advance and share the journey with fellow participants.</p>
        <div className="wb-sevan2024ShuttleButtons">
            <a href="https://bit.ly/to-SSS">
                <button>To SSS</button>
            </a>
            <a href="https://bit.ly/from-SSS">
                <button>From SSS</button>
            </a>
        </div>
        <p>To reserve your seat, please open the link on your mobile device.</p>
    </>
);

export const CarContent = () => (
    <>
        <p><b>You can easily reach the venue on your own.</b></p>
        <p>The exact location will be provided soon.</p>
        <p style={{fontWeight: 700}}>
            <img src={require("../../pages/sevan2024/img/disignIcon/parking.png") ?? ""} alt="parking"/>
            Parking is available at the venue
        </p>
        <iframe
            title="shuttleMap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2601.4832455460923!2d45.5803449!3d40.342274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f89d42619d199%3A0xab251b125c1578ac!2sSevan%20Startup%20Summit!5e1!3m2!1sen!2sam!4v1686590984126!5m2!1sen!2sam"
            allowFullScreen
        ></iframe>
    </>
);
