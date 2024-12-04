import React from "react";
import { CookiesProvider } from "react-cookie";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./app.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  hydrateRoot(
    rootElement,
    <Router>
      <React.StrictMode>
        <HelmetProvider>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </HelmetProvider>
      </React.StrictMode>
    </Router>
  );
} else {
  console.error("Root element not found. Cannot hydrate React application.");
}
