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
                    {!infoMode ?
                        (

                            <h2>Visitor passes are available for purchase
                                in the Telcell Wallet application.</h2>

                        )
                        :
                        (
                            <>
                                <h2>Registration deadline has passed.</h2>

                                {props.mobile ?
                                    (
                                        <>
                                            <p>You can buy visitor passes now in the Events section of
                                                Telcell Wallet by simply clicking the button below.</p>
                                            <a href={"https://telcellwallet.page.link/Sevan-Startup-Summit-2023"} target="_blank" className="wb-buyTicketButton">Buy Ticket</a>
                                        </>

                                    )
                                    :
                                    (
                                        <p>Visitor Passes are now available in the Events section of Telcell Wallet.</p>
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