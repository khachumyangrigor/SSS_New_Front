import React from 'react';
import "./Button.css"

export const Button = (props) => {
    const styles = {
        color:props.color,
        backgroundColor: props.backgroundColor,
    }
    const onclick = () => {
        window.open(props.link, '_blank')
    }
    return (
        <button onClick={onclick} style={styles} className="wb-button">{props.title}</button>
    );
}

export default Button;