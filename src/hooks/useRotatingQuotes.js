import {useEffect, useState} from "react";

/**
 *
 * Rotates the quotes every 10 seconds
 * @param data
 * @returns
 */
const useRotatingQuotes = (quotes) => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    // updates the quotes every 10 seconds
    const tenSeconds = 10 * 1000;

    useEffect(
        () => {
            const intervalId = setInterval(() => {
                setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes?.length);
            }, tenSeconds);

            return () => clearInterval(intervalId);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [quotes]
    );

    if (!quotes) return null;

    return quotes[currentQuoteIndex];

};

export default useRotatingQuotes;
