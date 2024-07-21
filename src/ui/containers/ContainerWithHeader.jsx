import React from "react";
import "./style.css";

const ContainerWithHeader = ({title, description, children}) => {
    return (
        <div className="container-with-header">
            {title &&
                <>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </>
            }
            {children}
        </div>
    );
};

export default ContainerWithHeader;
