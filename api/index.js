// Vercel serverless entry: renders every non-static request with the SSR middleware
// from the production server bundle (dist/server/main.js, built by `npm run dist`).
// Static files (/assets/*) are served by Vercel from the output directory.
const express = require('express');
const createMiddleware = require('../dist/server/main.js').default;

const app = express();

app.use(createMiddleware({
    assets: {
        main: {
            css: 'css/main.css',
            js: 'main.js',
        },
    },
}));

module.exports = app;
