import React from 'react';
import loadavg from './img/loader.gif';

const PageLoader = () => {
    return (
        <div className="PageLoading">
            <img src={loadavg} alt="Loading" />
        </div>
    )
}

export default PageLoader;