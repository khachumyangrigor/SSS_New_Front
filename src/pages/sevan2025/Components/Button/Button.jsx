import React from 'react';
import "./Button.css"

export const Button = (props) => {
    const styles = {
        color:props.color,
        backgroundColor: props.backgroundColor,
    }
    return (
        <button style={styles} className="wb-button">{props.title}</button>
    );
}

export default Button;