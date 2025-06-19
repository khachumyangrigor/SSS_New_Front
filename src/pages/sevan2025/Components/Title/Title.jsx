import React from 'react';
import "./Title.css"

export const Title = (props) => {
    if(props.date){
        return (
            <div className="wb-titleBlock">
                <h2 className="wb-title">{props.title}</h2>
                <p className="wb-titleDate">{props.date}</p>
            </div>

        );
    }

    return (
        <div className="wb-titleBlock">
            <h2 className="wb-title">{props.title}</h2>
        </div>

    );
}

export default Title;