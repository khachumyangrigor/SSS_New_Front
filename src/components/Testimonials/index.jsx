import React from "react";
import {quotes} from './data'

import useRotatingQuotes from "../../hooks/useRotatingQuotes.js";

//!TODO create dedicated css file

const Testimonials = () => {

    const currentQuote = useRotatingQuotes(quotes);

    return (<section className="firstPageStausBox">
        {/*innerHtml ensures line breaks*/}
        <div className="status" dangerouslySetInnerHTML={{__html: currentQuote.quote}}/>
        <p>{currentQuote?.source}</p>
    </section>)
}

export default Testimonials;