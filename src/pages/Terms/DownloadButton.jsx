import React from "react";

const DownloadButton = ({ url }) => {
  return (
    <div className="wb-termsDownloadBtn">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button>Download</button>
      </a>
    </div>
  );
};

export default DownloadButton;
