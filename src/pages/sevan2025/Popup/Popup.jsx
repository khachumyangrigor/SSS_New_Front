import React from 'react';
import "./Popup.css"
import {useState, useRef} from "react"
import buyMethod1Img from "./img/1.png"
import buyMethod2Img from "./img/2.png"
import buyMethod3Img from "./img/33.png"
import logo from "./img/logo.png"
function Popup(props) {

    const blockRef = useRef(null)
    const [infoMode, setInfoMode] = useState(props.infoMode)
    return (
        <div className={(props.status ? "popupWrapper popupBlockActive" : "popupWrapper")} onClick={() => props.closePopup()}>
            <div
                 className={(props.status ? "popupBlock popupBlockActive" : "popupBlock")}
                 onClick={е => е.stopPropagation()}
                 ref={blockRef}
            >
                <span className="wb-close" onClick={() => props.closePopup()}>X</span>
                <div className="wb-buyClosedInfo">
                    {infoMode !== null &&
                        (infoMode === false ?
                        (
                            <>
                                <h2>Ticket Purchase Options</h2>
                                <div className="wb-buyMethods">
                                    <div className="wb-buyMethod">
                                        <img src={buyMethod1Img} alt=""/>
                                        <a href={"https://mootq.com/events/sevan-startup-summit-2025"} target="_blank" className="wb-buyTicketButton">Buy Tickets</a>
                                    </div>
                                    <div className="wb-buyMethod">
                                        <img src={buyMethod2Img} alt=""/>
                                        <a href={"https://imwallet.page.link/idramidbank "} target="_blank" className="wb-buyTicketButton">Buy Tickets</a>
                                    </div>
                                    <div className="wb-buyMethod">
                                        <img src={buyMethod3Img} alt=""/>
                                        <a href={"https://www.tomsarkgh.am/hy/event/49496/Sevan-Startup-Summit-2025-%D5%8D%D6%87%D5%A1%D5%B6-%D5%8D%D5%BF%D5%A1%D6%80.html"} target="_blank" className="wb-buyTicketButton">Buy Tickets</a>
                                    </div>
                                </div>
                                <div>
                                    <img src={logo} alt=""/>
                                </div>
                                {/*<a href={"https://www.pay.seasidestartupsummit.com"} target="_blank" className="wb-buyTicketButton">Buy Tickets</a>*/}
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
                                <h2>This application was closed on July 15th.</h2>
                                {/*<p>Visitor Passes are now available in the Events section of Telcell Wallet.</p>*/}
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