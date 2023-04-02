import React from 'react';
import { withRouter } from 'react-router-dom';


class Doc extends React.Component {
    componentDidMount = () => {
        let allPath = this.props.location.pathname;
        let path = allPath.split("/");
        this.checkURL(path[1]);
    }
    componentWillReceiveProps = nextProps => {
        let allPath = nextProps.location.pathname;
        let path = allPath.split("/");
        this.checkURL(path[1]);
    }
    checkURL = url => {
        switch (url) {
            case 'sevan19':
                document.title = "Sevan Startup Summit 2019";
                break;
            case 'sevan18':
                document.title = "Sevan Startup Summit 2018";
                break;
            case 'sevan17':
                document.title = "Sevan Startup Summit 2017";
                break;
            case 'sevan16':
                document.title = "Sevan Startup Summit 2016";
                break;
            case 'uae18':
                document.title = "Seaside Startup Summit UAE RAK";
                break;
            case 'india18':
                document.title = "Seaside Startup Summit India Goa";
                break;
            case 'news':
                document.title = "Seaside Startup Summit News";
                break;
            case 'attend1':
                document.title = "Sevan Startup Summit Attend";
                break;
            case 'attend':
                document.title = "Sevan Startup Summit Attend";
                break;
            case 'visit':
                document.title = "Sevan Startup Summit Visit";
                break;
            default:
                document.title = "Seaside Startup Summit";
        }
    }
    render() {
        return null;
    }
}

export default withRouter(Doc);