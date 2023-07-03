import React from 'react';
import "./Popup.css"
import {useState} from "react"
function Popup(props) {
    const [infoMode, setInfoMode] = useState(props.infoMode)

    return (
        <div className="popupWrapper">
            <div className="popupBlock">
                <span className="wb-close" onClick={() => props.setPopupStatus(false)}>X</span>
                <div className="wb-buyClosedInfo">
                    {!infoMode ?
                        (

                            <h2>For buying tickets, you have to use Telcell Wallet application</h2>

                        )
                        :
                        (
                            <>
                                <h2>Registration deadline has passed.</h2>
                                <p>You can buy visitor passes now in the Events section of
                                    Telcell Wallet by simply clicking the button below.</p>
                                {props.mobile ?
                                    (
                                        <a href={"https://telcellwallet.page.link/Sevan-Startup-Summit-2023"} target="_blank" className="wb-buyTicketButton">Buy Ticket</a>
                                    )
                                    :
                                    (
                                        <p className="wb-sorry">For buying tickets, you have to use Telcell Wallet application</p>
                                    )
                                }
                            </>


                        )
                    }
                </div>


            </div>
        </div>
    );
}

export default Popup;