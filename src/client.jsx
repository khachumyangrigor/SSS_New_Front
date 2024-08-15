import React from "react";
import { CookiesProvider } from "react-cookie";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  hydrateRoot(
    rootElement,
    <BrowserRouter>
      <React.StrictMode>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found. Cannot hydrate React application.");
}
