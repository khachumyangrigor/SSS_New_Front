import * as React from 'react';

import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import {Helmet} from "react-helmet";
import App from './app';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import { CookiesProvider } from 'react-cookie';
import cookiesMiddleware from 'universal-cookie-express';

import {pageTemplate} from 'pageTemplate';
import routes from 'routes';
import loadData from './assets/plugins/loadData';
import {join} from 'path';

const app = express();
const port = 5000;
const {
    NODE_ENV = 'development'
} = process.env;
const IS_DEVELOPMENT = NODE_ENV === 'development';

function createMiddleware({assets}) {
    async function renderHtml(req) {
        const matchingRoutes = matchRoutes(routes, req.url.split('?')[0]);
        let promises = [];

        matchingRoutes.forEach(({ route, match }) => {
          if (route.loadData) {
            promises.push(route.loadData(match.params));
          }
        });

        let data;

        try{
            data = await Promise.all(promises);
            data = data.length > 0?data:null;
        }catch(err){
            console.log(err);
        }

        let context = {data};
        let content = renderToString(
            <CookiesProvider cookies={req.universalCookies}>
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <App/>
                </StaticRouter>
            </CookiesProvider>
        );

        if (context.url) {
            return {content: null, redirect: {status: context.status, url: context.url}}
        }else{
            const helmet = Helmet.renderStatic();

            return {
                content: pageTemplate({
                            css: assets.main.css,
                            js: assets.main.js,
                            content,
                            data,
                            helmet
                        }), 
                redirect: null
            }
        }        
    }

    function serverMiddleware(req, res, next) {
        renderHtml(req)
            .then(({content, redirect}) => {
                if(redirect){
                    res.redirect(redirect.status, redirect.url)
                }else{
                    res.send(content);
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: err.message,
                    stack: err.stack
                });
            });
    }

    const appRouter = express.Router();

    appRouter.use(cookiesMiddleware());
    appRouter.get('*', serverMiddleware);

    return appRouter;
}

if(!IS_DEVELOPMENT){
    const assets = {
        main: {
            css: 'css/main.css',
            js: 'main.js'
        }
    }
    app.get('*.js', (req, res, next)=>{
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
    })
    const appRouter = createMiddleware({assets});
    app.use('/assets/', express.static(join(__dirname, '..', 'client')))
    app.use(appRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}

export default createMiddleware;