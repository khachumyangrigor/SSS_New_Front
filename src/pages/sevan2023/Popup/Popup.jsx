import React from 'react';
import "./Popup.css"
import {useState, useRef} from "react"

function Popup(props) {

    const blockRef = useRef(null)
    const [infoMode, setInfoMode] = useState(props.infoMode)
    return (
        <div className={(props.status ? "popupWrapper popupBlockActive" : "popupWrapper")} onClick={() => props.setPopupStatus(false)}>
            <div
                 className={(props.status ? "popupBlock popupBlockActive" : "popupBlock")}
                 onClick={е => е.stopPropagation()}
                 ref={blockRef}
            >
                <span className="wb-close" onClick={() => props.setPopupStatus(false)}>X</span>
                <div className="wb-buyClosedInfo">
                    {infoMode !== null &&
                        (infoMode === false ?
                        (
                            <>
                                <h2>Visitor passes are available for purchase
                                    in the Telcell Wallet application.</h2>
                                <p className="wb-fowInternational">For international visitors</p>
                                <a href={"https://www.pay.seasidestartupsummit.com"} target="_blank" className="wb-buyTicketButton">Buy Tickets</a>
                            </>


                        )
                        :
                        (
                            <>
                                <h2>Visitor Passes with discounted prices are available in TelCell Wallet mobile application.</h2>
                                <a href={"https://telcellwallet.page.link/Sevan-Startup-Summit-2023"} target="_blank" className="wb-buyTicketButton">Go to Telcell Wallet</a>

                                <p className="wb-fowInternational">For international visitors</p>
                                <a href={"https://www.pay.seasidestartupsummit.com"} target="_blank" className="wb-buyTicketButton">Buy Tickets</a>

                            </>

                        )
                        )
                    }
                    {props.mobile !== undefined &&
                        (
                            props.mobile ?
                            (
                                <>
                                    <h2>Registration deadline has passed.</h2>
                                    <p>You can buy visitor passes now in the Events section of
                                        Telcell Wallet by simply clicking the button below.</p>
                                    <a href={"https://telcellwallet.page.link/Sevan-Startup-Summit-2023"} target="_blank" className="wb-buyTicketButton">Buy Ticket</a>
                                </>

                            )
                            :
                        (
                            <>
                                <h2>Registration deadline has passed.</h2>
                                <p>Visitor Passes are now available in the Events section of Telcell Wallet.</p>
                            </>

                        )
                        )

                    }
                </div>


            </div>
        </div>
    );
}

export default Popup;