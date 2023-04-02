import React from 'react';
import { withRouter } from 'react-router-dom';
import OrganizersSevan19 from './sevan19.jsx';
import OrganizersSevan18 from './sevan18.jsx';
import OrganizersSevan17 from './sevan17.jsx';
import OrganizersSevan16 from './sevan16.jsx';
import OrganizersRak18 from './rak18.jsx';
import OrganizersGoa18 from './goa18.jsx';

const Organizers = props => {
    let location = props.history.location.pathname;
    if (location === '/sevan19/' || location === '/sevan19') return <OrganizersSevan19 />;
    else if (location === '/sevan18/' || location === '/sevan18') return <OrganizersSevan18 />;
    else if (location === '/sevan17/' || location === '/sevan17') return <OrganizersSevan17 />;
    else if (location === '/sevan16/' || location === '/sevan16') return <OrganizersSevan16 />;
    else if (location === '/uae18/' || location === '/uae18') return <OrganizersRak18 />;
    else if (location === '/india18/' || location === '/india18') return <OrganizersGoa18 />;
}

export default withRouter(Organizers)