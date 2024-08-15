import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import EgyptIndividual from "./individual.jsx";

class EgyptIndividualPage extends React.Component {
  render = () => {
    return (
      <Fragment>
        <Helmet>
          <title>SSSHolidays Egypt</title>
        </Helmet>

        <div className="upcommingNew_coaches">
          <EgyptIndividual />
        </div>
      </Fragment>
    );
  };
}
export default EgyptIndividualPage;
