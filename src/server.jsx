import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";

import App from "./app.jsx";

export const render = () => {
  return renderToString(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
};
