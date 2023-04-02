import React from 'react';
import routes from './routes';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
 
//MAIN COMPOENTS
// import Doc from './doc.jsx';
import './index.css';

const getRoutes = () =>{
    return routes.map((route, index)=>{
      return <Route key={index} path={route.path} exact={route.exact} render={(params) => <route.component {...params} />}/>
    });
}

const App = () => {
    return (
        <div className='app'>
            {/* <Doc /> */}
            <Switch>
                {getRoutes()}
            </Switch>
        </div>
    )
}

export default App;