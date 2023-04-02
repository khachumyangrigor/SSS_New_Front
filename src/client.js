import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './app.js';
import { BrowserRouter} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

hydrateRoot(
    document.getElementById('root'),
    <CookiesProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CookiesProvider>
);
