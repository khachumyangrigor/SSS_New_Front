import React from "react";
import "./style.css";

const ApplyButtonBlock = ({
  title = "Click Here",
  description,
  isExternal = false,
  url = "#",
}) => {
  return (
    <div className="apply-button-block">
      <a
        href={url}
        rel="noopener noreferrer"
        target={isExternal ? "_blank" : "_self"}
      >
        {title}
      </a>
      <p>{description}</p>
    </div>
  );
};

export default ApplyButtonBlock;
