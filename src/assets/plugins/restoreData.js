export default function restoreData(staticContext){
    let data = null;

    if (IS_CLIENT && window.__ROUTE_DATA__) {
        if(window.__ROUTE_DATA__[0])
            data = window.__ROUTE_DATA__[0];
        else
            data = undefined;

        delete window.__ROUTE_DATA__;
    }else if(staticContext && staticContext.data){
        if(staticContext.data[0])
            data = staticContext.data[0];
        else
            data = undefined;
    }

    return data;
};